import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import { Col, Row, Container, Form } from 'react-bootstrap';
import './index.scss';  
import PropTypes from 'prop-types'

const Home = () =>{
        return <div> 
        <Container fluid={true} className="tinted-image">
        <section className="insideTinted">
            <h1 className="get-cash-heading"> Get Cash For Your House </h1> 
        
        <h3 className="index-h3">We buy houses - we're home buyers who will buy your house "AS IS" and close on your timeline. You won’t have to clean, paint or fix a thing. Don’t waste
        any more time or money. </h3>
        
        </section>

        <div className="s130 pull-left">
          <form>
            <div className="inner-form">
              <div className="input-field first-wrap">
                <div className="svg-wrapper">
                  <img src="https://img.icons8.com/material-outlined/25/000000/marker.png" />
                  {/* font-size: 30px; */}
                </div>
                <input className="searchTextField" id="searchTextField" type="text" placeholder="Enter your street address" />
              </div>
                <div className="input-field second-wrap">
                  <button className="btn-search" type="button">Get a Cash Offer Now</button>
                </div>
              </div>
            </form>
        </div>
                
</Container>
    </div>
}

Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid className
}
export default Home; 