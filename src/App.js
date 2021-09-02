import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Index from "./components/Header"
import {GlobalStyles} from "./GlobalStyles";
import Home from "./components/home"
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

const App = () => (
    <Router>
        <Index />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/:movieId" element={<Movie/>}/>
            <Route path="/*" element={<NotFound />}/>
        </Routes>
        <GlobalStyles />
    </Router>);


export default App;
