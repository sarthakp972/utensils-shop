

const RunningNav = () => {
  return (
    <div className="bg-red-700 py-2 overflow-hidden">
      <div className="relative">
        <div className="animate-marquee whitespace-nowrap flex space-x-10">
          {/* Repeating the text to create a seamless loop */}
          {Array(10)
            .fill("Transforming Traditions into Trends")
            .map((text, index) => (
              <span
                key={index}
                style={{color:"#fdc417"}}
                className="text-xl font-medium  uppercase"
              >
                {text}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RunningNav;
