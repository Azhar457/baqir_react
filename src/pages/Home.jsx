import React from "react";
import Alfarizi from "../assets/Alfarizi.jpg";
import Baqir from "../assets/Baqir.jpg";
import Fauzan from "../assets/fauzan.jpg";
import Hidayat from "../assets/hidayat.jpg";
import Ibra from "../assets/Ibra.jpg";
import Rifaldy from "../assets/rifaldy.jpg";
import Rizkiman from "../assets/rizkiman.jpg";
import GroupMember from "../components/GroupMember";
export default function Home() {
  const members = [
    { image: Baqir, name: "Muhammad Rafa El-Baqir", nim: "23533730" },
    { image: Rifaldy, name: "Muhammad Rifaldy", nim: "23533730" },
    { image: Ibra, name: "Mohammed Ibra Rusel", nim: "23533730" },
    { image: Rizkiman, name: "Muhammad Rizkiman", nim: "23533730" },
    { image: Hidayat, name: "Muhammad Hidayat", nim: "23533730" },
    { image: Alfarizi, name: "Alfarizhi Siregar", nim: "23533730" },
    { image: Fauzan, name: "Fikri Fauzan", nim: "23533730" },
  ];
  return (
    <div>
      <div className="h-svh w-full bg-red-800 flex flex-col items-center justify-center text-white">
        {/* Judul */}
        <div className="text-center">
          <h1 className="one text-4xl md:text-5xl mt-[-50px] font-bold font-poppins text-red-800 tracking-wide drop-shadow-md">
            SEJARAH <br /> PERKEMBANGAN ISLAM
          </h1>
          <p className="mt-2 text-lg md:text-xl">
            dari zaman Rasulullah SAW - Sekarang
          </p>
        </div>
        <div className="h-[30px] w-full bg-white absolute bottom-0"></div>
        {/* Swipe Down Icon */}
        <a
          href="#section2"
          className="absolute bottom-10 flex flex-col items-center cursor-pointer"
        >
          <span className="text-sm">swipe up</span>
          <div className="animate-bounce duration-500 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </a>
      </div>

      <section id="section2" className="h-auto w-full bg-white">
        <div>
          <h1 className="two pt-2 text-3xl md:text-4xl text-white font-bold font-poppins tracking-wide drop-shadow-md text-center border-red-800 border-b-4 pb-4 place-self-center">
            SEJARAH <br />
            PERKEMBANGAN ISLAM
          </h1>
          <h3 className=" text-2xl md:text-3xl text-red-800 font-bold font-poppins tracking-wide drop-shadow-md text-center place-self-center">
            ANGGOTA KELOMPOK
          </h3>
        </div>
        <div className="w-4/5 flex flex-col items-center justify-center place-self-center">
          <div className="md:container md:mx-auto flex flex-row flex-wrap md:flex-wrap items-center justify-center gap-3">
            {members.map((member, index) => (
              <GroupMember
                key={index}
                image={member.image}
                name={member.name}
                nim={member.nim}
              />
            ))}
          </div>
          <a
            href="#section3"
            className="mb-2 px-4 py-2 bg-red-800 text-white font-bold rounded-full text-sm text-center font-poppins"
          >
            Sejarah Perkembangan Islam
          </a>
        </div>
      </section>
      <section id="section3">
        <div className="h-auto w-full bg-red-800 flex flex-col items-center justify-center text-white">
          <h1 className="three text-3xl md:text-4xl font-bold font-poppins text-red-800 tracking-wide drop-shadow-md text-center">
            SEJARAH <br />
            PERKEMBANGAN ISLAM
          </h1>
          <div className="w-4/5 flex flex-col items-center justify-center place-self-center">
            <p className="text-center text-white">
              Islam adalah agama yang
              <span className="text-yellow-400"> sempurna</span> dan
              <span className="text-yellow-400"> universal</span> yang diturunkan
              oleh Allah SWT kepada Nabi Muhammad SAW sebagai penutup para
              Nabi. Islam adalah agama yang mengatur seluruh aspek kehidupan
              manusia, mulai dari hubungan manusia dengan Allah SWT, hubungan
              manusia dengan sesama manusia, hingga hubungan manusia dengan
              alam sekitar.
            </p>
            <p className="text-center text-white">
              Islam memiliki sejarah yang panjang, dimulai dari zaman Rasulullah
              SAW hingga sekarang. Sejarah perkembangan Islam ini memiliki
              berbagai peristiwa penting yang terjadi di berbagai belahan dunia.
              Peristiwa-peristiwa tersebut membentuk Islam menjadi agama yang
              besar dan kuat seperti yang kita kenal sekarang.
            </p>
            <p className="text-center text-white">
              Dalam website ini, kami akan membahas sejarah perkembangan Islam
              dari zaman Rasulullah SAW hingga sekarang. Kami akan membahas
              berbagai peristiwa penting yang terjadi dalam sejarah Islam.
            </p>
          </div>
          <a
            href="#section2"
            className="mt-2 px-4 py-2 bg-white text-red-800 font-bold rounded-full text-lg font-poppins"
          >
            Kembali ke atas
          </a>
        </div>
      </section>
    </div>
  );
}
