import React from "react";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import QuoteForm from "./QuoteForm";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <QuoteForm />
      <Footer />
    </div>
  );
};

export default Home;
