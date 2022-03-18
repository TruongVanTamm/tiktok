import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';
import reportWebVitals from './reportWebVitals';
import './index.css'


// 1: useEffect(callback)
// 2: useEffect(callback,[])
// 3: useEffect(callback.[deps])
// -----------------------------------------
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi compoment umounted

reportWebVitals();
ReactDOM.render(< App />, document.getElementById('root'))