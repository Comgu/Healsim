import React from 'react';
import logo from './logo.svg';
import './Webgame.css';

class Field extends React.Component {
  render() {
    return (
      <ul>
        {this.props.value}
      </ul>
    );
  }
}

class Webgame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spellpower: 0,
      intellect: 0,
      spirit: 0,
      mp5: 0,
      spellCrit: 0,
      hps: 0,
      hpm: 0,
      healOom: 0,
    };
  }

  renderText(i) {
    return <Field value={i}/>;
  }

  render() {
    return (
      <div className="Webgame" >
        <div className="Webgame-leftbody">
          {this.renderText(this.state.spellpower)}
          {this.renderText(this.state.intellect)}
          {this.renderText(this.state.spirit)}
          {this.renderText(this.state.mp5)}
          {this.renderText(this.state.spellCrit)}
        </div>
        <div className="Webgame-rightbody">
          {this.renderText(this.state.hps)}
          {this.renderText(this.state.hpm)}
          {this.renderText(this.state.healOom)}
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