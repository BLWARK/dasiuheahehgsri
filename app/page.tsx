"use client"
import React, { useState, useEffect } from "react";
import Hero from "@/components/page-components/hero/Hero";
import About from "@/components/page-components/about/About";
import Keunggulan from "@/components/page-components/keunggulan/Keunggulan";
import Strategic from "@/components/page-components/strategic/Strategic";
import animationData from "../Animation - 1738732584649.json";
import dynamic from "next/dynamic";

// Dynamically import LottiePlayer with SSR disabled
const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
   
    const handlePageLoad = () => {
      setTimeout(() => {
        setIsOpen(true); // Buka tirai
        setTimeout(() => setIsLoading(false), 1500); // Sembunyikan loading setelah animasi
      }, 500);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  return (
    <div className="w-full h-full">
      {isLoading && (
        <div className={`loading-overlay ${isOpen ? "hiddens" : ""}`}>
         <div className="fixed top-0 left-0 w-full h-full bg-black z-50 flex justify-center items-center transition-transform transform loading-screen">
          <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: 200, height: 200 }}
          />
        </div>
        </div>
      )}
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
