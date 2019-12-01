import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 

import Header from './Header'; 

import PageOne from '../pages/PageOne';
import PageTwo from '../pages/PageTwo'; 

const App = () =>{
    return (
        <div> 
        <BrowserRouter>
        <Header />
        <Route path="/" exact component={PageOne} />
        <Route path="/page2" exact component={PageTwo} />
        </BrowserRouter>
        </div>);
}; 

export default App; 