import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

// import all components in one line 
import { Navbar } from './components';
import './App.css';

function App() {
  return (
    <div className="cryptoverse-app">
        <div className="navbar">
           <Navbar />
        </div>
        <div className="main">

        </div>
        <div className="footer">

        </div>
        <div> Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp"> Eucalyp </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
    </div>
  );
}

export default App;
