import React from "react";
import Navbar from "../components/Navbar";
import peta from "../assets/peta.png";
import Slider from "../components/Slider";
import Footer from "../components/footer";
import Timeline from "../components/Timeline";
import "./About.css";

export default function Home() {
  return (
    <div className="h-auto">
      <Navbar />
      <div className="h-screen relative">
        <div className="h-screen flex flex-col items-center bg-blue-50 relative justify-center">
          <iframe
            className="h-full w-full pointer-events-none"
            width="789"
            height="325"
            src="https://www.youtube.com/embed/RAIGM8pFLdg?autoplay=1&mute=1&loop=1&playlist=RAIGM8pFLdg"
            title="[Best Trailer] Muhammad Al Fatih Penakluk Konstantinopel"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Slider />
      {/* Container untuk gambar dengan posisi relatif */}
      <div className="peta flex justify-center items-center relative pt-5 pb-5">
        <div className="relative w-[90vw] sm:w-[70vw] md:w-[70vw]">
          {/* Gambar Peta */}
          <img src={peta} alt="Peta" className="w-full h-auto" />

          {/* Grid untuk menempatkan titik interaktif */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
            <a
              href="#1"
              className="w-full h-full text-white flex items-center justify-center text-center "
            >
              Zaman Rasulullah
            </a>
            <a
              href="#3"
              className="w-full h-full text-white flex items-center justify-center text-center "
            >
              Zaman Khilafah Umayyah
            </a>
            <a
              href="#4"
              className="w-full h-full text-white flex items-center justify-center text-center "
            >
              Zaman Khilafah Abbasiyah
            </a>
            <a
              href="#2"
              className="w-full h-full text-white flex items-center justify-center text-center "
            >
              Zaman Khulafaur Rasyidin
            </a>
            <a
              href="#5"
              className="w-full h-full text-white flex items-center justify-center text-center "
            >
              Zaman Khilafah Turki Ustmani
            </a>
            <a
              href="#6"
              className="w-full h-full text-white flex items-center justify-center text-center "
            >
              Zaman Sekarang
            </a>
          </div>
        </div>
      </div>
      <div className="h-auto">
        <Timeline />
      </div>
      <div className="h-screen" id="1"></div>
      <div className="h-screen" id="2"></div>
      <div className="h-screen" id="3"></div>
      <div className="h-screen" id="4"></div>
      <div className="h-screen" id="5"></div>
      <div className="h-screen" id="6"></div>
      <Footer />
    </div>
  );
}
