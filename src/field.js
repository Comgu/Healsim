import React from 'react';

class Field extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: props.value,
        update: props.update,
        stat: props.stat,
      }
    }
  
    handleChange(i) {
      this.setState({
        value: i.target.value,
      });
  
      this.state.update(i.target.value, this.state.stat);
    }
  
    render() {
      return (
        <ul>
          <label>{this.state.stat.toUpperCase()}</label>
          <input type="text"
            placeholder="0"
            value={this.state.value}
            onChange={i => this.handleChange(i)}
          /> 
        </ul>
      );
    }
  }

  export default Field;