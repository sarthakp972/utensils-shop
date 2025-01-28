function Homesection3() {
    // const imageStyle = {
    //   objectFit: "cover",
    //   borderRadius: "55% 50% 0 0",
    //   transition: "transform 0.3s ease",
    // };
  
    return (
      <section className="py-10 px-5 bg-[#f9f5ec]">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src="https://ptal.in/cdn/shop/files/Rectangle_5929.jpg?v=1696852778"
              className="w-full h-[400px] lg:h-[600px] object-cover rounded-tl-[55%] rounded-tr-[50%] rounded-bl-none rounded-br-none transition-transform duration-300 hover:scale-105"
              alt="Personalized Gifts"
            />
          </div>
  
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-lg text-[#B01C1A] font-medium mb-2">Personalised for you!</p>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">Gift of Health, Gift of Impact</h1>
            <p className="text-gray-600 text-base lg:text-lg mb-6">
              When every human being is unique, why should your gift be like someone else’s? Explore the wide range of
              premium curations by P-TAL and experience the joy of gifting customised handcrafted assortments!
            </p>
            <button className="px-6 py-3 bg-[#B01C1A] text-white rounded-lg shadow-lg hover:bg-[#8E1816] transition duration-300">
              Explore More
            </button>
          </div>
        </div>
      </section>
    );
  }
  
  export default Homesection3;
  