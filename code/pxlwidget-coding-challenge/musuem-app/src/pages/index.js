import * as React from "react";
import { Helmet } from "react-helmet";
import "../styles/sass/main.scss";

// Components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

// Sections
import Banner from "../sections/Banner";
import Features from "../sections/Features";
import About from "../sections/About";
import Shop from "../sections/Shop";
import Exhibitions from "../sections/Exhibitions";
import Contact from "../sections/Contact";

// markup
const Index = () => {
  return (
    <>
      <Helmet>
        <title>Museum Website</title>
      </Helmet>
      <div className="container">
        <Banner />
        <Navbar />
        <Header />
        <Features />
        <About />
        <Shop />
        <Exhibitions />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
