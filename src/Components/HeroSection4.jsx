function HeroSection4() {
    const imgData = [
      {
        img: "https://ptal.in/cdn/shop/files/DSC_2769-3-2-2.jpg?v=1707588974&width=1080",
        name: "Cookware & Kitchenware",
      },
      {
        img: "	https://ptal.in/cdn/shop/files/DSC_2771-3-2-2.jpg?v=1707588719&width=1080",
        name: "Drinkware",
      },
      {
        img: "https://ptal.in/cdn/shop/files/DSC_1382-2.jpg?v=1707484591&width=1080",
        name: "Tableware & Dinnerware",
      },
      {
        img: "https://ptal.in/cdn/shop/files/SET_OF_TWO_COPPER_DIYAS.jpg?v=1707654444&width=1080",
        name: "Sets Combos",
      },
      {
        img: "https://ptal.in/cdn/shop/files/DSC_1288.jpg?v=1707589108&width=1080",
        name: "Gifting",
      },
    ];
  
    return (
      <section className="py-10 px-5 bg-[#f9f5ec]">
        <div className="text-center mb-8">
          <p className="text-lg text-[#B01C1A] font-medium">Crafted for all your needs!</p>
          <h2 className="text-3xl font-bold text-gray-800">Shop by Utility</h2>
        </div>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {imgData.map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto rounded-full object-cover border-4 border-gray-200 hover:scale-105 transition-transform duration-300"
              />
              <p className="mt-4 text-gray-700 text-sm md:text-base font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default HeroSection4;
  