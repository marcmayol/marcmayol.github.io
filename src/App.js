import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/general/header";
import Footer from "./components/general/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogCategory from "./components/BlogCategory";
import BlogArticle from "./components/BlogArticle";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route  path="/blog" element={<Blog/>}/>
                <Route  path="/blog/category/:name" element={<BlogCategory/>}/>
                <Route exact path="/blog/:name" element={<BlogArticle/>}/>
                <Route  path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
