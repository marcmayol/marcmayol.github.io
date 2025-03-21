import './index.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route path="/blog" element={<Blog/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
