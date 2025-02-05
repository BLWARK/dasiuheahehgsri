"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import newsData from "@/data/newsData";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedText1, setAnimatedText1] = useState("");
  const [animatedText2, setAnimatedText2] = useState("");
  const [animatedText3, setAnimatedText3] = useState("");
  const [animatedText4, setAnimatedText4] = useState("");
  const [animatedText5, setAnimatedText5] = useState("");
  const mainText1 = "Global";
  const mainText2 = "Strategi";
  const mainText3 = "Riset"
  const mainText4 = "Indonesia"
  const mainText5 = "Menuju Indonesia yang demokratis, transparan, dan akuntabe"

  useEffect(() => {
    scrambleText(mainText1, setAnimatedText1, 1000);
    scrambleText(mainText2, setAnimatedText2, 1400); // Delay animasi kata kedua
    scrambleText(mainText3, setAnimatedText3, 1800);
    scrambleText(mainText4, setAnimatedText4, 2000); // Delay animasi kata kedua
    scrambleText(mainText5, setAnimatedText5, 2400); // Delay animasi kata kedua
  }, []);

  const scrambleText = (finalText, setText, delay = 0) => {
    const characters = "Global Strategi Riset Indonesia";
    let scrambledText = "";
    let progressIndex = 0;
    let currentLength = 0;

    setTimeout(() => {
      const interval = setInterval(() => {
        if (progressIndex > finalText.length) {
          clearInterval(interval);
          setText(finalText); // Set teks final
          return;
        }

        // Membuat huruf acak di posisi belum fix
        scrambledText = Array.from({ length: finalText.length }, (_, i) => {
          if (i < progressIndex) return finalText[i]; // Huruf yang sudah benar
          return characters.charAt(Math.floor(Math.random() * characters.length)); // Huruf acak
        }).join("");

        setText(scrambledText);

        // Kemajuan tiap iterasi
        progressIndex += 1;
      }, 30); // Waktu per scramble
    }, delay);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsData.length);
    }, 5000); // Slide berganti setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-main bg-opacity-70"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1400px] w-full flex flex-col lg:flex-row items-start lg:items-center lg;justify-center 2xl:gap-20 gap-10 px-6 2xl:mt-0 mt-20">
         
        {/* Text Section (Kiri) */}
        <div className="flex-1 text-white">
        
          <p className="text-4xl md:text-[5em] font-bold leading-[1.2]">
          {animatedText1} <span>  {animatedText2}</span>
          </p>
          <h1 className="text-4xl md:text-[5em] font-bold leading-[1.2] ">
          {animatedText3}<span>  {animatedText4}</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl">
          {animatedText5}
          </p>
        </div>

        {/* Slide Section (Kanan) */}
        <div className="relative w-full flex-1 overflow-hidden h-[300px]">
      
          <div
            className="flex gap-2  transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {newsData.map((news) => (
              <div
                key={news.id}
                className="min-w-full h-[300px]   rounded-lg overflow-hidden relative"
              >
                {/* Gambar Background */}
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
                {/* Overlay konten */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-6">
                  <h2 className="text-white text-xl font-bold">{news.title}</h2>
                  <p className="text-gray-300 text-sm mt-2">{news.description}</p>
                  <p className="text-gray-400 text-xs mt-1">{news.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
