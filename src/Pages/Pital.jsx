import ProductGrid from "../Components/ProductGrid";


function Pital() {
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
  
  return (
    <div>
      <h1 style={{color:"#b01c1a"}} className="text-center py-6">Brass ka Bartan | पीतल के बर्तन</h1>
     <div className="min-h-screen bg-gray-100">
      <ProductGrid products={products} />
    </div>
    </div>
  )
}

export default Pital
