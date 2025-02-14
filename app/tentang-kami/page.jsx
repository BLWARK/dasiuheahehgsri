"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";
import Image from "next/image";

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center  bg-gray-800 2xl:py-40  pt-40 pb-10  2xl:px-0 px-2">
      <div className="2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[950px]">
        <div
          data-aos="fade-right"
          className="flex justify-start  items-center w-full gap-4"
        >
          <div className="h-[5px] w-[70px] bg-cyan-400 "></div>
          <h2 className="2xl:text-4xl text-3xl font-bold text-cyan-400">
            Profil Direktur
          </h2>
        </div>
        <div className="w-full  flex flex-col lg:flex-row items-center justify-center 2xl:mt-20 mt-10 2xl:gap-20 gap-4  ">
          {/* Left Section: Image with Blue Background */}
          <div className="lg:w-[40%] w-full flex justify-center items-center ">
            <div
              data-aos="fade-right"
              className="relative flex justify-end 2xl:w-[600px] 2xl:h-[500px] w-[370px] h-[400px]  z-10"
            >
              <Image
                src="/Sabastianus.jpg" // Ganti dengan path gambar yang sesuai
                alt="Profile Image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Section: Content */}
          <div
            data-aos="fade-left"
            className="lg:w-1/2 w-full p-6 text-left lg:text-left flex justify-start items-start flex-col  z-10"
          >
            <h3 className="2xl:text-5xl text-2xl font-semibold text-mains mb-4">
              Sebastian Salang
            </h3>
            <p className="2xl:text-lg text-sm font-semibold italic w-full  text-mains mb-4">
            Wakil Sekjen Golkar (Periode 2019-2024)
            </p>
            <p className="2xl:text-md text-sm font-light w-full  text-white mb-4">
              Sebastian Salang adalah seorang pakar politik dan komunikasi yang
              memiliki pengalaman luas di bidang penelitian politik, konsultasi,
              serta advokasi kebijakan publik. Ia merupakan pendiri dan pemimpin
              di berbagai lembaga riset dan konsultasi yang berfokus pada
              analisis sistem pemerintahan, parlemen, dan pemilu di Indonesia.
              {""}
            </p>
            <p className="2xl:text-md text-sm w-full font-light text-white mb-4">
              Sebastian menyelesaikan pendidikan magister di bidang Komunikasi
              Politik dari Universitas Trisakti. Sebelumnya, ia menempuh
              pendidikan sarjana di bidang Hukum di Sekolah Tinggi Hukum
              Indonesia dan Manajemen Keuangan & Perbankan di STIE Tri Dharma.
            </p>
            <p className="2xl:text-md text-sm w-full font-light text-white mb-4">
              Sebagai seorang analis politik, Sebastian aktif menjadi narasumber
              di berbagai media televisi, cetak, dan online. Ia juga sering
              menjadi pembicara dalam seminar dan diskusi yang membahas isu-isu
              politik, parlemen, dan demokrasi di Indonesia.
            </p>
            <a
              href="/direktur-gsri"
              className="py-4 px-3 bg-mains text-white mt-4 hover:bg-cyan-200 hover:text-black"
            >
              Selanjutnya
            </a>
          </div>
        </div>
      </div>
      <div className=" 2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[950px] 2xl:mt-28 mt-10">
        <div
          data-aos="fade-up"
          className="flex justify-start  items-center w-full gap-4"
        >
          <div className="h-[5px] w-[70px] bg-mains "></div>
          <h2 className="2xl:text-4xl text-3xl font-bold text-mains">
            Latar Belakang
          </h2>
        </div>
        <div className="w-full  flex flex-col lg:flex-row items-center justify-center   ">
          {/* Right Section: Content */}
          <div
            data-aos="fade-up"
            className="w-full text-white p-6 text-left lg:text-left flex justify-start items-start flex-col  z-10"
          >
            <p className=" w-full  mb-4 flex flex-col 2xl:text-md text-sm font-light">
              Di era informasi yang berkembang pesat, pengambilan kebijakan yang
              akurat dan berbasis data menjadi kunci keberhasilan tata kelola
              pemerintahan. Global Strategi Riset Indonesia (GSRI) didirikan
              sebagai respons terhadap kebutuhan Indonesia akan sistem demokrasi
              yang lebih kuat, transparan, dan akuntabel, dengan pendekatan
              berbasis data yang valid, riset akademik, serta metode ilmiah yang
              ketat.
            </p>
            <p className="2xl:text-md text-sm font-light">
              {" "}
              Sebagai lembaga riset independen, GSRI memiliki misi untuk menjadi
              jembatan antara data berbasis fakta dan pembuatan kebijakan
              strategis, guna mendukung pemerintah, lembaga legislatif, sektor
              swasta, serta akademisi dalam menciptakan kebijakan yang lebih
              efektif dan berdampak nyata bagi masyarakat.
            </p>
            <p className="mt-4 2xl:text-md text-sm font-light">
              {" "}
              Indonesia sebagai negara demokrasi terus berkembang dan menghadapi
              berbagai tantangan dalam tata kelola pemerintahan, transparansi
              anggaran, serta efektivitas kebijakan publik. Oleh karena itu,
              GSRI hadir untuk menyediakan informasi berbasis riset akademik dan
              ilmiah, memastikan kebijakan yang diambil didukung oleh data yang
              akurat dan terverifikasi.
            </p>
          </div>
        </div>
      </div>
      <div className="2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[950px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 2xl:py-16 py-10">
        {/* Grid Kiri */}
        <div data-aos="fade-right">
          {/* Header Kotak */}
          <div className="bg-mains text-white py-6 text-center rounded-t-lg">
            <h2 className="font-bold text-2xl">Visi</h2>
          </div>

          {/* Konten */}
          <div className="bg-white p-6 2xl:h-[300px] xl:h-[400px] lg:h-[420px] h-[300px] rounded-b-lg shadow-lg">
            <h1 className="2xl:text-lg text-md font-bold text-gray-900 mb-4">
              Menuju Indonesia yang Demokratis, Transparan, dan Akuntable
            </h1>
            <p className="text-gray-700 2xl:text-md text-sm">
              Kami berkomitmen menciptakan Indonesia yang lebih baik melalui
              pendekatan yang berorientasi pada partisipasi publik,
              transparansi, dan kebijakan berbasis riset.
            </p>
          </div>
        </div>

        {/* Grid Kanan */}
        <div data-aos="fade-left">
          {/* Header Kotak */}
          <div className="bg-mains text-white py-6 text-center rounded-t-lg">
            <h2 className="font-bold text-2xl">Misi</h2>
          </div>

          {/* Konten */}
          <div className="bg-white p-6 2xl:h-[300px] xl:h-[400px] lg:h-[420px] h-[600px] rounded-b-lg shadow-lg">
            <ol className="list-decimal list-outside text-gray-700 space-y-4 ml-4">
              <li className="2xl:text-md text-sm  ">
                Mengembangkan riset dan evaluasi kebijakan serta program
                pemerintah.
              </li>
              <li className="2xl:text-md text-sm">
                Membangun sistem riset dan evaluasi berkualitas dan
                berintegritas.
              </li>
              <li className="2xl:text-md text-sm">
                Mendorong transparansi dan akuntabilitas dalam pengelolaan
                pemerintahan melalui penelitian berbasis data dan analisis
                independen.
              </li>
              <li className="2xl:text-md text-sm">
                Meningkatkan partisipasi masyarakat dalam proses pembuatan
                kebijakan dengan menyelenggarakan diskusi, seminar, dan
                publikasi ilmiah.
              </li>
              <li className="2xl:text-md text-sm">
                Menjadi jembatan antara riset dan kebijakan dengan menyediakan
                data berbasis akademik dan metodologi ilmiah yang dapat
                diandalkan untuk pengambilan keputusan strategis di berbagai
                sektor.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
