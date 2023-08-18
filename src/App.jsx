import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import { LoadingScreen } from "./components/LoadingScreen";

const AsyncHome = lazy(() => import("./pages/Home"));
const AsyncAbout = lazy(() => import("./pages/About"));
const AsyncProjects = lazy(() => import("./pages/Projects"));
const AsyncContact = lazy(() => import("./pages/Contact"));
const AsyncServices = lazy(() => import("./pages/Services"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingScreen />}>
        <Router>
          <TopBar />
          <Navigation />
          <Routes>
            <Route path="/" element={<AsyncHome />} />
            <Route path="/about" element={<AsyncAbout />} />
            <Route path="/projects" element={<AsyncProjects />} />
            <Route path="/services" element={<AsyncServices />} />
            <Route path="/contact" element={<AsyncContact />} />
            <Route
              path="*"
              element={<h1 className="text-center">Page not Found!!</h1>}
            />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
