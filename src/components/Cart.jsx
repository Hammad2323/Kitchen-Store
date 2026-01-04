import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const Cart = ({ cart, setCart }) => {
  const updateQty = (id, delta) => {
    setCart(prev => {
      const item = prev[id];
      if (!item) return prev;
      const qty = item.qty + delta;
      if (qty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: { ...item, qty } };
    });
  };

  const deleteItem = (id) => {
    setCart(prev => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  };

  const total = Object.values(cart).reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="bg-white mt-6 p-6 rounded-2xl shadow-lg max-w-md mx-auto">
      <h2 className="font-bold text-2xl mb-4 text-[#333333]">Your Cart</h2>
      {Object.values(cart).length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        Object.values(cart).map(item => (
          <div
            key={item.id}
            className="flex justify-between items-center py-3 border-b border-gray-200"
          >
            <div>
              <p className="font-semibold text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-600">£{item.price} x {item.qty}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQty(item.id, 1)}
                className="text-[#6D9773] hover:text-[#556e5b] transition"
              >
                <FaPlus />
              </button>
              <button
                onClick={() => updateQty(item.id, -1)}
                className="text-[#D35400] hover:text-[#b84300] transition"
              >
                <FaMinus />
              </button>
              <button
                onClick={() => deleteItem(item.id)}
                className="text-red-600 hover:text-red-800 transition"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))
      )}
      <p className="font-bold mt-4 text-gray-800 text-lg">Total: £{total}</p>
    </div>
  );
};

export default Cart;
