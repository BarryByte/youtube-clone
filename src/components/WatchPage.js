import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import {  useSearchParams } from "react-router-dom";

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
    <div className="p-2 m-4 ">
      <iframe
        width="1280"
        height="720"
        src= {"https://www.youtube.com/embed/" + searchParams.get("v") + "?si=l7PLO2v6dvp1XGBg"}
        title="YouTube video player"
        // frameborder="0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        // allowfullscreen
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
