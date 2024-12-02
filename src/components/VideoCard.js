import React from 'react'

const VideoCard = ({info}) => {
  if(!info) return null;
  const {snippet ,statistics } = info;
  const {viewCount} = statistics;
  const {channelTitle,thumbnails, title} = snippet;

  return (
    <div className='p-2 m-2 border border-gray-200 w-80  rounded-xl'>
      <img alt="title" src={thumbnails.medium.url}/>
      <div>
        <ul>
          <li className='font-semibold truncate'>{title}</li>
          <li>{channelTitle}</li>
          <li>{viewCount}</li>
        </ul>
      </div>
    </div>
  )
}

export const AdVideoCard = ({info}) => {
  return (
    <div className='p-1 m-1 bg-gray-300 rounded-xl'>
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard