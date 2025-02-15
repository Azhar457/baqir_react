import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Alfarizi from "../assets/Alfarizi.jpg";
import Baqir from "../assets/Baqir.jpg";
import Fauzan from "../assets/fauzan.jpg";
import Hidayat from "../assets/hidayat.jpg";
import Ibra from "../assets/Ibra.jpg";
import Rifaldy from "../assets/rifaldy.jpg";
import Rizkiman from "../assets/rizkiman.jpg";
export default function Home() {
  const contact = [
    {
      image: Baqir,
      name: "Muhammad Rafa El-Baqir",
      nim: "2386208083",
      ig: "https://www.instagram.com/rafael.baqir/",
    },
    {
      image: Rifaldy,
      name: "Muhammad Rifaldy",
      nim: "2386208063",
      ig: "https://www.instagram.com/rifaldiway_/",
    },
    {
      image: Ibra,
      name: "Mohammed Ibra Rusel",
      nim: "2386208058",
      ig: "https://www.instagram.com/mhmmd_ibra.r/",
    },
    {
      image: Rizkiman,
      name: "Muhammad Rizkiman",
      nim: "2386208085",
      ig: "https://www.instagram.com/rizqi_mehmed/",
    },
    {
      image: Hidayat,
      name: "Muhammad Hidayat",
      nim: "2386208059",
      ig: "https://www.instagram.com/",
    },
    {
      image: Alfarizi,
      name: "Alfarizhi Siregar",
      nim: "2386208069",
      ig: "https://www.instagram.com/alfarizhisrg02/",
    },
    {
      image: Fauzan,
      name: "Fikri Fauzan",
      nim: "2386208079",
      ig: "https://www.instagram.com/fikrifauzan16_/",
    },
  ];
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-dark-50">
        <h1 className="text-4xl font-bold text-white">Kontak Kami</h1>
        <div className="pt-6 mb-6 h-auto w-svh flex flex-wrap items-center justify-center gap-4">
          {contact.map((person, index) => (
            <Card
              key={index}
              image={person.image}
              name={person.name}
              nim={person.nim}
              ig={person.ig}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
