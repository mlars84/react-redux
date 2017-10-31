import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      poop: ''
    }
  }
  render() {
    console.log('this.state:', this.state)
    return (
      <input onChange={e => console.log(e.target.value)} />
    )
  }
}

export default SearchBar