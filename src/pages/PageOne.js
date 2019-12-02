import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import { Col, Row, Container } from 'react-bootstrap';

const PageOne = () =>{
        return <div> 
        <Container>
        Page one 
        <Link to="/page2">  Navigate to page 2 </Link>

  <Row>
    <Col sm={8}>sm=8</Col>
    <Col sm={4}>sm=4</Col>
  </Row>
  <Row>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
  </Row>
</Container>
    </div>
}
export default PageOne; 