import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { NavbarWithMegaMenu } from "../components/NavbarWithMegaMenu"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Services from "../pages/Services"
import { FooterWithSitemap } from "../components/FooterWithSitemap"




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

     
      
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/contact" element={<Contact onSubmit={handleSubmit} />} />
        <Route path="/services" element={<Services />} />
       
      </Routes>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact onSubmit={handleSubmit} />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <FooterWithSitemap/>
    </>
  );
}

export default AppRouter
