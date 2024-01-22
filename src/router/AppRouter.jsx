import { Routes, Route } from "react-router-dom"
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
  return (
    <>
      <NavbarWithMegaMenu />
      <Home/>
      <CarouselComponent/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
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
