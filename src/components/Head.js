import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import searchIcon from "../assets/search-icon.svg";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  console.log(searchCache);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(
      process.env.REACT_APP_YOUTUBE_SEARCH_API + searchQuery
    );
    const json = await data.json();
    console.log(json[1]);
    // set the suggestions
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  // useEffect for api call
  useEffect(() => {
    // make an api call after every key press
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };

    // but if the diff b/w 2 api call is < 200ms -> decline the api call
  }, [searchQuery]);

  /**
   * Debouncing
   * Keystroke - 'a'
   * - The component re-renders due to the `searchQuery` state update.
   * - useEffect() is triggered because `searchQuery` is in its dependency array.
   * - A timer is set using `setTimeout` to make the API call after 200ms.
   *
   * Keystroke - 'ab'
   * - `searchQuery` state updates again, causing another re-render.
   * - useEffect() runs again due to the updated `searchQuery`.
   * - Before the new timer is set, the cleanup function from the previous useEffect
   *   (return statement) clears the earlier timer using `clearTimeout`.
   * - A new timer is set to make the API call after 200ms.
   *
   * This process ensures that only the latest `searchQuery` is used to make the API call,
   * avoiding redundant or stale calls for intermediate keystrokes.
   *
   * Behavior:
   * - If a new keystroke happens within 200ms, the previous timer is cleared, and a
   *   new one is started.
   * - If no new keystroke occurs within 200ms, the timer completes, and the API call is made.
   */

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

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
        <div>
          <input
            // tie with state variable.
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className=" border border-gray-500 rounded-l-lg p-2 w-96"
            placeholder="Search"
            type="text"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className=" border border-gray-500 rounded-r-lg p-2">
            {" "}
            🔍
          </button>

          {showSuggestions && (
            <div className=" fixed  px-3  bg-white  w-96 rounded-lg border border-gray-300 shadow-lg ">
              <ul>
                {suggestions.map((x) => {
                  return (
                    <div className="flex gap-2">
                      <img
                        alt="search-icon"
                        src={searchIcon}
                        width="18"
                        height="18"
                      />
                      <li
                        key={x}
                        className="shadow-orange-100 py-1 hover:bg-gray-100"
                      >
                        {x}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
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
