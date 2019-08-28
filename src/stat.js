import React from 'react';

class Stat extends React.Component {
    render() {
      return(
        <div>
          <ul id="statheader">
            {this.props.stat}
          </ul>
          <ul>
            {this.props.value}
          </ul>
        </div>
      )
    }
  }

  export default Stat;