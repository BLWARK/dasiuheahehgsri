"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <div className="flex justify-center items-center w-full">
      {/* Wrapper Container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        {/* Bagian Kanan - Gambar Besar */}
        <div
          data-aos="flip-up"
          className="relative w-full h-[400px] lg:h-[800px] group"
        >
          <Image
            src="/latar-belakang.jpg"
            alt="Latar Belakang"
            fill
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-main bg-opacity-70"></div>

          {/* Judul dan Konten */}
          <div className="absolute bottom-0 left-5 text-white transition-all duration-500 group-hover:translate-y-[-40px] translate-y-[40px]">
            <h2 className="text-4xl font-bold">Latar Belakang</h2>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 2xl:text-[0.9em] text-xs mt-2 flex flex-col">
              Di era informasi yang berkembang pesat, pengambilan kebijakan yang
              akurat dan berbasis data menjadi kunci keberhasilan tata kelola
              pemerintahan. Global Strategi Riset Indonesia (GSRI) didirikan
              sebagai respons terhadap kebutuhan Indonesia akan sistem demokrasi
              yang lebih kuat, transparan, dan akuntabel, dengan pendekatan
              berbasis data yang valid, riset akademik, serta metode ilmiah yang
              ketat
              <a href="/tentang-kami" className="w-[140px] h-[50px] bg-mains flex justify-center items-center font-semibold mt-5 ">Selanjutnya</a>
            </p>
            
          </div>
        </div>

        {/* Bagian Kiri - Grid 2 kolom */}
        <div className="grid grid-rows-2">
          {/* Gambar Visi */}
          <div
            data-aos="flip-left"
            className="relative w-full h-[200px] lg:h-[400px] group"
          >
            <Image src="/visi.jpg" alt="Visi" fill className="object-cover" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-main bg-opacity-85"></div>

            {/* Wrapper untuk animasi judul dan konten */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center transition-all duration-500 group-hover:translate-y-[-20px]">
              <h2 className="2xl:text-4xl text-2xl  font-bold transition-all duration-500 group-hover:translate-y-[-10px]">
                Visi
              </h2>
              <p className=" absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 2xl:text-[0.9em] text-xs mt-2 w-[80%]  translate-y-10">
                GSRI berkomitmen mewujudkan Indonesia yang demokratis melalui
                partisipasi aktif masyarakat, transparansi kebijakan, dan
                akuntabilitas pemerintah.
              </p>
            </div>
          </div>

          {/* Gambar Misi */}
          <div
            data-aos="flip-right"
            className="relative w-full h-[200px] lg:h-[400px] group"
          >
            <Image src="/misi.jpg" alt="Misi" fill className="object-cover" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-main bg-opacity-50"></div>

            {/* Wrapper untuk animasi judul dan konten */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center transition-all duration-500 group-hover:translate-y-[-20px]">
              <h2 className="2xl:text-4xl text-2xl  font-bold transition-all duration-500 group-hover:translate-y-[-10px]">
                Misi
              </h2>
              <ul className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 2xl:text-[0.9em] text-xs list-disc list-inside mt-2 space-y-2  translate-y-12">
                <li>Melakukan riset dan evaluasi kebijakan pemerintah.</li>
                <li>
                  Membangun sistem riset yang berkualitas dan berintegritas.
                </li>
                <li>
                  Berkontribusi pada perbaikan kebijakan dan kinerja pemerintah.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
