import React, { Component } from 'react'
import VideoListItem from './video_list_item'

class VideoList extends Component {
  render() {

    const videos = this.props.videos
    
    const videoItems = videos.map((video) => {
      return (
        <VideoListItem 
          onVideoSelect={this.props.onVideoSelect}
          key={video.etag} 
          video={video}
        />
      )
    })

    return (
      <ul className='col-md-5 list-group'>
        {videoItems}
      </ul>
    )
  }
}

export default VideoList