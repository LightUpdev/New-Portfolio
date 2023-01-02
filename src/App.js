import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Hero from "./Component/Hero";
import Skills from "./Component/Skills";
import About from "./Component/About";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  const scrollFunction = () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  } 


  if (isLoading) {
    return (
      <>
        <div className="loader">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
        <h3 className="text-center">Page Loading</h3>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <Hero />
        <Skills />
        <About />
        <Footer backUp={scrollFunction} />
      </>
    );
  }
}

export default App;
