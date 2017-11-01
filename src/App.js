import React, { Component } from 'react'
import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'
import VideoListItem from './components/video_list_item'
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search' 
const API_KEY = 'AIzaSyA7jxGg_MhIDKg2ooKsX6iw4NGrbVSotrs'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      videos: [],
      selectedVideo: null 
    }

    YTSearch({key: API_KEY, term: 'michael jordan'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} 
        />
      </div>
    )
  }
}

export default App