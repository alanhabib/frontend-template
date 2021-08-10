import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleIsOpen} />
      <Navbar toggle={toggleIsOpen} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
