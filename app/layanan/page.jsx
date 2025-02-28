"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";
import Image from "next/image";






const Layanan = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const layananList = [
    {
      title: "Program Riset",
      items: [
        "Riset Kebijakan Publik",
        "Riset Anggaran & Program Pemerintah",
        "Survei Opini Publik",
        "Riset tentang Adaptasi dan Inovasi Teknologi dalam Pengelolaan Pemerintahan",
      ],
    },
    {
      title: "Program Pengembangan Kelembagaan",
      items: [
        "Evaluasi Kinerja Kementrian dan Lembaga",
        "Pengembangan Kerjasama Riset dengan Pemerintah",
        "Pelatihan Peningkatan Kapasitas DPRD",
      ],
    },
    {
      title: "Program Evaluasi",
      items: [
        "Evaluasi Kinerja Kementrian dan Lembaga",
        "Evaluasi Tingkat Transparansi dan Akuntabilitas Pengelolaan Pemerintahan",
      ],
    },
    {
      title: "Program Media dan Publikasi",
      items: [
        "Penerbitan Publikasi Berkala",
        "Pengembangan Channel YouTube untuk Diskusi/Dialog",
        "Menyelenggarakan Diskusi dan Seminar",
      ],
    },
  ];

  return (
   

      <div className="w-full min-h-screen bg-gray-900 text-white mb-20">
      {/* Section Header */}
      <div className="relative w-full 2xl:h-[500px] h-[300px]">
        <Image
          src="/layanan.jpg"
          alt="Layanan GSRI"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <h1
            data-aos="zoom-in"
            className="2xl:text-5xl text-xl font-bold text-center 2xl:mt-0 mt-20"
          >
            Layanan dan Program GSRI
          </h1>
        </div>
      </div>

      {/* Section Deskripsi */}
      <div
        data-aos="fade-up"
        className="2xl:max-w-[1600px] xl:max-w-[1200px] lg:max-w-[950px] mx-auto 2xl:py-16 py-10 px-6"
      >
        <h2 className="2xl:text-2xl text-xl font-bold mb-4 text-mains">
          Layanan dan Program GSRI
        </h2>
        <p className="2xl:text-lg text-sm font-light text-gray-300">
          GSRI menyediakan berbagai layanan dan program riset dan evaluasi
          kebijakan yang dirancang untuk mendukung pemerintah, lembaga riset,
          dan organisasi swasta. Setiap layanan kami bertujuan untuk
          menghasilkan solusi strategis berbasis data dan riset.
        </p>
      </div>

      {/* Section Kotak Layanan */}
      <div className="2xl:max-w-[1600px] xl:max-w-[1200px] lg:max-w-[950px] mx-auto grid grid-cols-1 gap-8 2xl:px-6 px-4">
        {layananList.map((layanan, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} // Bergantian antara fade-right dan fade-left
            className="bg-gray-800 rounded-lg 2xl:p-8 p-6"
          >
            <h3 className="2xl:text-2xl text-xl font-bold mb-2 text-mains">
              {layanan.title}
            </h3>
            <ul className="list-disc list-outside ml-6">
              {layanan.items.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-300 2xl:text-lg text-sm font-light"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Section Deskripsi */}
      <div
        data-aos="fade-up"
        className="2xl:max-w-[1600px] xl:max-w-[1200px] lg:max-w-[950px] mx-auto py-16 px-6"
      >
        <Image
          src="/Data1n.png"
          alt="Layanan GSRI"
          width={220}
          height={120}
          className="object-contain"
        />

        <h2 className="2xl:text-2xl text-xl font-bold mb-4 text-mains mt-10">
          Data1n – Produk Digital GSRI
        </h2>
        <p className="2xl:text-lg text-sm font-light text-gray-300">
          Dalam era digital saat ini, penyebaran informasi berbasis riset
          menjadi semakin penting untuk meningkatkan literasi kebijakan publik.
          Untuk itu, GSRI mengembangkan Data1n, produk digital yang berfungsi
          sebagai platform distribusi konten berbasis data, riset, dan analisis
          kebijakan.
        </p>
        <h2 className="2xl:text-2xl text-xl font-bold mb-4 text-mains mt-10">
          Data1n akan menjadi pusat produksi dan distribusi konten GSRI melalui
          berbagai platform digital, termasuk:
        </h2>
        <ul className="2xl:text-lg text-sm font-light text-gray-300 list-disc list-outside">
          <li className="ml-5">
            <a
              href="https://www.instagram.com/data1n/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-semibold"
            >
              Instagram
            </a>{" "}
            – Infografis & update riset kebijakan
          </li>
          <li className="ml-5">
            <a
              href="https://x.com/Data1n"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-semibold"
            >
             X - Twitter
            </a>{" "}
            – Diskusi & analisis cepat berbasis data
          </li>
          <li className="ml-5">
            <a
              href="https://www.tiktok.com/@data1n"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-semibold"
            >
              Tiktok
            </a>{" "}
            – Video edukasi dan insight kebijakan publik
          </li>
          <li className="ml-5">
            <a
              href="https://www.youtube.com/@Data1n"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-semibold"
            >
              Youtube
            </a>{" "}
            – Webinar, diskusi, dan riset mendalam
          </li>
        </ul>
        <h2 className="2xl:text-2xl text-xl font-bold mb-4 text-mains mt-10">
          Podcast GSRI x Data1n
        </h2>
        <p className="2xl:text-lg text-sm font-light text-gray-300">
          Selain produksi konten digital, Data1n juga akan memproduksi podcast
          GSRI yang membahas berbagai isu strategis seperti parlemen, demokrasi,
          kebijakan ekonomi, serta transparansi pemerintahan dengan narasumber
          kredibel dan berbasis riset akademik.
        </p>
        <p className="2xl:text-lg text-sm font-light text-gray-300">
          Dengan Data1n, GSRI memastikan bahwa setiap informasi yang disampaikan
          adalah hasil kerja akademik, berbasis data yang valid, dan dapat
          dipertanggungjawabkan secara ilmiah.
        </p>
      </div>
    </div>
    
  );
};

export default Layanan;
