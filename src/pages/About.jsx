import React from "react";
import Navbar from "../components/Navbar";
import peta from "../assets/peta.png";

export default function Home() {
  return (
    <div className="h-auto">
      <Navbar />
      <div className="h-screen relative">
        <div className="h-screen flex flex-col items-center bg-blue-50 relative justify-center">
          <h1 className="text-4xl font-bold text-red-800">Pembahasan</h1>
        </div>
      </div>

      {/* Container untuk gambar dengan posisi relatif */}
      <div className="peta flex justify-center items-center relative pt-5 pb-5">
        <div className="relative w-[90vw] sm:w-[70vw] md:w-[70vw]">
          {/* Gambar Peta */}
          <img src={peta} alt="Peta" className="w-full h-auto" />

          {/* Grid untuk menempatkan titik interaktif */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
            <a
              href="#1"
              className="w-full h-full text-white flex items-center justify-center"
            >
              1
            </a>
            <a
              href="#3"
              className="w-full h-full text-white flex items-center justify-center "
            >
              3
            </a>
            <a
              href="#4"
              className="w-full h-full text-white flex items-center justify-center "
            >
              4
            </a>
            <a
              href="#2"
              className="w-full h-full text-white flex items-center justify-center "
            >
              2
            </a>
            <a
              href="#5"
              className="w-full h-full text-white flex items-center justify-center "
            >
              5
            </a>
            <a
              href="#6"
              className="w-full h-full text-white flex items-center justify-center "
            >
              6
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
