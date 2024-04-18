import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';
import Home from "./pages/home/Home";
import './App.css';
function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;