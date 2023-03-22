import "./App.css";
import Menu from "./components/menu";
import React from "react";
import { CircleLoader } from "react-spinners";
const LazyHome = React.lazy(() => import("./pages/home"));
const LazyAbout = React.lazy(() => import("./pages/about"));
const LazyPortfolio = React.lazy(() => import("./pages/portfolio"));
const LazyContact = React.lazy(() => import("./pages/contact"));
const LazyBlog = React.lazy(() => import("./pages/blog"));
const LazyBlogtext = React.lazy(() => import("./components/blogtext"));
import { Routes, Link, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const fallBack = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh !important",
        backgroundColor: "white",
        maxWidth: "100% !important",
        zIndex: "100000",
        position: "static",
      }}
    >
      <CircleLoader
        style={{ position: "absolute", bottom: "50%" }}
        color="#ffb400"
        loading
        size={100}
        speedMultiplier={1}
      />
    </div>
  );
  return (
    <div className="App">
      <AnimatePresence initial={false} mode={"wait"}>
        <Menu />
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={fallBack}>
                <LazyHome />
              </React.Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <React.Suspense fallback={fallBack}>
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route
            path="/portfolio"
            element={
              <React.Suspense fallback={fallBack}>
                <LazyPortfolio />
              </React.Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <React.Suspense fallback={fallBack}>
                <LazyContact />
              </React.Suspense>
            }
          />
          <Route
            path="/blog"
            element={
              <React.Suspense fallback={fallBack}>
                <LazyBlog />
              </React.Suspense>
            }
          />
          <Route
            path="/blogtext/:blogsId"
            element={
              <React.Suspense fallback={fallBack}>
                <LazyBlogtext />
              </React.Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
