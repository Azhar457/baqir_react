import React from "react";
import Navbar from "../components/Navbar";
import peta from "../assets/peta.png";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
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
              <div
                class="max-w-lg"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-3xl">
                  Perkembangan Islam Zaman Rasulullah ﷺ
                </h2>
                <p class="mt-4 text-gray-600 text-sm text-justify">
                  Perkembangan Islam pada masa Rasulullah SAW berlangsung
                  melalui berbagai peristiwa penting yang membentuk fondasi umat
                  Islam. Dimulai dengan turunnya wahyu pertama pada 610 M di Gua
                  Hira. Karena tekanan kaum Quraisy, Nabi dan para sahabat
                  hijrah ke Madinah pada 622 M, peristiwa yang menandai awal
                  kalender Hijriah. Di Madinah, beliau membangun masyarakat
                  Islam dengan Piagam Madinah dan menghadapi berbagai
                  peperangan, termasuk Perang Badar (624 M), Uhud (625 M), dan
                  Khandaq (627 M). Kemenangan besar terjadi pada 630 M dengan
                  Fathu Makkah, di mana Islam semakin berkembang. Sebelum wafat
                  pada 632 M, Rasulullah SAW menyampaikan khutbah Haji Wada’
                  yang menegaskan nilai persatuan dan keadilan dalam Islam.
                </p>
                <div class="mt-8">
                  <a
                    href="https://youtu.be/moiFBDSjvHQ"
                    class="text-blue-500 hover:text-blue-600 font-medium"
                    target="_blank"
                  >
                    Lihat Di Youtube
                    <span class="ml-2">&#8594;</span>
                  </a>
                </div>
              </div>
              <div class="mt-12 md:mt-0">
                <iframe
                  className="object-cover rounded-lg shadow-md h-[25em] w-full"
                  width="670"
                  height="377"
                  src="https://www.youtube.com/embed/moiFBDSjvHQ"
                  title="Kisah Singkat Perjalanan Hidup Nabi Muhammad SAW Hingga Wafat"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
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
                <iframe
                  className="object-cover rounded-lg shadow-md h-[25em] w-full"
                  width="670"
                  height="377"
                  src="https://www.youtube.com/embed/GAS0W9OFsPA"
                  title="SEJARAH KEBUDAYAAN ISLAM PADA MASA KHULAFĀ AR-RASYIDĪN"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="max-w-lg" data-aos="fade-left">
                <h2 class="text-3xl font-extrabold text-left text-gray-900 sm:text-3xl">
                  Zaman Khulafa'ur Rasyidin
                </h2>
                <p class="mt-4 text-gray-600 text-sm text-justify">
                  Setelah wafatnya Rasulullah SAW pada 632 M, kepemimpinan Islam
                  dilanjutkan oleh Khulafaur Rasyidin, yang terdiri dari empat
                  khalifah utama. Abu Bakar As-Siddiq (632-634 M) memimpin
                  dengan tegas menghadapi kaum murtad dan nabi palsu, serta
                  mengawali ekspansi Islam ke luar Jazirah Arab. Umar bin
                  Khattab (634-644 M) memperluas wilayah Islam hingga Persia,
                  Syam, dan Mesir, serta menetapkan kalender Hijriah. Utsman bin
                  Affan (644-656 M) berjasa dalam kodifikasi resmi Al-Qur’an,
                  meskipun masa kepemimpinannya diwarnai gejolak politik. Ali
                  bin Abi Thalib (656-661 M) menghadapi konflik internal yang
                  memuncak dalam Perang Jamal dan Perang Shiffin. Kepemimpinan
                  Khulafaur Rasyidin menjadi tonggak utama dalam perkembangan
                  Islam, membentuk dasar pemerintahan yang berlandaskan ajaran
                  Rasulullah SAW.
                </p>
                <div class="mt-8">
                  <a
                    href="https://www.youtube.com/embed/GAS0W9OFsPA"
                    class="text-blue-500 hover:text-blue-600 font-medium"
                    target="_blank"
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
              <div
                class="max-w-lg"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-3xl">
                  Zaman Khilafah Umayyah
                </h2>
                <p class="mt-4 text-gray-600 text-sm text-justify">
                  Khilafah Umayyah berdiri setelah wafatnya Ali bin Abi Thalib
                  pada 661 M, dengan Muawiyah bin Abu Sufyan (661-680 M) sebagai
                  khalifah pertama. Dinasti ini berpusat di Damaskus dan
                  memperluas wilayah Islam hingga Spanyol di barat dan India di
                  timur. Pada masa Abdul Malik bin Marwan (685-705 M),
                  administrasi Islam diperkuat dengan penggunaan bahasa Arab
                  sebagai bahasa resmi pemerintahan. Al-Walid bin Abdul Malik
                  (705-715 M) melanjutkan ekspansi besar ke Asia Tengah dan
                  Afrika Utara serta membangun Masjid Umayyah di Damaskus.
                  Meskipun mencapai kejayaan, Dinasti Umayyah melemah akibat
                  ketidakpuasan internal, hingga akhirnya tumbang pada 750 M
                  oleh revolusi Abbasiyah, yang menggantikan mereka sebagai
                  penguasa dunia Islam.
                </p>
                <div class="mt-8">
                  <a
                    href="https://www.youtube.com/embed/1Kb1vfmnWuw"
                    class="text-blue-500 hover:text-blue-600 font-medium"
                    target="_blank"
                  >
                    Lihat Di Youtube
                    <span class="ml-2">&#8594;</span>
                  </a>
                </div>
              </div>
              <div class="mt-12 md:mt-0">
                <iframe
                  className="object-cover rounded-lg shadow-md h-[25em] w-full"
                  width="670"
                  height="377"
                  src="https://www.youtube.com/embed/1Kb1vfmnWuw"
                  title="SEJARAH KEBUDAYAAN ISLAM PADA MASA BANI UMMAYAH"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
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
                <iframe
                  className="object-cover rounded-lg shadow-md h-[25em] w-full"
                  width="670"
                  height="377"
                  src="https://www.youtube.com/embed/exO4ltsJqBw"
                  title="SEJARAH KEBUDAYAAN ISLAM PADA MASA BANI ÁƁƁAŚÍYAH"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="max-w-lg" data-aos="fade-left">
                <h2 class="text-3xl font-extrabold text-left text-gray-900 sm:text-3xl">
                  Zaman Khilafah Abbasiyah
                </h2>
                <p class="mt-4 text-gray-600 text-sm text-justify">
                  Khilafah Abbasiyah berdiri pada 750 M setelah menggulingkan
                  Dinasti Umayyah, dengan Abu al-Abbas as-Saffah (750-754 M)
                  sebagai khalifah pertama. Pusat pemerintahan dipindahkan ke
                  Baghdad oleh Al-Mansur (754-775 M), menjadikannya pusat ilmu
                  pengetahuan dan kebudayaan Islam. Masa keemasan terjadi pada
                  era Harun al-Rasyid (786-809 M) dan Al-Ma'mun (813-833 M),
                  dengan berkembangnya ilmu pengetahuan di Baitul Hikmah.
                  Wilayah Abbasiyah luas, namun mulai melemah akibat
                  pemberontakan internal dan tekanan eksternal, terutama dari
                  Tentara Salib dan bangsa Mongol. Kejayaan Abbasiyah berakhir
                  ketika Baghdad dihancurkan oleh Hulagu Khan pada 1258 M,
                  menandai runtuhnya kekhalifahan ini sebagai kekuatan politik
                  utama Islam.
                </p>
                <div class="mt-8">
                  <a
                    href="https://www.youtube.com/embed/exO4ltsJqBw"
                    class="text-blue-500 hover:text-blue-600 font-medium"
                    target="_blank"
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
              <div
                class="max-w-lg"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-3xl">
                  Zaman Khilafah Utsmaniyyah
                </h2>
                <p class="mt-4 text-gray-600 text-sm text-justify">
                  Khilafah Utsmaniyyah berdiri pada 1299 M dengan Osman I
                  (1299-1326 M) sebagai pendiri. Puncak kejayaan terjadi pada
                  masa Mehmed II (1451-1481 M) yang berhasil menaklukkan
                  Konstantinopel pada 1453 M, menjadikannya Istanbul sebagai ibu
                  kota kekhalifahan. Islam berkembang pesat di Eropa, Asia, dan
                  Afrika, dengan ekspansi mencapai puncaknya di bawah Suleiman
                  al-Qanuni (1520-1566 M), yang dikenal sebagai "Suleiman the
                  Magnificent". Kekhalifahan ini menguasai sebagian besar
                  wilayah Timur Tengah, Balkan, dan Afrika Utara. Namun, pada
                  abad ke-18 dan 19, Utsmaniyyah mulai mengalami kemunduran
                  akibat tekanan Eropa dan konflik internal. Akhirnya, setelah
                  Perang Dunia I, kekhalifahan ini resmi dibubarkan pada 1924 M
                  oleh Mustafa Kemal Atatürk, menandai berakhirnya sistem
                  kekhalifahan dalam sejarah Islam.
                </p>
                <div class="mt-8">
                  <a
                    href="https://www.youtube.com/embed/1812V8yEn_w"
                    class="text-blue-500 hover:text-blue-600 font-medium"
                    target="_blank"
                  >
                    Lihat Di Youtube
                    <span class="ml-2">&#8594;</span>
                  </a>
                </div>
              </div>
              <div class="mt-12 md:mt-0">
                <iframe
                  className="object-cover rounded-lg shadow-md h-[25em] w-full"
                  width="670"
                  height="377"
                  src="https://www.youtube.com/embed/1812V8yEn_w"
                  title="SEJARAH KEBUDAYAAN ISLAM PADA MASA BANI UTŚMANI"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
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
                <iframe 
                className="object-cover rounded-lg shadow-md h-[25em] w-full"
                width="670"
                height="377" 
                src="https://www.youtube.com/embed/-JkkloZEazA" 
                title="KH.SAID AQIL SIRADJ | PERJALANAN POLITIK TIMUR TENGAH | DARI MULAI RzUNTUHNYA KHILAFAH ISLAM TURKI |" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
                </iframe>
              </div>
              <div class="max-w-lg" data-aos="fade-left">
                <h2 class="text-3xl font-extrabold text-left text-gray-900 sm:text-3xl">
                  Pasca Runtuhnya Turki Utsmani
                </h2>
                <p class="mt-4 text-gray-600 text-sm text-justify">
                  Islam terus berkembang di era modern, menghadapi berbagai
                  tantangan dan peluang baru. Perkembangan teknologi dan
                  globalisasi memungkinkan umat Islam untuk terhubung dengan
                  lebih luas, namun juga menimbulkan konflik dan ketidakpastian.
                  Pendidikan dan dakwah menjadi kunci dalam memperkuat identitas
                  dan nilai-nilai Islam di tengah arus modernisasi. Umat Islam
                  di seluruh dunia berjuang untuk mempertahankan keberagaman
                  budaya dan agama, sambil beradaptasi dengan perubahan zaman.
                  Masa depan Islam tergantung pada kemampuan umatnya untuk
                  memahami dan menerapkan ajaran Islam dalam konteks
                  kontemporer, menjadikan Islam sebagai rahmat bagi seluruh alam
                  semesta.
                </p>
                <div class="mt-8">
                  <a
                    href="https://www.youtube.com/watch?v=-JkkloZEazA"
                    class="text-blue-500 hover:text-blue-600 font-medium"
                    target="_blank"
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
