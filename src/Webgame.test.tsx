import React from 'react';
import ReactDOM from 'react-dom';
import Webgame from './Webgame';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Webgame />, div);
  ReactDOM.unmountComponentAtNode(div);
});
