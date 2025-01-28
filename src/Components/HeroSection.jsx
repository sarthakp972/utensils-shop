import "./Herosection.css";


function HeroSection() {
 
  const imgUrl = [
    {
      url: "https://ptal.in/cdn/shop/files/KANSA_THAALI_SET_11-3-2-2.jpg?v=1707730028&width=540",
      name: "BRASS FOR COOKING",
    },
    {
      url: "https://ptal.in/cdn/shop/files/DSC_2771-4-2-2.jpg?v=1707729661&width=540",
      name: "COPPER FOR DRINKING",
    },
    {
      url: "https://ptal.in/cdn/shop/files/KANSA_THAALI_SET_11-3-2-2.jpg?v=1707730028&width=540",
      name: "KANSA FOR EATING",
    },
  ];

  const imageStyle = {
    width: "300px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "55% 50% 0 0",
    transition: "transform 0.3s ease",
  };

  return (
    <div
      className="flex flex-col justify-center items-center mt-5 mb-4"
      style={{ backgroundColor: "#f9f5ec" }}
    >
      {/* Heading Section */}
      <div className="text-secondary fs-6 lh-base text-uppercase mb-1 mt-5">
        Ayurveda swears by these
      </div>
      <div className="leading-loose montserrat-bold pacifico-regular text-capitalize fw-normal lh-sm text-custom-secondary display-5 display-md-4 my-0 text-red-700 mt-3">
        Shop by Metals
      </div>

      {/* Images Section */}
      <div className="flex container justify-content-around items-center mt-10 gap-4 flex-wrap my-box-sizing">
        {imgUrl.map((img, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            {/* Image */}
            <img
              src={img.url}
              alt={`Metal ${index + 1}`}
              className="image-zoom shadow-md"
              style={imageStyle}
            />
            {/* Name */}
            <div
              className="text-black text-center mt-2"
              style={{ fontSize: "1.2rem", fontWeight: "700",letterSpacing:"1px" }}
            >
              {img.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
