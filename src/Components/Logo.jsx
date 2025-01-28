

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Icon for the logo */}
      <div style={{backgroundColor:"#b01c1a"}} className="w-12 h-12  rounded-full flex items-center justify-center text-white font-bold text-xl">
        PB
      </div>
      {/* Text for the brand */}
      <div  className="text-2xl font-semibold text-gray-800">
        Patwa <span style={{color:"#b01c1a"}}>Bartan</span>
      </div>
    </div>
  );
};

export default Logo;
