import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/navbar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navbar />, document.getElementById('hero-area'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
