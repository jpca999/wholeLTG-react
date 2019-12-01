import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 

import PageOne from './PageOne';
import PageTwo from './PageTwo'; 

const App = () =>{
    return (
        <div> 
        <BrowserRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/page2" exact component={PageTwo} />
        </BrowserRouter>
        </div>);
}; 

export default App; 