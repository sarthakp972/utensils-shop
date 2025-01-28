import AddToCartButton from "./AddtoCardButton";

const ProductCard = ({ product }) => {
    return (
      <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" >
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-1"  style={{ backgroundColor: '#f9f5ec'}}>
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-600 text-sm">{product.description}</p>
          <p className="text-lg font-bold">{product.price}</p>
          {/* Button added here */}
          <AddToCartButton/>
          {/* <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
            Add to Cart
          </button> */}
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  