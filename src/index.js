import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons'; 
//import {robots} from './robots'
//robots va con curly brakets por que son varios

ReactDOM.render(<App />,document.getElementById('root'));

serviceWorker.unregister(); 
