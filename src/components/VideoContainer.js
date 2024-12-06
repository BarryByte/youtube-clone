import React, { useEffect, useState } from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  // state variable that holds the list of videos fetched from the api
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    // const data = await fetch (process.env.YOUTUBE_VIDEOS_API);
    const data = await fetch(process.env.REACT_APP_YOUTUBE_VIDEOS_API);

    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center p-4 bg-gray-50">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {/* <VideoCard info={videos[0]}/> */}
      {videos.map((video) => (
        <Link to={"/watch/?v=" + video.id} className="hover:scale-105 transition-transform">
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
