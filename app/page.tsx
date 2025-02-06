"use client"
import React from "react";
import Hero from "@/components/page-components/hero/Hero";
import About from "@/components/page-components/about/About";
import Keunggulan from "@/components/page-components/keunggulan/Keunggulan";
import Strategic from "@/components/page-components/strategic/Strategic";
import Market from "@/components/page-components/market-analisis/market"


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
        <Market />
      </section>
      <section>
        <Strategic />
      </section>
    </div>
  );
};

export default Page;
