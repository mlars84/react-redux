import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      term: ''
    }
  }
  render() {
    console.log('this.state:', this.state)
    return (
      <div>
        <input onChange={e => this.setState({ term: e.target.value })}/>
      </div>
    )
  }
}

export default SearchBar