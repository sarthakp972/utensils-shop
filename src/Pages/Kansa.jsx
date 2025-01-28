import ProductGrid from "../Components/ProductGrid";


function Kansa() {
  const products = [
    {
      id: 1,
      image: "https://ptal.in/cdn/shop/files/DSC_7072.jpg?v=1737034808&width=250",
      name: "Product 1",
      description: "This is a great product.",
      price: "$100111",
    },
    {
      id: 2,
      image: "https://ptal.in/cdn/shop/files/DSC_7072.jpg?v=1737034808&width=250",
      name: "Product 2",
      description: "This is a great product.",
      price: "$121110",
    },
    {
      id: 3,
      image: "https://ptal.in/cdn/shop/files/DSC_7072.jpg?v=1737034808&width=250",
      name: "Product 3",
      description: "This is a great product.",
      price: "$151110",
    },
    {
      id: 4,
      image: "https://ptal.in/cdn/shop/files/DSC_7072.jpg?v=1737034808&width=250",
      name: "Product 4",
      description: "This is a great product.",
      price: "$180111",
    },
  ];
  
  return (
    <div>
      <h1 style={{color:"#b01c1a" , backgroundColor:"#dcdcde"}} className="text-center py-6">Kansa ka Bartan</h1>
     <div className="min-h-screen bg-gray-100">
      <ProductGrid products={products} />
    </div>
    </div>
  )
}

export default Kansa
