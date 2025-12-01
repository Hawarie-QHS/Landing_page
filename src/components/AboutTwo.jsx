import React, { useState, useEffect } from "react";

const AboutTwo = () => {
  const images = [
    "images/foto9.jpeg",
    "images/foto16.jpeg",
    "images/foto11.jpeg",
    "images/foto12.jpeg",
    "images/foto13.jpeg",
    "images/foto14.jpeg",
    "images/foto15.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="about-2"
      className="py-20 px-6 bg-cyan-950 text-gray-800 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT LEFT */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-4 text-cyan-300 text-center justify-center">
            Pembelajaran yang Terarah & Berkarakter
          </h2>

          <p className="text-lg leading-relaxed mb-4 text-white">
            Di Hawarie Qur’anic Home Schooling, setiap anak diperlakukan
            sebagai individu yang unik dengan potensi yang harus diasah dan
            diarahkan. Proses pembelajaran kami dirancang untuk membangun:
            <strong> kecerdasan spiritual, kecerdasan emosional, dan
            kecerdasan intelektual</strong> secara seimbang.
          </p>

          <p className="text-lg leading-relaxed text-white">
            Melalui metode pengajaran berbasis rumah dan bimbingan yang lebih
            personal, santri mendapatkan suasana belajar yang nyaman, fokus,
            serta penuh perhatian. Kami ingin memastikan setiap santri tumbuh
            menjadi pribadi yang mandiri, berakhlak, dan mampu membawa
            nilai-nilai Al-Qur’an dalam kehidupan sehari-hari.
          </p>
        </div>

        {/* SLIDER RIGHT */}
        <div
          className="relative w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg bg-cyan-900 flex items-center justify-center"
          data-aos="fade-left"
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${images.length * 100}%`,
            }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="w-full h-full flex-shrink-0 flex items-center justify-center"
                style={{ flex: "0 0 100%" }}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="max-w-full max-h-full object-scale-down transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* INDICATOR */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-cyan-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTwo;
