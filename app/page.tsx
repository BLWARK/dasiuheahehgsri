"use client"
import React, { useState, useEffect } from "react";
import Hero from "@/components/page-components/hero/Hero";
import About from "@/components/page-components/about/About";
import Keunggulan from "@/components/page-components/keunggulan/Keunggulan";
import Strategic from "@/components/page-components/strategic/Strategic";


const Page = () => {


 

  return (
    <div className="w-full h-full">
      
      {/* LoadingScreen will cover content while loading is true */}
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>

      <section>
        <Keunggulan />
      </section>
      <section>
        <Strategic />
      </section>
    </div>
  );
};

export default Page;
