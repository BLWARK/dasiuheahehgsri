"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Cta = () => {
     useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
          mirror: true,
        });
      }, []);
  return (
    <div className="w-full py-16 px-6 text-center bg-gray-800 text-white flex flex-col items-center mt-10">
        <div data-aos="fade-right" className="">
      {/* Judul */}
      <h2 className="text-2xl lg:text-4xl font-bold">
        Butuh Data Lebih Lengkap?
      </h2>

      {/* Deskripsi */}
      <p className="mt-3 2xl:text-lg text-sm text-gray-300 max-w-xl">
        Hubungi kami untuk mendapatkan data yang lebih lengkap dan mendalam sesuai kebutuhan Anda.
      </p>

      {/* Tombol */}
      <Link 
      href="/"
      // href="https://api.whatsapp.com/send?phone=6281380805118&text=Halo%20GSRI,%20saya%20ingin%20bertanya," 
      target="_blank"
      rel="noopener noreferrer">
      
        <button className="mt-6 px-6 py-3 bg-mains text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition 2xl:text-md text-sm">
          Hubungi Kami
        </button>
      </Link>
      </div>
    </div>
  );
};

export default Cta;
