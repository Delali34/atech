import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "@/components/About";
import Courses from "@/components/Courses";
import SocialGroups from "@/components/Groups";
import Footer from "@/components/Footer";

const index = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <AboutUs />
      <Courses />
      <SocialGroups />
      <Footer />
    </div>
  );
};

export default index;
