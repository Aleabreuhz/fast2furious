import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from "./pages/home/Home";
import './App.css';
import Coches from './pages/Coches/Coches';
import Ubicaciones from './pages/Ubicaciones/Ubicaciones'

import Tokio from './pages/rssPages/Tokio';
import Rio from './pages/rssPages/Rio';
import AbuDbi from './pages/rssPages/AbuDbi';
import Silva from './pages/rssPages/Silva';

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/coches" element={<Coches />}/>
                <Route path="/ubicaciones" element={<Ubicaciones />}/>
                <Route path="/abudbi" element={<AbuDbi />}/>
                <Route path="/tokio" element={<Tokio />}/>
                <Route path="/silva" element={<Silva />}/>
                <Route path="/rio" element={<Rio />}/>
                <Route path="/*" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;