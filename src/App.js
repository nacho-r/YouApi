import React from 'react'
import './App.css';
import Search from './pages/Search/Search';
import {Link, Route} from 'wouter'

import Home from './pages/Home/Home'



function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img
            className="App-logo"
            alt="You Api Logo"
            src="http://pngimg.com/uploads/youtube/youtube_PNG15.png"
          />
        </Link>

        <Route component={Home} path="/" />
        <Route component={Search} path="/youapi/:search" />
      </section>
    </div>
  );
}

export default App;
