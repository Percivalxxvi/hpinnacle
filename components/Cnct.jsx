import React, { useState } from "react";
import "./Cnct.css";

const Cnct = ({ Icon, txt, txt2, txt3 }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div
      onMouseEnter={() => setFlip(true)}
      onMouseLeave={() => setFlip(false)}
      className={`cnct lg:flex-row flex-col h-60 lg:h-70 justify-center lg:justify-start lg:pt-10 border border-black rounded-2xl transition-transform duration-300`}
    >
      {/* Icon container */}
      <div className="h-20 w-20 bg-[#3e7742] rounded-2xl flex items-center justify-center text-white text-2xl">
        {Icon && <Icon size={35} />}
      </div>

      {/* Text */}
      <div className="flex flex-col ml-4 mt-2 lg:mt-0">
        <h2 className="font-semibold">{txt}</h2>
        <h1 className="text-lg">{txt2}</h1>
        {txt3 && <h1 className="text-sm">{txt3}</h1>}
      </div>
    </div>
  );
};

export default Cnct;
