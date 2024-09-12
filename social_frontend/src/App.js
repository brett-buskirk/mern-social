// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import CreatePost from './CreatePost';
import logo from './logo.png';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
	        <div style={{ display: 'flex', alignItems: 'center' }}> 
                    <img src={logo} alt="MERN Social Logo" style={{ height: '75px', margin: '10px', borderRadius: '50%' }} /> 
                    <h1 style={{ margin: 0 }}>MERN Social</h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/create">Create Post</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/create" element={<CreatePost />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
