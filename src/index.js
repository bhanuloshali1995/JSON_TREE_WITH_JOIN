import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {data,config} from "./config"
ReactDOM.render(<App data={data} config={config}/>, document.getElementById('root'));
registerServiceWorker();
