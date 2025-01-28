
import { useNavigate } from "react-router-dom";
import AddToCartButton from "./AddtoCardButton";
import "./HeroSection2.css";

function HeroSection2() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      image: "https://ptal.in/cdn/shop/files/DSC_7072.jpg?v=1737034808&width=250",
      name: "Product 1",
      description: "This is a great product.",
      price: "$100",
    },
    {
      id: 2,
      image: "https://ptal.in/cdn/shop/files/DSC_7072.jpg?v=1737034808&width=250",
      name: "Product 2",
      description: "This is a great product.",
      price: "$120",
    },
    {
      id: 3,
      image: "https://ptal.in/cdn/shop/files/DSC_7072.jpg?v=1737034808&width=250",
      name: "Product 3",
      description: "This is a great product.",
      price: "$150",
    },
    {
      id: 4,
      image: "https://ptal.in/cdn/shop/files/DSC_7072.jpg?v=1737034808&width=250",
      name: "Product 4",
      description: "This is a great product.",
      price: "$180",
    },
  ];

  const handleProductClick = (product) => {
    // Navigate to another page with the selected product details
    navigate("/product-details", { state: product });
  };

  return (
    <div
      className="flex flex-col justify-center items-center mt-5 mb-4"
      style={{ backgroundColor: "#f9f5ec" }}
    >
      {/* Heading Section */}
      <div className="text-secondary fs-6 lh-base text-uppercase mb-1 mt-5">
        FEATURED Products
      </div>
      <div className="leading-loose montserrat-bold pacifico-regular text-capitalize fw-normal lh-sm text-custom-secondary display-5 display-md-4 my-0 text-red-700 mt-3">
        our all time favourites
      </div>

      {/* Products Section */}
      <div className="product-grid container2">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product)} // Pass product details on click
            style={{ cursor: "pointer" }} // Add pointer cursor for better UX
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <AddToCartButton />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection2;
