import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './components/Header'; 
 

import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo'; 

const App = () =>{
    return (
        <BrowserRouter>
            <Header />
            <Route path="/" exact component={PageOne} />
            <Route path="/page2" exact component={PageTwo} />
        </BrowserRouter>
        );
}; 

export default App; 