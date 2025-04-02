import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg";
import env from "dotenv"

env.config();
const app = express();
const port = process.env.PORT || 3000;
const db = new pg.Client({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_DATABASE,
  password: String(process.env.DATABASE_PASSWORD),
  port: Number(process.env.DATABASE_PORT),
  ssl: false
})

db.connect();
app.use(cors());
// Enable for specific frontend URL
app.use(cors({
  origin: 'https://khatreez-9boz-pink.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // if using cookies/auth
}));

// Or enable for all Vercel preview URLs
app.use(cors({
  origin: [
    'https://khatreez-9boz-pink.vercel.app',
    'https://khatreez-*.vercel.app', // wildcard for all preview URLs
    'https://khatreez.vercel.app' // your production URL
  ],
  credentials: true
}));
app.use(bodyParser.urlencoded({ extended : true}))

app.get("/data/blogdisplay/:limit", async (req, res) => {
  const limit = parseInt(req.params.limit, 10);
  try {
    const response = await db.query('SELECT * FROM blogs ORDER BY id DESC LIMIT $1', [limit]);
    const result = response.rows;
    res.send(result);
  } catch (err) {
    console.error("Database query error:", err.message);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/data/blogmain", async (req, res) => {
 try {
    const response = await db.query('SELECT * FROM blogs WHERE main = true ORDER BY id DESC');
    const result = response.rows;
    res.send(result);
  } catch (err) {
    console.error("Database query error:", err.message);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/data/blogcomponent", async (req, res) => {
  try {
    const response = await db.query('SELECT * FROM blogs ORDER BY id DESC LIMIT 4');
    const result = response.rows;
    res.send(result);
  } catch (err) {
    console.error("Database query error:", err.message);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/data/article/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const response = await db.query("SELECT * FROM blogs WHERE id = $1", [id]);
    const data = response.rows;
    res.send(data);
  } catch (err) {
    console.error("Database query error:", err.message);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/articles/filter/:type/:limit", async (req, res) => {
  const type = req.params.type;
  const limit = parseInt(req.params.limit);
  try {
    if (!type || typeof type !== 'string') {
      return res.status(400).json({ error: "Invalid type parameter" });
    }

    const response = await db.query("SELECT * FROM blogs WHERE status = $1::text ORDER BY id DESC LIMIT $2", [type.trim(), limit]);
    
    if (response.rows.length === 0) {
      return res.status(404).json({ message: "No articles found with this status" });
    }
    
    const data = response.rows;
    res.send(data);
    
  } catch (err) {
    console.error("Full error details:", {
      message: err.message,
      stack: err.stack,
      code: err.code
    });
    res.status(500).json({ 
      error: "Internal Server Error",
      details: err.message  
    });
  }
});


app.get("/search/article/:title", async (req, res) => {
  const title = req.params.title;

  if (!title || typeof title !== 'string') {
    return res.status(400).json({ 
      error: "Valid title search parameter is required" 
    });
  }

  const searchTerm = `%${title.trim()}%`;
  try {
    const response = await db.query("SELECT * FROM blogs WHERE title ILIKE $1 ORDER BY id DESC LIMIT 5", [searchTerm]);
    const data = response.rows;
    res.send(data);
  } catch (err) {
    console.error("Error getting Data", err)
  }
})

app.listen(port, () => console.log(`Server running at port ${port}`));