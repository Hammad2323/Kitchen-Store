import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#1E3932] mt-10 border-t border-[#144232] shadow-inner">
    <div className="max-w-6xl mx-auto px-6 py-8 text-center text-white space-y-3">
      

      <p className="text-1xl font-extrabold tracking-wide">Vanguard Kitchen Store</p>
      
      <p className="text-sm text-gray-300">23 Beckway Road, London, Mitcham, England, SW16 4HB</p>
      
      <p className="text-sm">
        Developer | <span className="text-[#27AE60] font-semibold">Hammad Azeem</span>
      </p>
      
      <div className="flex justify-center gap-6 mt-4 text-2xl">
        <a href="https://wa.me/your-number" target="_blank" className="transform transition hover:scale-125 text-green-400 hover:text-green-500">
          <FaWhatsapp />
        </a>
        <a href="mailto:youremail@example.com" className="transform transition hover:scale-125 text-blue-400 hover:text-blue-500">
          <FaEnvelope />
        </a>
      </div>

      <p className="text-xs text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} Vanguard Kitchen Store. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
