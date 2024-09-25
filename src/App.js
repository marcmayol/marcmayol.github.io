import './index.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";


function App() {
    return (
        <div className="App">
            <script src="https://cdn.tailwindcss.com"></script>
            <Routes>
                <Route  path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
