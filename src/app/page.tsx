import React from "react";
import Home from "./home/page";
import About from "./about/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Contactus from "./contact/page";


const Page = () => {
  return (
    <main className="w-full">
      <div className="snap-start snap-always min-h-screen"><Home/></div>
      <div className="snap-start snap-always min-h-screen"><About/></div>
      <div className="snap-start snap-always min-h-screen"><Projects/></div>
      <div className="snap-start snap-always min-h-screen"><Skills/></div>
      <div className="snap-start snap-always min-h-screen"><Contactus/></div>
    </main>
  );
};

export default Page;
