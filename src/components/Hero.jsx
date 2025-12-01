import React from "react";

const Hero = () => {
  return (
    <section
  id="home"
  className="relative min-h-screen w-full bg-cyan-950 text-white flex items-center justify-center overflow-hidden pt-24"
>
  {/* Background Image */}
  <img
    src="images/foto7.jpg"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover opacity-30"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/80 to-cyan-900/60" />

  {/* Content */}
  <div className="relative text-center px-6 max-w-2xl" data-aos="fade-up">
    <img
      src="images/iconHawarie.png"
      alt="icon"
      className="rounded-full w-24 h-24 md:w-32 md:h-32 mx-auto mb-6"
      data-aos="zoom-in"
      data-aos-delay="200"
    />

    <h1
      className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      Selamat Datang di{" "}
      <span className="text-cyan-400">
        Hawarie Qur’anic Home Schooling
      </span>
    </h1>

    <p
      className="text-lg md:text-xl text-cyan-100 mb-10"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      Menanamkan nilai-nilai Al-Qur’an sejak dini dengan pendekatan modern
      dan pembelajaran berbasis rumah.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="#about"
        className="bg-cyan-500 hover:bg-cyan-800 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-cyan-700/40"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        Pelajari Lebih Lanjut
      </a>

      <a
        href="https://wa.me/621318890109?text=Halo%20bunda%20Farida,%20saya%20tertarik%20dengan%20pondok%20pesantren%20Hawarie!"
        className="bg-cyan-800 hover:bg-cyan-500 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-cyan-700/40"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        Konsultasi Lebih Lanjut
      </a>
    </div>
  </div>
</section>
  );
};

export default Hero;
