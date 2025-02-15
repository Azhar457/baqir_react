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
      <div className="h-auto" id="1">
        <section class="bg-gray-100">
          <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div class="max-w-lg">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Perkembangan Islam Zaman Rasulullah ﷺ
                </h2>
                <p class="mt-4 text-gray-600 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  quis eros at lacus feugiat hendrerit sed ut tortor.
                  Suspendisse et magna quis elit efficitur consequat. Mauris
                  eleifend velit a pretium iaculis. Donec sagittis velit et
                  magna euismod, vel aliquet nulla malesuada. Nunc pharetra
                  massa lectus, a fermentum arcu volutpat vel.
                </p>
                <div class="mt-8">
                  <a
                    href="#"
                    class="text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Lihat Di Youtube
                    <span class="ml-2">&#8594;</span>
                  </a>
                </div>
              </div>
              <div class="mt-12 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                  alt="About Us Image"
                  class="object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="h-auto" id="2">
        <section class="bg-gray-100">
          <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div class="mt-12 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                  alt="About Us Image"
                  class="object-cover rounded-lg shadow-md"
                />
              </div>
              <div class="max-w-lg">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Perkembangan Islam Zaman Khulafa'ur Rasyidin
                </h2>
                <p class="mt-4 text-gray-600 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  quis eros at lacus feugiat hendrerit sed ut tortor.
                  Suspendisse et magna quis elit efficitur consequat. Mauris
                  eleifend velit a pretium iaculis. Donec sagittis velit et
                  magna euismod, vel aliquet nulla malesuada. Nunc pharetra
                  massa lectus, a fermentum arcu volutpat vel.
                </p>
                <div class="mt-8">
                  <a
                    href="#"
                    class="text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Lihat Di Youtube
                    <span class="ml-2">&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="h-auto" id="3">
        <section class="bg-gray-100">
          <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div class="max-w-lg">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Perkembangan Islam Zaman Rasulullah ﷺ
                </h2>
                <p class="mt-4 text-gray-600 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  quis eros at lacus feugiat hendrerit sed ut tortor.
                  Suspendisse et magna quis elit efficitur consequat. Mauris
                  eleifend velit a pretium iaculis. Donec sagittis velit et
                  magna euismod, vel aliquet nulla malesuada. Nunc pharetra
                  massa lectus, a fermentum arcu volutpat vel.
                </p>
                <div class="mt-8">
                  <a
                    href="#"
                    class="text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Lihat Di Youtube
                    <span class="ml-2">&#8594;</span>
                  </a>
                </div>
              </div>
              <div class="mt-12 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                  alt="About Us Image"
                  class="object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="h-auto" id="4">
        <section class="bg-gray-100">
          <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div class="mt-12 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                  alt="About Us Image"
                  class="object-cover rounded-lg shadow-md"
                />
              </div>
              <div class="max-w-lg">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Perkembangan Islam Zaman Khulafa'ur Rasyidin
                </h2>
                <p class="mt-4 text-gray-600 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  quis eros at lacus feugiat hendrerit sed ut tortor.
                  Suspendisse et magna quis elit efficitur consequat. Mauris
                  eleifend velit a pretium iaculis. Donec sagittis velit et
                  magna euismod, vel aliquet nulla malesuada. Nunc pharetra
                  massa lectus, a fermentum arcu volutpat vel.
                </p>
                <div class="mt-8">
                  <a
                    href="#"
                    class="text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Lihat Di Youtube
                    <span class="ml-2">&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="h-auto" id="5">
        <section class="bg-gray-100">
          <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div class="max-w-lg">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Perkembangan Islam Zaman Rasulullah ﷺ
                </h2>
                <p class="mt-4 text-gray-600 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  quis eros at lacus feugiat hendrerit sed ut tortor.
                  Suspendisse et magna quis elit efficitur consequat. Mauris
                  eleifend velit a pretium iaculis. Donec sagittis velit et
                  magna euismod, vel aliquet nulla malesuada. Nunc pharetra
                  massa lectus, a fermentum arcu volutpat vel.
                </p>
                <div class="mt-8">
                  <a
                    href="#"
                    class="text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Lihat Di Youtube
                    <span class="ml-2">&#8594;</span>
                  </a>
                </div>
              </div>
              <div class="mt-12 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                  alt="About Us Image"
                  class="object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="h-auto" id="6">
        <section class="bg-gray-100">
          <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div class="mt-12 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                  alt="About Us Image"
                  class="object-cover rounded-lg shadow-md"
                />
              </div>
              <div class="max-w-lg">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Perkembangan Islam Zaman Khulafa'ur Rasyidin
                </h2>
                <p class="mt-4 text-gray-600 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  quis eros at lacus feugiat hendrerit sed ut tortor.
                  Suspendisse et magna quis elit efficitur consequat. Mauris
                  eleifend velit a pretium iaculis. Donec sagittis velit et
                  magna euismod, vel aliquet nulla malesuada. Nunc pharetra
                  massa lectus, a fermentum arcu volutpat vel.
                </p>
                <div class="mt-8">
                  <a
                    href="#"
                    class="text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Lihat Di Youtube
                    <span class="ml-2">&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
