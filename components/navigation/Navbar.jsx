"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Listener untuk scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-main shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-white py-6 px-6 md:px-40 flex justify-between items-center w-full">
        {/* Logo Section */}
        <div className="2xl:w-28 w-20">
          <Link href="/" passHref>
            <Image
              src="/logo-new.png"
              alt="GSRI Logo"
              width={128}
              height={64}
              className="cursor-pointer object-contain"
              priority={true}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-14 text-md text-semibold">
          <Link href="/">
            <span className="cursor-pointer hover:text-cyan-400 transition">
              Beranda
            </span>
          </Link>
          <Link href="/tentang-kami">
            <span className="cursor-pointer hover:text-cyan-400 transition">
              Tentang Kami
            </span>
          </Link>
          <Link href="/layanan">
            <span className="cursor-pointer hover:text-cyan-400 transition">
              Layanan
            </span>
          </Link>
          <Link href="/survei-dan-publikasi">
            <span className="cursor-pointer hover:text-cyan-400 transition">
              Survey & Publikasi
            </span>
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=6281380805118&text=Halo%20GSRI,%20saya%20ingin%20bertanya,"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="cursor-pointer hover:text-cyan-400 transition">
              Kontak
            </span>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-full bg-gray-900 text-white h-screen transform ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <div className="2xl:w-32 w-20">
            <Link href="/" passHref>
              <Image
                src="/logo-new.png"
                alt="GSRI Logo"
                width={128}
                height={64}
                className="cursor-pointer object-contain"
                priority={true}
              />
            </Link>
          </div>
          <button onClick={toggleMobileMenu} aria-label="Close Menu">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-12 mt-20 text-lg font-bold">
          <Link href="/">
            <span
              className="cursor-pointer hover:text-cyan-400 transition "
              onClick={toggleMobileMenu}
            >
              Beranda
            </span>
          </Link>
          <Link href="/tentang-kami">
            <span
              className="cursor-pointer hover:text-cyan-400 transition"
              onClick={toggleMobileMenu}
            >
              Tentang Kami
            </span>
          </Link>
          <Link href="/layanan">
            <span
              className="cursor-pointer hover:text-cyan-400 transition"
              onClick={toggleMobileMenu}
            >
              Layanan
            </span>
          </Link>
          <Link href="/survei-dan-publikasi">
            <span
              className="cursor-pointer hover:text-cyan-400 transition"
              onClick={toggleMobileMenu}
            >
              Survey & Publikasi
            </span>
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=6281380805118&text=Halo%20GSRI,%20saya%20ingin%20bertanya,"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="cursor-pointer hover:text-cyan-400 transition">
              Kontak
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
