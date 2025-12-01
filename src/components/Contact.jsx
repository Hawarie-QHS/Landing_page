import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-cyan-950 text-white py-20 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl font-bold text-cyan-300 mb-6"
          data-aos="fade-up"
        >
          Hubungi Kami
        </h2>

        {/* CONTACT BOX */}
        <div
          className="bg-cyan-900/40 border border-cyan-800 shadow-xl rounded-2xl p-8 max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-cyan-200 mb-2">Nama Lengkap</label>
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                className="w-full bg-cyan-950/50 border border-cyan-800 rounded-lg px-4 py-3 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-cyan-200 mb-2">Email</label>
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="w-full bg-cyan-950/50 border border-cyan-800 rounded-lg px-4 py-3 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-cyan-200 mb-2">Pesan</label>
              <textarea
                rows="4"
                placeholder="Tuliskan pesan Anda..."
                className="w-full bg-cyan-950/50 border border-cyan-800 rounded-lg px-4 py-3 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-cyan-950 font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
