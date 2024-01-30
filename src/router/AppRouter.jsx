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
import Security from "../services/Security";
import CloudMig from "../services/CloudMig";
import BachupDisaster from "../services/BachupDisaster";
import ConstReview from "../services/ConstReview";
import Performance from "../services/Performance";
import WebsiteDesing from "../services/WebsiteDesing";
import StorageSolutions from "../services/StorageSolutions";

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
        <Route path="/fullstack"element={<FullStack/>} />
        <Route path="/awsWellAr" element={<AwsWellAr />} />
        <Route path="/BuildAws" element={<BuildAws />} />
        <Route path="/Security" element={<Security />} />
        <Route path="/CloudMig" element={<CloudMig />} />
        <Route path="/BachupDisaster" element={<BachupDisaster />} />
        <Route path="/ConstReview" element={<ConstReview />} />
        <Route path="/Performance" element={<Performance />} />
        <Route path="/WebsiteDesing" element={<WebsiteDesing />} />
        <Route path="/StorageSolutions" element={<StorageSolutions />} />
      </Routes>

      <FooterWithSitemap />
    </>
  );
};

export default AppRouter;
