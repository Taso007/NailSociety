import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Members from './components/about/members/Members';
import Statutes from './components/about/statutes/Statutes';
import AnnualReports from './components/about/annualreports/AnnualReports';
import Events from './components/events/Events';
import ScientificBlogs from './components/blogs/ScientificBlogs';
import Patients from './components/patients/Patients';
import EventPage from './components/events/eventpage/EventPage';
import Navbar from './components/Navbar';
import BlogPage from './components/blogs/blogpage/BlogPage';
import './mainstyle.css'
import useLanguage from './components/reusable/useLanguage';

function App() {
  const { language, changeLanguage } = useLanguage();
 
  return (
    <>
    <Navbar changeLanguage={changeLanguage} language={language}/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/members" element={<Members language={language}/>} />
      <Route path="/statutes" element={<Statutes language={language}/>} />
      <Route path="/annualReports" element={<AnnualReports language={language} />} />
      <Route path='/events' element={<Events language={language}/>} />
      <Route path='/blogs' element={<ScientificBlogs language={language}/>} />
      <Route path='/patients' element={<Patients language={language}/>} />
      <Route path="/event/:id" element={<EventPage language={language}/>} />
      <Route path="/blog/:id" element={<BlogPage language={language}/>} />
    </Routes>
    </>
  )
}

export default App
