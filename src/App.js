import React from 'react';
import Index from "./components/Header"
import {GlobalStyles} from "./GlobalStyles";
import Home from "./components/home"

function App(){
    return( <div>
        <Index />
        <Home />
        <GlobalStyles />
    </div>)
}

export default App;
