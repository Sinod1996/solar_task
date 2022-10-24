import React,{useState, useEffect} from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import './assets/styles/App.css';
import './assets/styles/App.css';
import {ReactComponent as ArrowUp} from './assets/svg/arrow.svg';

function App() {
     const [isVisible, setIsVisible] = useState(false);

     const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

   useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

    return (
        <div className="App">
            <Home/>
            <About/>
            <Contacts/>
             <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
            <button className='btn'><ArrowUp className='arrow'/></button>
         </div>
      )}
    </div>
        </div>
    );
}

export default App;
