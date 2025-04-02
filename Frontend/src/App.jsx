import './App.css'
import Navbar from './Components/Navbar'
import FirstComponent from "./components/FirstComponent"
import Interval from './Components/interval'
import BlogList from './Components/BlogList'
import CategoriesComponent from './Components/CategoriesComponent'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom';
import BlogDisplay from './Components/BlogDisplay'
import SingleBlog from './Components/SingleBlog'
import ArticlesStatus from './Components/ArticlesStatus'
import Contact from './Components/Contact'

function App() {
  return (
    <div>
        

      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
            <FirstComponent />
            <Interval title="See Latest" detail="Enhance Knowledge and change the way you see the world" />
            <BlogList />
            <Interval title="Popular Categories" />
            <CategoriesComponent />
            <Footer />
          </>
        } />

        <Route path="/articles" element={<><Navbar /><BlogDisplay /><Footer /></>} />

        <Route path="/articles/:id" element={<><Navbar /><SingleBlog  /><Footer /></>} />

        <Route path="/articles/filter/:type" element={<><Navbar /><ArticlesStatus  /><Footer /></>} />

        <Route path='/contact' element={<><Navbar /><Contact /></>} />

      </Routes>

      
    </div>
  );
}
export default App