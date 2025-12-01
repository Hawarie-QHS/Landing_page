import React from "react";

const jenjangs = [
  {
    title: "Ula (Dasar)",
    desc: "Pembelajaran dasar Al-Qur’an, akhlak, dan ilmu pengetahuan umum untuk membentuk fondasi karakter Qur’ani sejak dini.",
    icon: "🌱",
    aos: "fade-up",
  },
  {
    title: "Wustho (Menengah)",
    desc: "Mengembangkan kemampuan hafalan, pemahaman agama, dan pengetahuan sains serta teknologi secara seimbang.",
    icon: "🌿",
    aos: "fade-up",
    delay: 200,
  },
  {
    title: "Ulya (Lanjutan)",
    desc: "Mempersiapkan siswa menjadi pribadi mandiri, berilmu luas, dan siap berkontribusi di masyarakat sesuai nilai-nilai Islam.",
    icon: "🌳",
    aos: "fade-up",
    delay: 400,
  },
];

const Jenjang = () => {
  return (
    <section id="jenjang" className="bg-cyan-950 text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold text-cyan-300 mb-4"
          data-aos="zoom-in"
        >
          Jenjang Pendidikan
        </h2>
        <p
          className="text-cyan-100 text-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Hawarie Qur’anic Home Schooling menyediakan jenjang pendidikan terstruktur sesuai tahap perkembangan anak.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {jenjangs.map((level, i) => (
          <div
            key={i}
            className="bg-cyan-900/40 border border-cyan-800 rounded-2xl p-8 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-800/40 hover:border-cyan-400/60"
            data-aos={level.aos}
            data-aos-delay={level.delay || 0}
          >
            <div className="text-5xl mb-4">{level.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-cyan-200">
              {level.title}
            </h3>
            <p className="text-cyan-100 leading-relaxed">{level.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Jenjang;
