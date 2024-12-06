import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className="p-3 m-3 w-max border border-gray-400">
      <div>
        <ul>
          <li>
            <Link to={"/"}>🏠Home</Link>
          </li>
          <li>🎞Shorts</li>
          <li>📈Subscription</li>
        </ul>
      </div>
      <br></br>
      <div>
        <div className="font-bold">Explore</div>
        <ul>
          <li>📉Trending</li>
          <li>🛍Fashion</li>
          <li>🎮Games</li>
          <li>🎵Music</li>
          <li>📢News</li>
          <li>🏏Sports</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
