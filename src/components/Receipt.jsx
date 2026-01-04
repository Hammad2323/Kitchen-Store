import html2canvas from "html2canvas";

const Receipt = ({ data }) => {
  const handleDownload = () => {
    const receiptElement = document.getElementById("receipt");

    // Temporarily hide the button
    const downloadBtn = document.getElementById("downloadBtn");
    downloadBtn.style.display = "none";

    html2canvas(receiptElement).then((canvas) => {
      const link = document.createElement("a");
      link.download = `receipt_${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();

      // Show the button back
      downloadBtn.style.display = "block";
    });
  };

  return (
    <div
      id="receipt"
      className="bg-[#F5F5F5] p-6 rounded-2xl shadow max-w-md mx-auto mt-6 border border-[#6D9773]"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-[#6D9773] tracking-wide leading-tight">
        Order Receipt
      </h2>

      <p className="text-gray-800 mb-2">
        <span className="font-semibold">Name:</span> {data.name}
      </p>
      <p className="text-gray-800 mb-2">
        <span className="font-semibold">Contact:</span> {data.contact}
      </p>

      <div className="border-t border-gray-300 my-3"></div>

      <div className="text-gray-800">
        {Object.values(data.cart).map((item) => (
          <p key={item.id} className="mb-1">
            {item.title} x {item.qty} = £{item.price * item.qty}
          </p>
        ))}
      </div>

      <div className="border-t border-gray-300 my-3"></div>

      <p className="font-bold text-gray-800 text-lg">
        Total: £{data.total}
      </p>

      <button
        id="downloadBtn"
        onClick={handleDownload}
        className="mt-4 w-full py-3 rounded text-white font-semibold bg-[#D35400] hover:bg-[#b84200] transition-colors"
      >
        Download Receipt
      </button>
    </div>
  );
};

export default Receipt;
