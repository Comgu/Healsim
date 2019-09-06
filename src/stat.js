import React from 'react';
import './stat.css'

class Stat extends React.Component {
  render() {
    return (
      <ul>
        <p id="statheader">
          {this.props.stat}
        </p>
        <p>
          {this.props.value}
        </p>
      </ul>
    )
  }
}

export default Stat;