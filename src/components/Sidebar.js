import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className="p-4 w-60 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Home Section */}
      <div className="mb-6">
        <ul className="space-y-3">
          <li className="hover:bg-gray-100 rounded-md p-2">
            <Link to={"/"} className="flex items-center gap-2">
              🏠 <span>Home</span>
            </Link>
          </li>
          <li className="hover:bg-gray-100 rounded-md p-2">
            <span className="flex items-center gap-2">🎞 <span>Shorts</span></span>
          </li>
          <li className="hover:bg-gray-100 rounded-md p-2">
            <span className="flex items-center gap-2">📈 <span>Subscription</span></span>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-3">Explore</h2>
        <ul className="space-y-3">
          <li className="hover:bg-gray-100 rounded-md p-2">
            <span className="flex items-center gap-2">📉 <span>Trending</span></span>
          </li>
          <li className="hover:bg-gray-100 rounded-md p-2">
            <span className="flex items-center gap-2">🛍 <span>Fashion</span></span>
          </li>
          <li className="hover:bg-gray-100 rounded-md p-2">
            <span className="flex items-center gap-2">🎮 <span>Games</span></span>
          </li>
          <li className="hover:bg-gray-100 rounded-md p-2">
            <span className="flex items-center gap-2">🎵 <span>Music</span></span>
          </li>
          <li className="hover:bg-gray-100 rounded-md p-2">
            <span className="flex items-center gap-2">📢 <span>News</span></span>
          </li>
          <li className="hover:bg-gray-100 rounded-md p-2">
            <span className="flex items-center gap-2">🏏 <span>Sports</span></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
