import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';


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
      {videos.map((video) => <Link to={"/watch/?v=" + video.id}><VideoCard key={video.id} info={video}/></Link>)}
    </div>
  )
}

export default VideoContainer