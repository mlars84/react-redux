import React from 'react'
import Loader from 'halogen/PacmanLoader'

const PacmanLoader = React.createClass({
  render: function() {
    return (
      <Loader style={{color:"#26A65B", size:"16px", margin:"4px"}}/>
    )
  }
})

export default PacmanLoader