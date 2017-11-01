import React, { Component } from 'react'
import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'
import VideoListItem from './components/video_list_item'
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search' 

const API_KEY = 'AIzaSyDL0r5DA1SxTB1CH89S2B3JAjfZTnJAdZg'

YTSearch({key: API_KEY, term: 'michael jordan'}, function(data) {
  console.log(data)
})

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail />
        <VideoListItem />
        <VideoList />
      </div>
    )
  }
}

export default App