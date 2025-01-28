import "./videoCart.css";
import { Hero_Video } from "../constant";


const HomeVideos = () => {
  return (
    <div className="video-container flex mt-5 gap-4 container overflow-x-auto">
      {Hero_Video.map((video, index) => (
        <video
          key={index}
          preload="none"
          loop
          autoPlay
          playsInline
          muted
          className="responsive-video" // Apply styles using the class
          src={video.URL} 
        ></video>
      ))}
    </div>
  );
};

export default HomeVideos;
