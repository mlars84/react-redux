import React, { Component } from 'react'

// added {video} instead of props is equal to const video = props.video / same with onVideoSelect
const VideoListItem = ({video, onVideoSelect}) => {

  const imageUrl = video.snippet.thumbnails.default.url
  const videoName = video.snippet.title
  
  return (
    <li onClick={() => onVideoSelect(video)} className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object video-item' src={imageUrl}/>
        </div> 
        <div className='media-body'>
          <div className='media-heading'>{videoName}</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem