import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  // const params = useParams();
  // console.log(params);

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  // const videoId = searchParams.get("v");
  return (
    <div className="p-4 flex flex-col gap-6 bg-gray-50 min-h-screen">
      {/* video player Section */}
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
        <iframe
          className="rounded-lg"
          width="100%"
          height="500px"
          src={
            "https://www.youtube.com/embed/" +
            searchParams.get("v") +
            "?rel=0&autoplay=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* video details */}
        <div className="mt-4 w-full text-left">
          <h2 className="text-xl font-bold">Video Title Placeholder</h2>
          <div className="flex justify-between items-center mt-2 text-gray-600">
            <div>
              <p>123,456 views • Uploaded on Dec 6, 2024</p>
              <p className="text-blue-500">Channel Name Placeholder</p>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* comments section */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
