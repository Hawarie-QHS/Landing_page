import React, { useState, useEffect } from "react";

const TentangKami = () => {
  const images = [
    "images/foto2.jpg",
    "images/foto3.jpg",
    "images/foto4.jpg",
    "images/foto5.jpg",
    "images/foto6.jpg",
    "images/foto7.jpg",
    "images/foto8.jpg",
    "images/foto17.jpeg", 
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
      id="about"
      className="py-20 px-6 bg-cyan-950 text-gray-800 overflow-hidden mt-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Carousel */}
        <div
          className="relative w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg bg-cyan-900 flex items-center justify-center"
          data-aos="fade-right"
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
                  alt={`Galeri ${index + 1}`}
                  className="max-w-full max-h-full object-scale-down transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Indicator */}
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

        {/* Deskripsi */}
        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-4 text-cyan-300 text-center justify-center">
            Tentang Kami
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-white">
            Pondok Pesantren <strong>Hawarie Qur’anic Home Schooling</strong>{" "}
            adalah lembaga pendidikan Islam yang berkomitmen membentuk generasi
            muda Islam yang berilmu, berakhlak, dan berkontribusi untuk ummat.
          </p>
          <p className="text-lg leading-relaxed text-white">
            Kami memadukan kurikulum agama dan umum secara seimbang, dengan
            fokus pada pengembangan karakter dan keterampilan hidup. Dengan
            tenaga pendidik yang berpengalaman dan fasilitas yang mendukung,
            kami berusaha menciptakan lingkungan belajar yang kondusif bagi para
            santri untuk tumbuh dan berkembang secara optimal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;
