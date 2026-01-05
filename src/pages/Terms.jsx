import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] py-10 px-4">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-[#6D9773] mb-10">
          Terms & Conditions & Refund Policy
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Business Name: Vanguard Travel Solution<br />
          Country: United Kingdom<br />
          Email: vanguardtravel@outlook.com
        </p>

        <h2 className="text-2xl font-semibold text-[#6D9773] mb-2">Eligibility</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          You must be at least 18 years old or have guardian permission if under 18.
        </p>

        <h2 className="text-2xl font-semibold text-[#6D9773] mb-2">Products</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We sell kitchen utensils. Product descriptions and prices may change without notice.
        </p>

        <h2 className="text-2xl font-semibold text-[#6D9773] mb-2">Prices and Payments</h2>
        <p className="text-gray-700 leading-relaxed mb-2">
          All prices are in GBP (£). Payments are securely processed by Stripe. We do not store card details.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Stripe Privacy Policy:
          <a
            href="https://stripe.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline ml-1"
          >
            https://stripe.com/privacy
          </a>
        </p>

        <h2 className="text-2xl font-semibold text-[#6D9773] mb-2">Orders</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Placing an order is an offer to purchase. Orders are confirmed only after payment.
        </p>

        <h2 className="text-2xl font-semibold text-[#6D9773] mb-2">Shipping and Delivery</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Delivery times are estimates. Risk passes to you upon delivery.
        </p>

        <h2 className="text-2xl font-semibold text-[#6D9773] mb-2">Returns and Refunds</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Returns and refunds follow the UK Consumer Rights Act 2015.
        </p>

        <h2 className="text-2xl font-semibold text-[#6D9773] mb-2">Intellectual Property</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          All website content is owned by Vanguard Travel Solution.
        </p>

        <h2 className="text-2xl font-semibold text-[#6D9773] mb-2">User Conduct</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          No unlawful use, hacking, or malicious activity is allowed.
        </p>

        <h2 className="text-2xl font-semibold text-[#6D9773] mb-2">Limitation of Liability</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Liability is limited to the amount paid, except where UK law states otherwise.
        </p>

        <h2 className="text-2xl font-semibold text-[#6D9773] mb-2">Governing Law</h2>
        <p className="text-gray-700 leading-relaxed mb-12">
          These Terms are governed by the laws of England and Wales.
        </p>

        {/* Refund Policy Section */}
        <div className="border-t border-[#6D9773] pt-10 mt-10">
          <h2 className="text-4xl font-bold text-center text-[#6D9773] mb-6">
            Refund Policy
          </h2>

          <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
            We strive to ensure customer satisfaction. Please read our refund policy carefully before making a purchase.
          </p>

          <h3 className="text-xl font-semibold text-[#6D9773] mb-2">Refund Eligibility</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Refund requests must be submitted within 7 days of purchase with valid proof of purchase.
          </p>

          <h3 className="text-xl font-semibold text-[#6D9773] mb-2">Non-Refundable Purchases</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Digital products, delivered services, subscriptions after billing, and customized items are non-refundable.
          </p>

          <h3 className="text-xl font-semibold text-[#6D9773] mb-2">Refund Processing</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Approved refunds are issued to the original payment method within 5–10 business days.
          </p>

          <h3 className="text-xl font-semibold text-[#6D9773] mb-2">Chargebacks</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Customers are encouraged to contact us before initiating disputes.
          </p>

          <h3 className="text-xl font-semibold text-[#6D9773] mb-2">Contact</h3>
          <p className="text-gray-700 leading-relaxed">
            Email: vanguardtravel@outlook.com
          </p>
        </div>

      </div>
    </div>
  );
};

export default Terms;
