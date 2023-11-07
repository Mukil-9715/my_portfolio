import "bootstrap/dist/css/bootstrap.css";
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import AboutModules from './Component/Modules/AboutModules';
import HomeModules from './Component/Modules/HomeModules';
import ProjectModules from './Component/Modules/ProjectModules';
import Nav from './Component/Nav';
// import Ct from './Component/Ct';

function App() {
  return (
    <>
    <Nav/>
    <Routes >
    <Route path="/" element={<HomeModules/>}/>
    <Route path="/AboutModules" element={<AboutModules/>}/>
    <Route path="/ProjectModules" element={<ProjectModules/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
