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
        <input 
          className='search-bar'
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div> 
    )
  }
}

export default SearchBar