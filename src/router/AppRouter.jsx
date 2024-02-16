import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { NavbarWithMegaMenu } from "../components/NavbarWithMegaMenu";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import { FooterWithSitemap } from "../components/FooterWithSitemap";

import AwsWellAr from "../services/AwsWellAr";
import FullStack from "../services/FullStack";
import BuildAws from "../services/BuildAws";

import CloudMig from "../services/CloudMig";
import BachupDisaster from "../services/BachupDisaster";
import ConstReview from "../services/ConstReview";
import Performance from "../services/Performance";

import StorageSolutions from "../services/StorageSolutions";
import SecurityBusiness from "../services/SecurityBusiness";
import AboutUs from "../pages/AboutUs";
import WordWithUs from "../pages/WordWithUs";
import AboutUsFooter from "../pages/AboutUsFooter";
import Insıght from "../pages/Insıght";


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
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/Insıght" element={<Insıght/>}/>
        <Route path="/wordwith" element={<WordWithUs/>} />
        <Route path="/fullstack" element={<FullStack />} />
        <Route path="/awsWellAr" element={<AwsWellAr />} />
        <Route path="/BuildAws" element={<BuildAws />} />
        <Route path="/SecurityBusiness" element={<SecurityBusiness />} />
        <Route path="/CloudMig" element={<CloudMig />} />
        <Route path="/BachupDisaster" element={<BachupDisaster />} />
        <Route path="/ConstReview" element={<ConstReview />} />
        <Route path="/Performance" element={<Performance />} />
        <Route path="/SecurityBusiness" element={<SecurityBusiness/>} />
        <Route path="/StorageSolutions" element={<StorageSolutions />} />
        <Route path="/About-us" element={<AboutUsFooter/>} />
      </Routes>

      <FooterWithSitemap />
    </>
  );
};

export default AppRouter;
