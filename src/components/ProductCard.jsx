import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:scale-105">
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-lg">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.desc}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-[#6D9773]">£{product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-[#D35400] text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-[#b84300] transition"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
