import Aboutus2 from "./components/Aboutus2";
import AboutVideoSection from "./components/AboutVideoSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Head from "./components/Head";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Organic from "./components/Organic";
import WhatWeDo from "./components/WhatWeDo";
import WhyChooseUs from "./components/WhyChooseUs";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <Head id="home" />
      <HeroSection id="home" />
      <Organic id="organic" />
      <Aboutus2 id="about" />
      <AboutVideoSection id="about2" />
      <WhatWeDo id="services" />
      <WhyChooseUs id="why" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}
