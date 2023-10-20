import { useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Homepage from './pages/homepage'
import Application from './pages/Application'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'



function App() {
  // const logoRef = useRef();

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   ScrollTrigger.create({
  //     animation: gsap.from(logoRef.current, {
  //       y: "50vh",
  //       scale: 6,
  //       yPercent: -50,
  //     }),
  //     scrub: true,
  //     trigger: logoRef.current,
  //     start: "top bottom",
  //     end: "top center",
  //   });
  // }, []);

  return (
    <BrowserRouter>
      <Header />
      <div className="logo-container-header">
        <h1 className="main-logo" ref={logoRef} key={logoRef.current}>
          FETCH
        </h1>
        </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/application" element={<Application />} />
        <Route path="*" element={<Homepage />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
