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
      var val = (i.target.validity.valid) ? i.target.value : this.state.value;
      if(val == '') {
        val = 0;
      }
      this.setState({
        value: parseInt(val)
      });
  
      this.state.update(val, this.state.stat);
    }
  
    render() {
      return (
        <ul>
          <label>{this.state.stat.toUpperCase()}</label>
          <input type="text"
            pattern="[0-9]*"
            value={this.state.value}
            onChange={i => this.handleChange(i)}
          /> 
        </ul>
      );
    }
  }

  export default Field;