import React from "react";

const ButtonCard = ({ info }) => {
  return (
    <div
      className="p-2 m-2 rounded-lg bg-red-500 text-white font-semibold text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <div className="flex items-center justify-center gap-2">
        <span className="text-2xl">🧭</span>
        <span>{info}</span>
      </div>
    </div>
  );
};

export default ButtonCard;
