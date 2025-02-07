import React from "react";
import Image from "next/image";
import { FaInstagram,  FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-main text-white py-4 2xl:mt-0">
      <div className="max-w-[1200px] mx-auto flex flex-col  justify-center items-start md:items-center px-6 gap-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-center md:mb-0 ">
          <Image
            src="/logo-new.png"
            alt="Company Logo"
            width={150}
            height={60}
            className="object-contain mt-3"
          />
        </div>

        {/* Navigation Menu */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-sm font-semibold text-gray-300 py-2">
          <a href="/" className="hover:text-mains transition">Beranda</a>
          <a href="/tentang-kami" className="hover:text-mains transition">tentang Kami</a>
          <a href="/layanan" className="hover:text-mains transition">Layanan</a>
          <a href="/survei-dan-publikasi" className="hover:text-mains transition">Riset & Publikasi</a>
          
          <a href="https://api.whatsapp.com/send?phone=6281380805118&text=Halo%20GSRI,%20saya%20ingin%20bertanya," target="_blank" className="hover:text-main transition">Kontak</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 my-6 md:mt-0">
          <a
            href="https://x.com/data1n171229"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white hover:bg-main transition"
          >
            <FaXTwitter className="text-gray-800" />
          </a>
          <a
            href="https://www.instagram.com/data1n/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white hover:bg-main transition"
          >
            <FaInstagram className="text-gray-800" />
          </a>
          <a
            href="https://www.tiktok.com/@data1n"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white hover:bg-main transition"
          >
            <FaTiktok className="text-gray-800" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white hover:bg-main transition"
          >
            <FaYoutube className="text-gray-800" />
          </a>
        </div>
      </div>
<div className="w-full h-[1px] bg-gray-600 my-5"></div>
      {/* Copyright Section */}
      <div className=" text-center text-xs italic text-gray-400">
        © {new Date().getFullYear()} GSRI | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
