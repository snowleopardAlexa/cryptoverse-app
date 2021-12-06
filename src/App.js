import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
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
                <Routes>
                  <Route path="/" element={<HomePage />}>
          
                  </Route>
                  <Route path="/exchanges" element={<Exchanges />}>
                      
                  </Route>
                  <Route path="/cryptocurrencies" element={<Cryptocurrencies />}>
                    
                  </Route>
                  <Route path="/crypto/:coinId" element={<CryptoDetails />}>
                    
                  </Route>
                  <Route path="/news" element={<News />}>
                    
                  </Route>
                </Routes>
              </div>
            </Layout>
        <div className="footer">
           <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
             Cryptoverse <br />
             All rights reserved
           </Typography.Title>
           <Space>
             <Link to="/">Home</Link>
             <Link to="/exchanges">Exchanges</Link>
             <Link to="/news">News</Link>
           </Space>
        </div>
        </div>
    </div>
  );
}

export default App;
