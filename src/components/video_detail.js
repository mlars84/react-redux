import React from 'react'
import PacmanLoader from './Loader'

const VideoDetail = ({video}) => {
  if (!video) {
    return <PacmanLoader />
  }

  const videoName = video.snippet.title
  const description = video.snippet.description
  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`
  console.log('url:', url)

  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
      <div className='details'>
        <div>{videoName}</div>
        <div>{description}</div>
      </div>
    </div>  
  )
}

export default VideoDetail
