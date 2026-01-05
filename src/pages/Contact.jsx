import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4 py-10">
      <div className="max-w-xl w-full text-center">

        <h1 className="text-4xl font-bold text-[#6D9773] mb-4">
          Contact Us
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          🌿 We’re always here to help you with your kitchen needs.  
          Reach out anytime — quality service begins with a simple message.
        </p>

        <div className="flex justify-center gap-10 mb-8">
          <a
            href="mailto:vanguardtravel@outlook.com"
            className="flex flex-col items-center group"
          >
            <div className="bg-white p-5 rounded-full shadow-lg group-hover:scale-110 transition">
              <FaEnvelope className="text-3xl text-[#D35400]" />
            </div>
            <span className="mt-2 text-sm text-gray-600">
              Email Us
            </span>
          </a>

          <a
            href="https://wa.me/447848146969"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="bg-white p-5 rounded-full shadow-lg group-hover:scale-110 transition">
              <FaWhatsapp className="text-3xl text-[#27AE60]" />
            </div>
            <span className="mt-2 text-sm text-gray-600">
              WhatsApp
            </span>
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-xl font-semibold text-[#1E3932] mb-2">
            ⏰ Service Availability
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our customer support is available <strong>24/7</strong> to assist you.  
            Whether it’s an order, enquiry, or support — we’re just one click away.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
