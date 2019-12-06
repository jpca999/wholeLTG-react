import React from 'react'; 
import { Col, Row, Container, Form } from 'react-bootstrap';
import './Footer.scss'; 

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';



const Footer = () =>{
return  <div> 
<Container fluid={true} className="footer">
  <div className="col-sm-4 col-xs-12 footer-logo">
    <img alt="liberty buys housess" src="mylogo.png" />
    <p className="p-belowLogo">Copyright 2019 - Liberty Trust Group, Inc. </p>
    <p className="p-belowLogo">      All Rights Reserved. *Each franchise office is </p>
    <p className="p-belowLogo">  independently owned and operated.</p>
    <div className="col-sm-4 col-xs-12">
      <Row>
        <Col className="col-sm-6 col-xs-12">
          <ul>
            <li className="white-footer-link"> <a className="white-footer-link" href="http://">How it Works</a> </li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">FAQ</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Locations</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Reviews</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Contact</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Sell</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Sell</a></li>
          </ul>
        </Col>
        <div className="col-sm-6 col-xs-12">
          <ul>
            <li className="white-footer-link"> <a className="white-footer-link" href="http://">We Pay Cash</a> </li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Blog</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Company Info</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Franchise Info</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Liberty Trust Group</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Privacy</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Terms of Service</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Site Map</a></li>
          </ul>
        </div>
      </Row>                                
    </div>
    <Col className="col-sm-4 col-xs-12">
      <ul>
        <li className="white-footer-link"> <a className="white-footer-link" href="http://">fb icon</a> </li>
        <li className="white-footer-link">  <a className="white-footer-link" href="http://">Twitter icon</a></li>
      </ul>
    </Col>                                            
  </div>
  </Container>
  </div>

}

export default Footer; 
