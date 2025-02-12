"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import newsData from "@/data/newsData"; 
import Link from "next/link"; 

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedText1, setAnimatedText1] = useState("");
  const [animatedText2, setAnimatedText2] = useState("");
  const [animatedText3, setAnimatedText3] = useState("");
  const [animatedText4, setAnimatedText4] = useState("");
  const [animatedText5, setAnimatedText5] = useState("");

  const mainText1 = "Global";
  const mainText2 = "Strategi";
  const mainText3 = "Riset";
  const mainText4 = "Indonesia";
  const mainText5 = "Menuju Indonesia yang demokratis, transparan, dan akuntable";

  useEffect(() => {
    scrambleText(mainText1, setAnimatedText1, 1000);
    scrambleText(mainText2, setAnimatedText2, 1400); 
    scrambleText(mainText3, setAnimatedText3, 1800);
    scrambleText(mainText4, setAnimatedText4, 2000); 
    scrambleText(mainText5, setAnimatedText5, 2400); 
  }, []);

  const scrambleText = (finalText, setText, delay = 0) => {
    const characters = "Global Strategi Riset Indonesia";
    let scrambledText = "";
    let progressIndex = 0;

    setTimeout(() => {
      const interval = setInterval(() => {
        if (progressIndex > finalText.length) {
          clearInterval(interval);
          setText(finalText); 
          return;
        }

        scrambledText = Array.from({ length: finalText.length }, (_, i) => {
          if (i < progressIndex) return finalText[i]; 
          return characters.charAt(Math.floor(Math.random() * characters.length)); 
        }).join("");

        setText(scrambledText);
        progressIndex += 1;
      }, 30);
    }, delay);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4); 
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const truncateWords = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  // Sort newsData by date terbaru
  const sortedNewsData = newsData.sort((a, b) => new Date(b.date) - new Date(a.date));

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
      <div className="relative z-10 2xl:max-w-[1600px] xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[1200px] w-full flex flex-col lg:flex-row items-start lg:items-center lg:justify-center 2xl:gap-20 gap-10 px-6 2xl:mt-0 mt-20">
        {/* Text Section (Kiri) */}
        <div data-aos="fade-right" className="flex-1 text-white">
          <p className="text-4xl 2xl:text-[5em] xl:text-[4em] lg:text-[3em] md:text-[3em] font-bold leading-[1.2]">
            {animatedText1} <span> {animatedText2}</span>
          </p>
          <h1 className="text-4xl 2xl:text-[5em] xl:text-[4em] lg:text-[3em] md:text-[3em] font-bold leading-[1.2] 2xl:mt-4">
            {animatedText3}
            <span> {animatedText4}</span>
          </h1>
          <p className="2xl:mt-8 mt-4 text-lg md:text-[1.2em]">{animatedText5}</p>
        </div>

        {/* Slide Section (Kanan) */}
        <div data-aos="fade-left" className="relative w-full flex-1 overflow-hidden 2xl:h-[400px]">
          <div
            className="flex gap- transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {sortedNewsData.slice(0, 4).map((news) => (
              <Link
                key={news.id}
                href={`/post/${news.slug}`}
                className="min-w-full 2xl:h-[400px] h-[250px] rounded-lg overflow-hidden relative"
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
                  <h2 className="text-white 2xl:text-xl text-md font-bold">{news.title}</h2>
                  <p className="text-gray-300 text-sm mt-2 ">
                    {truncateWords(news.description, 10)}
                  </p>
                  <p className="text-gray-400 text-xs mt-2">{news.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
