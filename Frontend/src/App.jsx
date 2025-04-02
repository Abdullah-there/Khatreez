import './App.css'
import Navbar from './components/Navbar'
import FirstComponent from "./components/FirstComponent"
import Interval from './components/Interval'
import BlogList from './components/BlogList'
import CategoriesComponent from './components/CategoriesComponent'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom';
import BlogDisplay from './components/BlogDisplay'
import SingleBlog from './components/SingleBlog'
import ArticlesStatus from './components/ArticlesStatus'
import Contact from './components/Contact'

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