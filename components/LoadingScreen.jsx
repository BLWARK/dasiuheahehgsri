"use client";

import React, { useState, useEffect } from "react";
import animationData from "../Animation - 1738732584649.json";
import dynamic from "next/dynamic";

// Dynamically import LottiePlayer with SSR disabled
const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 30000); // 3 detik untuk simulasi waktu muat
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black z-50 flex justify-center items-center transition-transform transform loading-screen">
          <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: 200, height: 200 }}
          />
        </div>
      )}
    </>
  );
};

export default LoadingScreen;
