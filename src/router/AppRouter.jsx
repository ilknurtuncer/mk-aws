import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { NavbarWithMegaMenu } from "../components/NavbarWithMegaMenu"
import Home from "../pages/Home"
import About from "../pages/About"

import Contact from "../pages/Contact"
import Services from "../pages/Services"
import Insight from "../pages/Services"
import WorkWithUs from "../pages/WorkWithUs";
import Main from "../components/Main"
import { FooterWithSitemap } from "../components/FooterWithSitemap"
import CarouselComponent from "../components/CarouselComponent"







const AppRouter = () => {
  // eslint-disable-next-line no-undef
  const navigate = useNavigate(); // useNavigate eklenen kütüphaneden alındı

  const handleSubmit = () => {
    // Form submit işleminden sonra sayfayı yönlendir
    navigate("/contact-success"); // "/contact-success" sayfasına yönlendir
  };

  return (
    <>
      <NavbarWithMegaMenu />
      <Home/>
      <CarouselComponent/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact onSubmit={handleSubmit} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/inssight" element={<Insight />} />
        <Route path="/workwithus" element={<WorkWithUs />} />
      </Routes>
      <Main />
      <FooterWithSitemap/>
    </>
  );
}

export default AppRouter
