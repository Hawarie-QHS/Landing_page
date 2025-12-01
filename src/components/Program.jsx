import React from "react";

const programs = [
  {
    title: "Tahfidz Al-Qur’an",
    desc: "Membimbing siswa untuk menghafal Al-Qur’an dengan metode talaqqi dan murojaah yang efektif.",
    icon: "📖",
    aos: "fade-up",
  },
  {
    title: "Akhlak & Adab Islami",
    desc: "Menanamkan nilai-nilai akhlak mulia dan pembiasaan adab sesuai sunnah Rasulullah ﷺ.",
    icon: "🌙",
    aos: "fade-up",
    delay: 200,
  },
  {
    title: "Ilmu Pengetahuan Modern",
    desc: "Menggabungkan kurikulum agama dan umum agar siswa siap menghadapi dunia modern.",
    icon: "🧠",
    aos: "fade-up",
    delay: 400,
  },
];

const Program = () => {
  return (
    <section id="program" className="bg-cyan-950 text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold text-cyan-300 mb-4"
          data-aos="zoom-in"
        >
          Program Unggulan
        </h2>
        <p
          className="text-cyan-100 text-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Setiap program dirancang untuk menyeimbangkan nilai spiritual dan ilmu pengetahuan modern.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {programs.map((prog, i) => (
          <div
            key={i}
            className="bg-cyan-900/50 border border-cyan-800 rounded-2xl p-8 shadow-lg hover:bg-cyan-900 transition duration-300"
            data-aos={prog.aos}
            data-aos-delay={prog.delay || 0}
          >
            <div className="text-5xl mb-4">{prog.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-cyan-200">
              {prog.title}
            </h3>
            <p className="text-cyan-100 leading-relaxed">{prog.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Program;
