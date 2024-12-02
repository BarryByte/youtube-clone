import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="flex border border-gray-200 justify-between ">
      {/* 3 parts */}
      <div className="p-2 m-2 flex ">
        <img

          onClick={() => toggleMenuHandler()}
          className="cursor-pointer mr-3"
          height={8}
          width={30}
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
        />
        <img
          height={8}
          width={300}
          alt="youtube-logo"
          src="https://cdn.worldvectorlogo.com/logos/youtube-6.svg"
        />

      </div>

      <div className="flex h-10 mt-5 ">
        <input
          className=" border border-gray-500 rounded-l-lg p-2"
          placeholder="Search"
        />
        <p className=" border border-gray-500 rounded-r-lg p-2"> 🔍</p>
      </div>

      <div className="p-2 m-2 ">
        <img
          height={20}
          width={20}
          alt="profile"
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
        />
      </div>
    </div>
  );
};

export default Head;
