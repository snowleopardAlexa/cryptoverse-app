import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

// import all components in one line 
import { Navbar, Exchanges, HomePage, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css';

function App() {
  return (
    <div className="cryptoverse-app">
        <div className="navbar">
           <Navbar />
        </div>
        <div className="main">
            <Layout>
              <div className="routes">
                <Switch>
                  <Route exact path="/">
                      <HomePage />
                  </Route>
                  <Route exact path="/exchanges">
                      <Exchanges />
                  </Route>
                  <Route exact path="/cryptocurrencies">
                      <Cryptocurrencies />
                  </Route>
                  <Route exact path="/crypto/:coinId">
                      <CryptoDetails />
                  </Route>
                  <Route exact path="/news">
                      <News />
                  </Route>
                </Switch>
              </div>
            </Layout>
        </div>
        <div className="footer">

        </div>
        <div> Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp"> Eucalyp </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
    </div>
  );
}

export default App;
