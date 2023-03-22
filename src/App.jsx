import "./App.css";
import { useEffect } from "react";
import Menu from "./components/menu";
import Play from "./components/play";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Blogtext from "./components/blogtext";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div className="App">
      <AnimatePresence initial={false} mode={"wait"}>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogtext/:blogsId" element={<Blogtext />} />
        </Routes>
        <Play />
      </AnimatePresence>
    </div>
  );
}

export default App;
