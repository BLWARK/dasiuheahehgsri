"use client";

import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center  bg-gray-800 2xl:py-40  pt-40 pb-10  2xl:px-0 px-2">
      <div className="max-w-[1400px]">
        <div className="flex justify-start  items-center w-full gap-4">
          <div className="h-[5px] w-[70px] bg-cyan-400 "></div>
          <h2 className="2xl:text-4xl text-3xl font-bold text-cyan-400">Profil Direktur</h2>
        </div>
        <div className="w-full  flex flex-col lg:flex-row items-center justify-center 2xl:mt-20 mt-10 2xl:gap-20 gap-4  ">
          {/* Left Section: Image with Blue Background */}
          <div className="lg:w-[40%] w-full flex justify-center items-center ">
            <div className="relative flex justify-end 2xl:w-[600px] 2xl:h-[500px] w-[370px] h-[400px]  z-10">
              <Image
                src="/visi.jpg" // Ganti dengan path gambar yang sesuai
                alt="Profile Image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Section: Content */}
          <div className="lg:w-1/2 w-full p-6 text-left lg:text-left flex justify-start items-start flex-col  z-10">
            <h3 className="2xl:text-4xl text-2xl font-semibold text-white mb-4">
              Sabastianus K M Salang
            </h3>
            <p className="2xl:text-md text-sm w-full font-light text-white mb-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] 2xl:mt-28 mt-10">
        <div className="flex justify-start  items-center w-full gap-4">
          <div className="h-[5px] w-[70px] bg-mains "></div>
          <h2 className="2xl:text-4xl text-3xl font-bold text-mains">Latar Belakang GSRI</h2>
        </div>
        <div className="w-full  flex flex-col lg:flex-row items-center justify-center   ">
         

          {/* Right Section: Content */}
          <div className="w-full text-white p-6 text-left lg:text-left flex justify-start items-start flex-col  z-10">
            <p className=" w-full  mb-4 flex flex-col">
              Indonesia sebagai sebuah negara demokrasi, terus berproses dan
              berkembang, menyesuaikan diri dengan tantangan dan kebutuhan
              Masyarakat Indonesia. Demokrasi menuntut partisipasi masyarakat,
              pengelolaan pemerintahan yang baik, transparan serta akuntabel.

            
            </p>
            <p> Global Strategi Riset Indonesia (GSRI) merupakan bentuk
              partisipasi Masyarakat delam mengembangkan riset kebijakan dan
              pengelolaan pemerintahan sebagai upaya mendorong penguatan
              demokrasi Indonesia.</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 2xl:py-16 py-10">
      {/* Grid Kiri */}
      <div>
        {/* Header Kotak */}
        <div className="bg-mains text-white py-6 text-center rounded-t-lg">
          <h2 className="font-bold text-2xl">Visi</h2>
        </div>

        {/* Konten */}
        <div className="bg-white p-6 h-[300px] rounded-b-lg shadow-lg">
          <h1 className="2xl:text-2xl text-xl font-bold text-gray-900 mb-4">
            Menuju Indonesia yang Demokratis, Transparan, dan Akuntabel
          </h1>
          <p className="text-gray-700">
            Kami berkomitmen menciptakan Indonesia yang lebih baik melalui
            pendekatan yang berorientasi pada partisipasi publik, transparansi,
            dan kebijakan berbasis riset.
          </p>
        </div>
      </div>

      {/* Grid Kanan */}
      <div>
        {/* Header Kotak */}
        <div className="bg-mains text-white py-6 text-center rounded-t-lg">
          <h2 className="font-bold text-2xl">Misi</h2>
        </div>

        {/* Konten */}
        <div className="bg-white p-6 h-[300px] rounded-b-lg shadow-lg">
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li className="2xl:text-lg text-md">
              Mengembangkan riset dan evaluasi kebijakan serta program
              pemerintah.
            </li>
            <li className="2xl:text-lg text-md">
              Membangun sistem riset dan evaluasi berkualitas dan berintegritas.
            </li>
            <li className="2xl:text-lg text-md">
              Berkontribusi pada perbaikan kebijakan, kinerja, serta program
              pemerintah.
            </li>
          </ol>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page;
