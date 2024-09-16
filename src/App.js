// import './App.css';
import React ,{useEffect}from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Aos from "aos";
import "aos/dist/aos.css"
// import Experience from './components/Experience'
function App() {
  useEffect(() => {
    Aos.init();
  
  }, [])
  
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <Home />
        {/* <Experience/> */}
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
