import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'
import VideoListItem from './components/video_list_item'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyDL0r5DA1SxTB1CH89S2B3JAjfZTnJAdZg'

class App extends Component {
  render() {
    // console.log('App props:', this.props)
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

ReactDOM.render(
  <App />, 
  document.querySelector('.root')
);