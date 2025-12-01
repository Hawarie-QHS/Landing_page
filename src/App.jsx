import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import AboutTwo from "./components/AboutTwo";
import VisiMisi from "./components/VisiMisi";
import Program from "./components/Program";
import Contact from "./components/Contact";
import Jenjang from "./components/Jenjang";
import Footer from "./components/Footer";
// nanti bisa tambahkan Jenjang, Footer, dll di sini

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <About />
        <AboutTwo />
        <VisiMisi />
        {/* Tambah section lainnya di bawah */}
        <Program />
        <Jenjang />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
};

export default App;
