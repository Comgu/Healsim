import React from 'react';
import logo from './logo.svg';
import './Webgame.css';

class Square extends React.Component {
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
      value: "default",
    };
  }

  renderText(i) {
    return <Square value={i} />;
  }

  render() {
    return (
      <div className="Webgame" >
        <div className="Webgame-leftbody">
          {this.renderText(this.state.value)}
          {this.renderText(this.state.value)}
          {this.renderText(this.state.value)}
          {this.renderText(this.state.value)}
          {this.renderText(this.state.value)}
        </div>
        <div className="Webgame-rightbody">
          {this.renderText(this.state.value)}
          {this.renderText(this.state.value)}
          {this.renderText(this.state.value)}
          {this.renderText(this.state.value)}
          {this.renderText(this.state.value)}
        </div>
        <div className="Webgame-sidebar">
          <button className="myButton">Fire</button>
          <button className="myButton">Frost</button>
          <button className="myButton">Arcane</button>
        </div>
      </div>
    );
  }
}

export default Webgame;