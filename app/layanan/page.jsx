import React from "react";
import Image from "next/image";

const Layanan = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white mb-20">
      {/* Section Header */}
      <div className="relative w-full 2xl:h-[500px] h-[300px]">
        <Image
          src="/layanan.jpg" // Ganti dengan gambar Anda
          alt="Layanan GSRI"
          fill
          className="object-cover"
        />
        {/* Overlay dengan Judul */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <h1 className="2xl:text-5xl text-2xl font-bold text-center 2xl:mt-0 mt-20">Layanan dan Program GSRI</h1>
        </div>
      </div>

      {/* Section Deskripsi */}
      <div className="max-w-[1200px] mx-auto py-16 px-6">
        <h2 className="2xl:text-3xl text-2xl font-bold mb-4 text-mains">Layanan dan Program  GSRI</h2>
        <p className="2xl:text-lg text-md text-gray-300">
          GSRI menyediakan berbagai layanan dan program riset dan evaluasi kebijakan yang dirancang untuk mendukung pemerintah, lembaga riset, dan organisasi swasta. Setiap layanan kami bertujuan untuk menghasilkan solusi strategis berbasis data dan riset.
        </p>
      </div>

      {/* Section Kotak Layanan */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-8  2xl:px-6 px-4">
        {/* Kotak 1 */}
        <div className="bg-gray-800 rounded-lg 2xl:p-8 p-6 ">
          <h3 className="text-2xl font-bold mb-2 text-mains">Program Riset</h3>
          <ul className="list-disc list-outside ml-6">
          <li className="text-gray-300">
          Riset Kebijakan Publik
          </li>
          <li className="text-gray-300">
          Riset Anggaran & Program Pemerintah
          </li>
          <li className="text-gray-300">
          Survei Opini Publik
          </li>
          <li className="text-gray-300">
          Riset tentang Adaptasi dan Inovasi teknologi dalam Pengelolaan Pemerintahan</li>      
          </ul>
        </div>

        {/* Kotak 2 */}
        <div className="bg-gray-800 rounded-lg 2xl:p-8 p-6">
          <h3 className="text-2xl font-bold mb-2 text-mains capitalize">Program Pengembangan Kelembagaan</h3>
          <ul className="list-disc list-outside ml-6">
          <li className="text-gray-300">
          Evaluasi Kinerja Kementrian Dan Lembaga
          </li>
          <li className="text-gray-300">
          Pengembangan Kerjsama Riset dengan Pemerintah
          </li>
          <li className="text-gray-300">
          Pelatihan Peningkatan Kapasitas DPRD</li>  
          </ul>
        </div>

        {/* Kotak 3 */}
        <div className="bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-2 text-mains">Program Evaluasi</h3>
          <ul className="list-disc list-inside">
          <li className="text-gray-300">
          Evaluasi Kinerja Kementrian Dan Lembaga
          </li>
          <li className="text-gray-300">
          Evaluasi Tingkat Transparansi dan Akuntabilitas Pengelolaan Pemerintahan </li> 
          </ul>
        </div>

        {/* Kotak 4 */}
        <div className="bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-2 text-mains">Program Media Dan Publikasi</h3>
          <ul className="list-disc list-inside">
          <li className="text-gray-300">
          Penerbitan Publikasi Berkala
          </li>
          <li className="text-gray-300">
          Pengembangan Channel Youtube Untuk Diskusi/Dialog </li> 
          <li className="text-gray-300">
          Menyelenggarakan, Diskusi dan Seminar </li> 
          
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Layanan;
