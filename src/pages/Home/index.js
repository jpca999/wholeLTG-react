import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import { Col, Row, Container } from 'react-bootstrap';
import './index.scss';  
import PropTypes from 'prop-types'


const Home = () =>{
        return <div> 
        <Container fluid={true} className="tinted-image">
        <h3>
            <h1 className="almost-done"> Get cash for your  </h1>
            <h1 className="almost-done-2"> House fast </h1>
        </h3>


        <h3 className="index-h3">We buy houses - we're home buyers who will buy your house "AS IS" and close </h3>
        <h3 className="index-h3"> on your timeline. You won’t have to clean, paint or fix a thing. Don’t waste </h3> 
        <h3 className="index-h3"> any more time or money.</h3>



</Container>
    </div>
}

Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}
export default Home; 