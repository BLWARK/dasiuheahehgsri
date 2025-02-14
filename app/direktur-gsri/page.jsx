"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";
import Image from "next/image"

const page = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
          mirror: true,
        });
      }, []);
  return (
    <div className='flex flex-col justify-center items-center  bg-gray-800 2xl:py-40  2xl:pt-40 pt-40 pb-10  2xl:px-0 px-2 text-white' >
        <div className="2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[950px]">
        <div
          data-aos="fade-right"
          className="2xl:flex 2xl:flex-row flex-col justify-start  items-center w-full gap-4 px-4 "
        >
          <div className="h-[5px] w-[70px] bg-cyan-400 2xl:block hidden "></div>
          <h2 className="2xl:text-4xl text-3xl font-bold text-cyan-400  ">
            Direktur Eksekutif 
          </h2>
          <div className="h-[5px] w-[70px] bg-cyan-400 2xl:hidden block mt-5 "></div>
        </div>
        <div className="w-full  flex flex-col lg:flex-row items-center justify-center 2xl:mt-20 mt-10 2xl:gap-20 gap-4  ">
          {/* Left Section: Image with Blue Background */}
          <div className="lg:w-[40%] w-full flex justify-center items-center ">
            <div
              data-aos="fade-right"
              className="relative flex justify-end 2xl:w-[600px] 2xl:h-[500px] w-[370px] h-[400px]  z-10 "
            >
              <Image
                src="/Sabastianus.jpg" // Ganti dengan path gambar yang sesuai
                alt="Profile Image"
                fill
                className="object-cover 2xl:px-0 px-4"
              />
            </div>
          </div>

          {/* Right Section: Content */}
          <div
            data-aos="fade-left"
            className="lg:w-1/2 w-full p-6 text-left lg:text-left flex justify-start items-start flex-col  z-10 "
          >
            <h3 className="2xl:text-5xl text-2xl font-semibold text-mains mb-4">
              Sebastian Salang
            </h3>
            <p className="2xl:text-lg text-sm font-semibold italic w-full  text-mains mb-4">
            Wakil Sekjen Golkar (Periode 2019-2024)
            </p>
            <p className='font-semibold text-lg text-mains 2xl:mt-8 mt-4'>Profile Direktur</p>
            <p className="2xl:text-md text-sm w-full font-md text-white my-4">
              Sebastian Salang adalah seorang pakar politik dan komunikasi yang
              memiliki pengalaman luas di bidang penelitian politik, konsultasi,
              serta advokasi kebijakan publik. Ia merupakan pendiri dan pemimpin
              di berbagai lembaga riset dan konsultasi yang berfokus pada
              analisis sistem pemerintahan, parlemen, dan pemilu di Indonesia.{""}
            </p>
            <p className="2xl:text-md text-sm w-full font-md text-white mb-4">
                Sebastian menyelesaikan pendidikan magister di bidang Komunikasi
                Politik dari Universitas Trisakti. Sebelumnya, ia menempuh
                pendidikan sarjana di bidang Hukum di Sekolah Tinggi Hukum
                Indonesia dan Manajemen Keuangan & Perbankan di STIE Tri Dharma.
              </p>
              <p className="2xl:text-md text-sm w-full font-md text-white mb-4">
                Sebagai seorang analis politik, Sebastian aktif menjadi
                narasumber di berbagai media televisi, cetak, dan online. Ia
                juga sering menjadi pembicara dalam seminar dan diskusi yang
                membahas isu-isu politik, parlemen, dan demokrasi di Indonesia.
              </p>
              
          </div>
        </div>



        </div>
        <div data-aos="fade-right" className="2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[950px] 2xl:mt-20 mt-0  justify-start items-start w-full flex flex-col 2xl:px-0 px-5 text-white ">
        <div
          
          className=" w-full gap-4"
        >
         
          <h2 className="font-semibold text-lg text-mains mt-8">
            Pendidikan
          </h2>
        </div>

        <ul className='list-disc list-outside ml-4 mt-6 space-y-5 2xl:text-md text-sm'>
            <li>Magister (S2) Komunikasi Politik – Universitas Trisakti</li>
            <li>Sarjana (S1) Hukum – Sekolah Tinggi Hukum Indonesia</li>
            <li>Sarjana (S1) Manajemen Keuangan & Perbankan – STIE Tri Dharma</li>
        </ul>
      



        </div>
        <div data-aos="fade-right" className="2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[950px] mt-5  justify-start items-start w-full flex flex-col 2xl:px-0 px-5 ">
        <div
          
          className=" w-full gap-4"
        >
         
          <h2 className="font-semibold text-lg text-mains mt-8">
          Pengalaman Profesional
          </h2>
        </div>

        <ul className='list-disc list-outside ml-4 mt-6 space-y-5 2xl:text-md text-sm'>
            <li>Direktur Eksekutif, FORMAPPI (2017 – 2029)</li>
            <li>Direktur Eksekutif, Indopoint Consulting (2016 – 2020)</li>
            <li>Lawyer, Sebastian Law Firm (2016 – Sekarang)</li>
        </ul>
        </div>
        <div data-aos="fade-right" className="2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[950px] mt-5  justify-start items-start w-full flex flex-col 2xl:px-0 px-5 ">
        <div
          
          className=" w-full gap-4"
        >
         
          <h2 className="font-semibold text-lg text-mains mt-8">
          Pengalaman Riset
          </h2>
        </div>
        <ul className='list-disc list-outside ml-4 mt-6 space-y-5 2xl:text-md text-sm'>
            <li>Evaluasi Pelaksanaan Otonomi Daerah (2003 – 2007)</li>
            <li>Strategi Mobilisasi Dukungan bagi Calon Anggota DPD dan DPR pada Pemilu 2004 (CSIS, 2004)</li>
            <li>Studi Perbandingan Parlemen Indonesia Sebelum dan Setelah Amandemen UUD 1945 (FORMAPPI, 2004 – 2005)</li>
            <li>Pelaksanaan Pemilihan Kepala Daerah di 27 Kabupaten/Kota (Institute for Good Governance, 2005 – 2006)</li>
            <li>Kelembagaan Partai Politik yang Masuk DPR (Forum Politisi & FNS, 2006)</li>
            <li>World Governance Assessment in Indonesia (FORMAPPI & Overseas Development Studies, 2007)</li>
            <li>Rapor Kinerja Anggota DPR 2009 – 2014 (FORMAPPI, 2013 – 2014)</li>
            <li>Indonesian Political and Parliament Update (2015 – 2018)</li>

        </ul>
        </div>

        <div data-aos="fade-right" className="2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[950px] mt-5  justify-start items-start w-full flex flex-col 2xl:px-0 px-5 ">
        <div
          
          className=" w-full gap-4"
        >
         
          <h2 className="font-semibold text-lg text-mains mt-8">
          Buku yang diterbitkan
          </h2>
          <p className="2xl:text-md text-sm mt-4">Sebastian telah menulis beberapa buku tentang politik dan demokrasi, antara lain:</p>
        </div>
        <ul className='list-decimal list-outside ml-4  space-y-5 mb-5 2xl:text-md text-sm'> 
        <li className='mt-5'><span className='italic'>Gerakan Mahasiswa Mendorong Reformasi 1998 </span>(Sinar Mulya Press)</li>
        <li className=''><span className='italic'>Belajar Tentang Demokrasi  </span>(KWI)</li>
        <li className=''><span className='italic'>Dinamika Demokrasi </span>(CSIS)</li>
        <li className=''><span className='italic'>Lembaga Perwakilan Rakyat di Indonesia: Studi & Analisis Pra dan Pasca Perubahan UUD 1945 </span>(FORMAPPI)</li>
        <li className=''><span className='italic'>Potret Partai Politik di Indonesia</span>  (FNS)</li>
        <li className=''><span className='italic'>Rumah Aspirasi, Gagasan Membangun Pola Relasi DPD-Konstituen  </span>(Konsorsium)</li>
        <li className=''><span className='italic'>Kinerja DPR Hasil Pemilu 2004 </span>(Forum Sahabat)</li>
        <li className=''><span className='italic'>Menjadi Anggota DPR, DPD dan DPRD 2008  </span>(Forum Sahabat)</li>
        <li className=''><span className='italic'>Kiat Menjadi Anggota Parlemen 2010   </span>(Forum Sahabat)</li>

        </ul>
        <p className="2xl:text-md text-sm">Sebastian juga telah menulis banyak artikel di berbagai media nasional dan lokal seperti Kompas, Suara Pembaruan, Sinar Harapan, Seputar Indonesia, Media Indonesia, Tempo, Majalah Trust, dan Gatra.</p>
        </div>
        <a data-aos="fade-up" href="/tentang-kami" className="py-4 px-3 bg-mains text-white hover:bg-cyan-200 hover:text-black mt-20">Kembali ke halaman sebelumnya</a>
    </div>
  )
}

export default page