import { useLocation } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddToCartButton from "../components/AddtoCardButton";

import { FaShippingFast, FaExchangeAlt, FaClock, FaShieldAlt } from "react-icons/fa";

function ProductDetails() {
  const location = useLocation();
  const product = location.state;

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>No product details available!</div>;
  }

  const { image, name, description, price } = product;

  const handleQuantityChange = (type) => {
    setQuantity((prev) => {
      if (type === "increment") return prev + 1;
      if (type === "decrement" && prev > 1) return prev - 1;
      return prev;
    });
  };

  const handleAddToCart = () => {
    toast.success(`${name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
   
    <div className="flex flex-col lg:flex-row min-h-screen " style={{ backgroundColor: '#f9f5ec', padding: '20px' }}>
      {/* Left Side: Product Image */}
      
      <div className="lg:w-1/2 flex justify-center items-center p-4 lg:p-6 " style={{ backgroundColor: '#f9f5ec', padding: '20px' }}>
        <img
          src={image}
          alt={name}
          className="w-full max-w-sm lg:max-w-lg h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Right Side: Product Content */}
      <div className="lg:w-1/2 flex flex-col justify-center p-4 lg:p-6">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">{name}</h1>
        <p className="text-gray-700 text-sm lg:text-lg mb-4">{description}</p>
        <p className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">Price: {price}</p>
        <p className="text-sm text-gray-500 mb-6">incl. of all taxes</p>

        {/* Quantity and Add to Cart Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          {/* Quantity Selector */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">Quantity:</span>
            <button
              className="px-3 py-1 border rounded-lg bg-gray-100 hover:bg-gray-200"
              onClick={() => handleQuantityChange("decrement")}
            >
              -
            </button>
            <span className="text-lg font-bold">{quantity}</span>
            <button
              className="px-3 py-1 border rounded-lg bg-gray-100 hover:bg-gray-200"
              onClick={() => handleQuantityChange("increment")}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
     <div  onClick={handleAddToCart}>
      <AddToCartButton/>
     </div>
        </div>

        {/* Buy Now Button */}
        <button className="w-full py-3 bg-red-800 text-white font-bold text-lg rounded-lg shadow hover:bg-green-600 transition mb-6">
          Buy It Now
        </button>

        {/* Delivery Information Box */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg lg:text-xl font-bold mb-4 text-gray-800">Why Choose Us?</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaClock className="text-blue-500 text-2xl" />
              <p className="text-gray-700">Delivery Timeline: <span className="font-bold">7-10 days</span></p>
            </div>
            <div className="flex items-center gap-4">
              <FaShippingFast className="text-green-500 text-2xl" />
              <p className="text-gray-700">Free Shipping</p>
            </div>
            <div className="flex items-center gap-4">
              <FaExchangeAlt className="text-orange-500 text-2xl" />
              <p className="text-gray-700">Easy 7-days Exchange</p>
            </div>
            <div className="flex items-center gap-4">
              <FaShieldAlt className="text-purple-500 text-2xl" />
              <p className="text-gray-700">Lifetime Warranty</p>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer />
    </div>
    </>
  );
}

export default ProductDetails;
