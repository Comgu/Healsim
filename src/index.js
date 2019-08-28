import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Healsim from './healsim';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Healsim />, document.getElementById('root'));

serviceWorker.unregister();
