import React, { Component } from 'react';
import './Webgame.css';
import { render } from 'react-dom';

const TextHeader = (props: { text: string}) =>
  <ul>{props.text}</ul>

export default class Webgame extends Component<{}, { value: string}> {
  state = {value : "Default"};

  renderText(i: string) {
    return (
      <TextHeader text={i} />
    );
  }


  render() {
    return (
      <div>
        <div className="Webgame">
          <div className="Webgame-leftbody">
            {this.renderText(this.state.value)}
            {this.renderText("default test")}
            {this.renderText("sad val")}
            {this.renderText("default val")}
            {this.renderText("default val")}
            <a href="#" className="myButton">Button</a>
          </div>
          <div className="Webgame-rightbody">
            {this.renderText("default val")}
            {this.renderText("default val")}
            {this.renderText("default val")}
            {this.renderText("default val")}
            {this.renderText("default val")}
          </div>
        </div>
        <div className="Webgame-sidebar">
          <a href="#">Home</a>
          <a href="#">Menu #2</a>
          <a href="#">Menu #3</a>
          <a href="#">Menu #4</a>
        </div>
      </div>
    );
  }
}
