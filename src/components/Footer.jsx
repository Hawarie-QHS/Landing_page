import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cyan-950 text-center text-cyan-400 py-12 px-6 border-t border-cyan-800">
      <div className="max-w-4xl mx-auto">

        {/* ICONS */}
        <div
          className="flex justify-center gap-6 mb-6"
          data-aos="zoom-in"
        >
          <a
            href="https://wa.me/621318890109?text=Halo%20bunda%20Farida,%20saya%20tertarik%20dengan%20pondok%20pesantren%20Hawarie!"
            className="p-3 bg-cyan-900 rounded-full text-cyan-300 text-2xl hover:bg-cyan-700 hover:text-white transition shadow-md"
            target="_blank"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.instagram.com/santri_hawarie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="p-3 bg-cyan-900 rounded-full text-cyan-300 text-2xl hover:bg-cyan-700 hover:text-white transition shadow-md"
            target="_blank"
          >
            <FaInstagram />
          </a>

          <a
            href="https://youtube.com/@hawarietv?si=HM07mi2E8znXmVZv"
            className="p-3 bg-cyan-900 rounded-full text-cyan-300 text-2xl hover:bg-cyan-700 hover:text-white transition shadow-md"
            target="_blank"
          >
            <FaYoutube />
          </a>
        </div>

        {/* TEXT */}
        <p className="text-cyan-300 mb-2">
          © {new Date().getFullYear()} Hawarie Qur’anic Home Schooling
        </p>
        <p className="text-cyan-600 text-sm">
          Semua Hak Dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
