import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'; 

import Home from './pages/Home';
import PageTwo from './pages/PageTwo'; 

import HowItWorks from './pages/HowItWorks.js';
import ContactUs from './pages/ContactUs.js';
import Faq from './pages/Faq.js';
import WhyUs from './pages/WhyUs.js';
import Testimonials from './pages/Testimonials.js'

const App = () =>{
    return (
        <BrowserRouter>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/page2" exact component={PageTwo} />
            <Route path="/Howitworks" exact component={HowItWorks} />
            <Route path="/ContactUs" exact component={ContactUs} />            
            <Route path="/Faq" exact component={Faq} />
            <Route path="/WhyUs" exact component={WhyUs} />
            <Route path="/Testimonials" exact component={Testimonials} />

        </BrowserRouter>
        );
}; 

export default App; 