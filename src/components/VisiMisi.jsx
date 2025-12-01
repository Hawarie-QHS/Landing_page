import React from "react";

const VisiMisi = () => {
  return (
    <section
      id="visimisi"
      className="bg-cyan-950 text-white py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2
          className="text-3xl md:text-4xl font-bold text-cyan-300"
          data-aos="fade-up"
        >
          Visi & Misi
        </h2>
        <p
          className="text-cyan-100 mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Menjadi lembaga pendidikan yang membentuk generasi Qur’ani, berilmu,
          berakhlak, dan mandiri.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* VISI */}
        <div
          className="bg-cyan-900/40 border border-cyan-800 rounded-2xl p-8 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-800/40 hover:border-cyan-400/60"
          data-aos="fade-right"
        >
          <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Visi</h3>
          <p className="text-cyan-100 leading-relaxed">
            Mewujudkan peserta didik yang berkarakter Qur’ani, unggul dalam
            ilmu pengetahuan dan teknologi, serta mampu menjadi teladan di
            masyarakat berdasarkan nilai-nilai Islam.
          </p>
        </div>

        {/* MISI */}
        <div
          className="bg-cyan-900/40 border border-cyan-800 rounded-2xl p-8 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-800/40 hover:border-cyan-400/60"
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Misi</h3>
          <ul className="text-cyan-100 space-y-3 list-disc list-inside leading-relaxed">
            <li>
              Menanamkan nilai-nilai Al-Qur’an dalam kehidupan sehari-hari
              peserta didik.
            </li>
            <li>
              Menyelenggarakan pembelajaran yang integratif antara ilmu agama
              dan ilmu umum.
            </li>
            <li>
              Menciptakan lingkungan belajar yang menyenangkan, aman, dan
              berkarakter Islami.
            </li>
            <li>
              Mendorong siswa untuk memiliki semangat kemandirian dan
              kepedulian sosial.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
