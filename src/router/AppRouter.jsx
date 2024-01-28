import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { NavbarWithMegaMenu } from "../components/NavbarWithMegaMenu"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Services from "../pages/Services"
import { FooterWithSitemap } from "../components/FooterWithSitemap"
import AwsWellAr from '../services/AwsWellAr';
import BuildAws from '../services/BuildAws';
import WordWithUs from '../pages/WordWithUs';
import Security from '../services/Security';
import CloudMig from '../services/CloudMig';



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
        <Route path="/AwsWellAr" element={<AwsWellAr />} />
        <Route path="/BuildAws" element={<BuildAws />} />
        <Route path="/WordWithUs" element={<WordWithUs />} />
        <Route path="/Security" element={<Security />} />
        <Route path="CloudMig"  element={<CloudMig/>}/>
      </Routes>
      <FooterWithSitemap />
    </>
  );
}

export default AppRouter
