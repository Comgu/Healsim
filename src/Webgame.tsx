import React, { Component } from 'react';
import './Webgame.css';
import { render } from 'react-dom';

interface TextClassProps {
  value?: string;
}

class TextClass extends Component<TextClassProps> {
  state: TextClassProps = {
    value: "0",
  };

  set value(value: string){
    this.value = value;
  }

  render() {
    return(
      <ul>
        {this.props.value}
      </ul>
    );
  }
}

export default class Webgame extends Component {
  renderText(i: string){
    return(
      <TextClass value={i}/>
    );
  }


  render() {
    return (
      <div>
        <div className="Webgame">
          <div className="Webgame-leftbody">
            {this.renderText("default val")}
            {this.renderText("default test")}
            {this.renderText("sad val")}
            {this.renderText("default val")}
            {this.renderText("default val")}
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
