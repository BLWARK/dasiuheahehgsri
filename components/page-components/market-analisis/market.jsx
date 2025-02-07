"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import plugin datalabels


ChartJS.register(ArcElement, Tooltip, ChartDataLabels); // Daftarkan plugin

const Market = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
          mirror: true,
        });
      }, []);
  const data = {
    labels: [
      "Pemerintah (35%)",
      "Lembaga Riset (25%)",
      "Perusahaan Swasta (20%)",
      "Civitas Akademik (20%)",
    ],
    datasets: [
      {
        data: [35, 25, 20, 20],
        backgroundColor: ["#4F99C7", "#77C0F2", "#97E0FA", "#BBF0FF"],
        hoverBackgroundColor: ["#3E80A6", "#5AA8E5", "#7CD2F5", "#A0E5FF"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-[1400px] mx-auto 2xl:py-32 py-20 px-8 text-white">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-20">Market Analysis</h1>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Pie Chart di sebelah kiri */}
        <div className="flex justify-center w-full lg:w-[50%]">
          <div data-aos="fade-right" className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
            <Pie
              data={data}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                  datalabels: {
                    color: "#fff", // Warna teks
                    font: {
                      weight: "bold",
                      size: 16,
                    },
                    formatter: (value) => `${value}%`, // Format persentase
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Keterangan Kanan */}
        <div data-aos="fade-left" className="space-y-10 w-full lg:w-[40%]">
          {data.labels.map((label, index) => (
            <div key={index} className="flex items-start gap-4">
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
              ></div>
              <div>
                <h3 className="font-bold text-xl">{label}</h3>
                <p className="text-sm">
                  {index === 0 &&
                    "Target utama GSRI adalah pemerintah pusat, pemerintah daerah, kementerian, dan lembaga legislatif yang membutuhkan riset kebijakan, evaluasi program, dan rekomendasi berbasis data untuk pengambilan keputusan strategis. GSRI berperan dalam memastikan kebijakan yang lebih efektif dan efisien."}
                  {index === 1 &&
                    "Lembaga riset di dalam dan luar negeri menjadi mitra strategis untuk kolaborasi penelitian dan pengembangan proyek bersama. GSRI dapat menyediakan data lokal yang mendukung riset global, serta mengakses dana penelitian dari lembaga internasional."}
                  {index === 2 &&
                    "Perusahaan swasta yang membutuhkan data kebijakan publik untuk mendukung ekspansi bisnis atau memahami dampak regulasi. GSRI menyediakan riset pasar, analisis regulasi, dan studi dampak kebijakan yang relevan dengan kebutuhan korporasi."}
                  {index === 3 &&
                    "Perguruan tinggi dan institusi akademik membutuhkan data penelitian untuk keperluan akademik dan pengembangan ilmu pengetahuan. GSRI dapat menjadi mitra utama dalam memberikan data penelitian primer dan analisis kebijakan untuk mendukung kajian akademik."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Market;
