"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import videoData from "@/data/videoData"; // Import data video
import Link from "next/link";

const VideoPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div data-aos="fade-up" className="2xl:max-w-[1650px] xl:max-w-[1200px] lg:max-w-[950px] mx-auto 2xl:py-10 py-10 px-4 text-white text-center">
        <div className="flex w-full justify-between items-center">
      {/* Judul Gambar */}
      <div className="flex justify-start items-center font-bold gap-4 text-[2em]">
        <Image
          src="/Data1n.png"
          alt="Judul Video"
          width={150}
          height={100}
          className="object-contain"
        />
      </div>
      {/* Tombol */}
      <Link href="/video">
        <button className=" px-6 py-3 bg-mains text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition 2xl:text-md text-sm">
          View More
        </button>
      </Link>
      </div>
      {/* Grid Layout Video (Hanya 4 Video Pertama) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
        {videoData.slice(0, 4).map((video) => (
          <div key={video.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden p-4" data-aos="fade-up">
            {/* Embed YouTube */}
            <div className="relative w-full aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src={video.embedUrl}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Judul dan Deskripsi */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-white">{video.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
