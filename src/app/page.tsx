import React from "react";
import Home from "./home/page";
import About from "./about/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Contactus from "./contact/page";


const Page = () => {
  return (
    <div>
     <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contactus/>

    </div>
  );
};

export default Page;
