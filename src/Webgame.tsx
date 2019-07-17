import React, { Component } from 'react';
import './Webgame.css';
import { render } from 'react-dom';

export default class Webgame extends Component {
  render() {
    return (
      <div>
        <div className="Webgame">
          <div className="Webgame-leftbody">
            <ul>Webgame 1</ul>
            <ul>Webgame 2</ul>
            <ul>Webgame 3</ul>
            <ul>Webgame 4</ul>
            <ul>Webgame 5</ul>
          </div>
          <div className="Webgame-rightbody">
            <ul>Webgame 1</ul>
            <ul>Webgame 2</ul>
            <ul>Webgame 3</ul>
            <ul>Webgame 4</ul>
            <ul>Webgame 5</ul>
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
