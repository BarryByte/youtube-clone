import React from "react";
import ButtonCard from "./ButtonCard";

const ButtonList = () => {
  const buttonList = [
    "story",
    "songs",
    "games",
    "India",
    "Horror",
    "live",
    "Inteview",
  ];
  return (
    <div className="flex ml-3  mr-3 pt-3">
      {/* <ButtonCard info="store"/> */}
      {buttonList.map((req, idx) => (
        <ButtonCard key={idx} info={req} />
      ))}
    </div>
  );
};

export default ButtonList;
