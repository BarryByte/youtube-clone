import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;
  const { snippet, statistics } = info;
  const { viewCount } = statistics;
  const { channelTitle, thumbnails, title } = snippet;

  const formatViewCount = (count) => {
    if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M views`;
    if (count >= 1_000) return `${(count / 1_000).toFixed(1)}K views`;
    return `${count} views`;
  };

  return (
    <div className="p-3 m-2 bg-white shadow-md border rounded-lg w-80 hover:shadow-lg transition-shadow">
      <img
        className="rounded-lg mb-3"
        alt={title}
        src={thumbnails.medium.url}
      />
      <div>
        <h3 className="font-semibold text-sm line-clamp-2 mb-1">{title}</h3>
        <p className="text-gray-600 text-xs">{channelTitle}</p>
        <p className="text-gray-500 text-xs">{formatViewCount(viewCount)}</p>
      </div>
    </div>
  );
};
export const AdVideoCard = ({ info }) => {
  return (
    <div className=" bg-gradient-to-r from-yellow-100 to-yellow-300 border border-yellow-400 rounded-lg">
      <VideoCard info={info} />
      <p className="ml-4 font-extralight">Ad</p>
    </div>

  );
};

export default VideoCard;
