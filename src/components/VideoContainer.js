import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';


const VideoContainer = () => {
  // state variable that holds the list of videos fetched from the api
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  },[])

  const getVideos = async () => {
    // const data = await fetch (process.env.YOUTUBE_VIDEOS_API);
    const data = await fetch(process.env.REACT_APP_YOUTUBE_VIDEOS_API);

    const json = await data.json();
    console.log(json.items);
    setVideos(json.items)
  }

  return (
    <div className='flex flex-wrap '>
      {/* <VideoCard info={videos[0]}/> */}
      {videos.map((video) => <VideoCard key={video.id} info={video}/>)}
    </div>
  )
}

export default VideoContainer