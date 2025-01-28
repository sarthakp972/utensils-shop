

function AllProducts() {
  const products = [
    { id: 1, name: "Product 1", price: "$100", image: "https://example.com/product1.jpg" },
    { id: 2, name: "Product 2", price: "$120", image: "https://example.com/product2.jpg" },
    { id: 3, name: "Product 3", price: "$150", image: "https://example.com/product3.jpg" },
    { id: 4, name: "Product 4", price: "$180", image: "https://example.com/product4.jpg" },
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f5ec" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>All Products</h1>
      <div className="product-grid" style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px", width: "200px", textAlign: "center" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover", marginBottom: "10px" }} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
