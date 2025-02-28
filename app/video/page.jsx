"use client";

import React, { useState, useEffect } from "react";
import videoData from "@/data/videoData";
import Image from "next/image";

const VideoPage = () => {
  const [visibleVideos, setVisibleVideos] = useState(4); // Menampilkan 4 video pertama di mobile
  const [isMobile, setIsMobile] = useState(false); // Cek apakah perangkat mobile

  // Cek ukuran layar untuk menentukan apakah mobile atau bukan
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Jika ≤768px dianggap mobile
    };

    checkScreenSize(); // Cek saat pertama kali render
    window.addEventListener("resize", checkScreenSize); // Cek saat ukuran layar berubah

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup listener
  }, []);

  // Fungsi untuk menambah jumlah video yang terlihat di mobile
  const handleShowMore = () => {
    setVisibleVideos((prev) => prev + 4); // Tambah 4 video setiap kali diklik
  };

  return (
    <div className="2xl:max-w-[1650px] xl:max-w-[1200px] lg:max-w-[950px] mx-auto 2xl:py-40 py-20 2xl:px-8 px-4">
      {/* Judul dengan Gambar */}
      <div className="py-10 flex justify-start">
        <Image
          src="/Data1n.png" // Pastikan gambar ini ada di folder public
          alt="Judul Video"
          width={150} // Ukuran gambar
          height={150}
          className="object-contain"
        />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {videoData
          .slice(0, isMobile ? visibleVideos : videoData.length) // Jika mobile, gunakan limit, jika desktop tampilkan semua
          .map((video) => (
            <div key={video.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden p-4">
              {/* Embed YouTube */}
              <div className="relative w-full h-52">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
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

      {/* Tombol Show More (Hanya muncul jika di mobile dan masih ada video tersisa) */}
      {isMobile && visibleVideos < videoData.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="bg-mains text-white font-semibold px-6 py-2 rounded-lg hover:bg-opacity-80 transition"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPage;
