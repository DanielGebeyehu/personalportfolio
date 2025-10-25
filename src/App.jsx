import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro"
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  const [count, setCount] = useState(0);

  return <>
  <Intro/>
  <Navbar/>
  <Contact/>
  <Skills/>
  <Projects/>
  <About/>
  <Footer/>
  
  </>;
}

export default App;
