import React from 'react';
import logo from './logo.svg';
import './Webgame.css';

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    }
  }

  handleChange(i) {
    this.setState({
      value: i.target.value
    });
  }

  render() {
    return (   
        <input type="text"
          placeholder="0"
          value={this.state.value}
          onChange={i => this.handleChange(i)}
        /> 

    );
  }
}

class Webgame extends React.Component {
  constructor(props) {
    super(props);
  }

  renderText() {
    return <Field />;
  }

  render() {
    return (
      <div className="Webgame" >
        <div className="Webgame-leftbody">
          <Field spellpower/>
          <Field spirit/>
          <Field intellect/>
          <Field mp5/>
          <Field spellcrit/>
        </div>
        <div className="Webgame-rightbody">
          <Field hps/>
          <Field hpm/>
          <Field healUntilOom/>
        </div>
        <div className="Webgame-sidebar">
          <button className="myButton">Holy Paladin</button>
          <button className="myButton">Holy Priest</button>
          <button className="myButton">Discipline Priest</button>
          <button className="myButton">Resto Shaman</button>
          <button className="myButton">Resto Druid</button>
        </div>
      </div>
    );
  }
}

export default Webgame;