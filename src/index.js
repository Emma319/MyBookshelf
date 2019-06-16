import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import App from './App'
import './index.css'

ReactDOM.render(
    <HashRouter><App /></HashRouter>,
    document.getElementById('root')
);
registerServiceWorker();
