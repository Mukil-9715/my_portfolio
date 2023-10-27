import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Nav from './Component/Nav';
import Skill from './Component/Skill';
import Ct from './Component/Ct';
import About from './Component/About';
import At from './Component/At';

function App() {
  return (
    <>
    <Nav/>
    <Home/>
    {/* <Skill/> */}
    <About/>
    {/* <At/> */}
    {/* <Contact/> */}
    <Ct/>

    <Footer/>
    </>
  );
}

export default App;