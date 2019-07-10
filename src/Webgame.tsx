import React from 'react';
import logo from './logo.svg';
import './Webgame.css';
import { render } from 'react-dom';

class Webgame extends React.Component {

  render() {
    return (
      <div>
        <div className="Webgame">
          <header className="Webgame-header">
            <img src={logo} className="Webgame-logo" alt="logo" />
          </header>
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

export default Webgame;
