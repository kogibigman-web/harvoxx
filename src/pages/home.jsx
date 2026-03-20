import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Services from "../components/services";
import Pricing from "../components/pricing";
import Contact from "../components/contact";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
