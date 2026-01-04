import { useState, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import CustomerForm from "../components/CustomerForm";
import Receipt from "../components/Receipt";

const Home = () => {
  const [cart, setCart] = useState({});
  const [receipt, setReceipt] = useState(null);
  const cartRef = useRef();

  const addToCart = (product) => {
    setCart(prev => ({
      ...prev,
      [product.id]: {
        ...product,
        qty: (prev[product.id]?.qty || 0) + 1
      }
    }));
  };

  const totalItems = Object.values(cart).reduce((acc, i) => acc + i.qty, 0);

  const scrollToCart = () => {
    cartRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="p-4 max-w-6xl mx-auto bg-[#E8F5E9] min-h-screen relative">
      
     
      <button
        onClick={scrollToCart}
        className="fixed bottom-6 right-6 bg-[#27AE60] text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 hover:bg-[#219150] transition"
      >
        <FaShoppingCart size={24} />
        {totalItems > 0 && (
          <span className="ml-1 bg-white text-[#27AE60] font-bold text-sm w-5 h-5 flex items-center justify-center rounded-full">
            {totalItems}
          </span>
        )}
      </button>

      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-2">
          Kitchen Store
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          🌿 Explore our handpicked kitchen essentials – quality, style & freshness in every item!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>

    
      <div ref={cartRef} className="mt-10">
        <Cart cart={cart} setCart={setCart} />
      </div>
      <div className="mt-6">
        <CustomerForm cart={cart} setReceipt={setReceipt} />
      </div>
      {receipt && <Receipt data={receipt} />}
    </div>
  );
};

export default Home;
