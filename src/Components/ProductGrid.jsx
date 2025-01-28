import ProductCard from "./ProductCard";



const ProductGrid = ({ products }) => {
  return (
    <div className="grid container grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 "  style={{ backgroundColor: '#f9f5ec'}}>
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
