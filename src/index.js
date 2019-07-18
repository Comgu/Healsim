import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Webgame from './Webgame';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Webgame />, document.getElementById('root'));

serviceWorker.unregister();
