import React, { Component } from 'react'
import _ from 'lodash'
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

    this.videoSearch('michael jordan')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div>
        {<header className="header">React app with Youtube API</header>}
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} 
        />
        <footer className="footer">Built with love in Saint Paul, MN | ©2017 matthewlarson/dev</footer>
      </div>
    )
  }
}

export default App