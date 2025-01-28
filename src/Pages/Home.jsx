
import { Link } from "react-router-dom";
import Carousel1 from "../Components/Carousel1";
import HeroSection from "../Components/HeroSection";
import HeroSection2 from "../Components/HeroSection2";
import HomeVideos from "../Components/HomeVideos";
import Line from "../Components/Line";
import Homesection3 from "../Components/Homesection3";
import RunningNav from "../Components/RunningNav";
import HeroSection4 from "../Components/HeroSection4";

function Home() {
  return (

    <div style={{ backgroundColor: "#f9f5ec" }}>
      <Carousel1 />
      <HomeVideos />
      <Line />
      <HeroSection />
      <Line />
      <HeroSection2 />
      {/* "View All" as a Link */}
      <p className="underline" style={{ textAlign: "center", margin: "20px 0" }}>
        <Link to="/all-products" style={{ textDecoration: "none", color: "#d32f2f", fontWeight: "bold" }}>
          View All
        </Link>
      </p>
      <RunningNav/>
      <Homesection3/>
      <Line />
      <HeroSection4/>
      <Line />
      
     
    </div>
  );
}

export default Home;
