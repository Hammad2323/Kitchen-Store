import emailjs from "emailjs-com";
import { useState } from "react";

const CustomerForm = ({ cart, setReceipt }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(cart).length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setLoading(true);
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const contact = formData.get("contact");

    const items = Object.values(cart)
      .map(i => `${i.title} x ${i.qty} = £${i.price * i.qty}`)
      .join("\n");

    const total = Object.values(cart).reduce((s, i) => s + i.price * i.qty, 0);

    const templateParams = { name, contact, items, total };

    emailjs.send(
      "service_vj0c7eo", 
      "template_783uz3r", 
      templateParams, 
      "_D--vHi3PuyyjzodL"
    )
    .then((res) => {
      setLoading(false);
      setSuccess("Order placed successfully!");
      setReceipt({ name, contact, cart, total });
      e.target.reset();
    })
    .catch((err) => {
      setLoading(false);
      setSuccess("Failed to send email. Check your EmailJS setup.");
      console.error(err);
    });
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-[#F5F5F5] mt-8 p-6 rounded-2xl shadow max-w-md mx-auto border border-[#6D9773]"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-[#6D9773] tracking-wide leading-tight">
        Customer Details
      </h2>

      <input
        name="name"
        required
        placeholder="Your Name"
        className="w-full border border-gray-300 p-3 mb-3 rounded focus:ring-2 focus:ring-[#6D9773] outline-none text-gray-800 font-medium placeholder-gray-400 tracking-wide"
      />
      <input
        name="contact"
        required
        placeholder="Contact Number"
        className="w-full border border-gray-300 p-3 mb-3 rounded focus:ring-2 focus:ring-[#6D9773] outline-none text-gray-800 font-medium placeholder-gray-400 tracking-wide"
      />

      <button
        type="submit"
        className={`w-full py-3 rounded text-white font-semibold transition-colors ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#D35400] hover:bg-[#b84200]"
        }`}
        disabled={loading}
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>

      {success && (
        <p className="mt-3 text-center text-sm text-green-700 font-medium tracking-wide">
          {success}
        </p>
      )}
    </form>
  );
};

export default CustomerForm;
