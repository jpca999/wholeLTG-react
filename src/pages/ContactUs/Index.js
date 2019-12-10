import React from 'react';
import styled from 'styled-components'; 
import { Col, Row, Container, Form } from 'react-bootstrap';
import PropTypes from 'prop-types'; 
import Footer from '../../components/Footer'; 
import iconpenpaper from '../../Images/index/icon-pen-paper.png';
import iconwallet from '../../Images/index/icon-wallet.png'; 

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


const ContactUs = () =>{
        return <div> 

<Container fluid={true} className="tinted-image">
        <section className="insideTinted">  
          <h1 class="almost-done"> Almost done! Send us your </h1>
          <h1 class="almost-done"> contact info, and get a cash offer today</h1>
          <br />
          <h1 class="almost-call">or Call  <a href="tel:123-456-7890"> 408-457-0085</a></h1>
        </section>
</Container>

 {/* Process Container */}
 <Container fluid={true}  className="">
    
        {/* icon-calendar */}
        <div className="row push-down">
          <div className="col-sm-6 col-xs-12 text-center calendar">  
            
            <h1 class="confirm-address lessBlack"> <span class="asmanicolor">1.</span> Confirm Address</h1>


          </div>  
          
          <div className="col-sm-6 col-xs-12 text-center">  
            <h1 class="confirm-address lessBlack">  <span class="asmanicolor"> 2.</span> Add Contact Info</h1>

          </div>                                                            
        </div> 
        <div className="row how-works"> 
          <div className="col-sm-12 col-xs-12 text-center">  
            <button type="button" className="btn btn-success"> 
              Get Cash Offer Now
            </button>
          </div>
        </div>       
      </Container>













  <br/> <br/>

{/* yellow  */}


<div className="yellow-footer-cta">  
        <div className="container-fluid bg-yellow-lower">
          <h4 className="almost-done-yellow-top"> Questions?</h4>   
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <h4 className="almost-done-yellow-head"> WHO TYPICALLY SELLS HOUSES TO WE BUY UGLY HOUSES? </h4>                    
              <p className="yellow-para">People from all walks of life sell to us, but they all share one thing in common: they need to sell a house quickly to a trusted home buyer who can make a cash offer and close on their schedule. …</p>
              <a href="https://www.w3schools.com" className="read-more"> Read More</a>
            </div>
            <div className="col-sm-4 col-xs-12">
              <h4 className="almost-done-yellow-head"> WHAT IF MY HOUSE ISN'T UGLY? </h4>                    
              <p className="yellow-para">We’d still like to hear from you. Our buyers are interested in houses that might be good investments, regardless of condition. Whether your house needs minimal work or a lot, call us. …</p>
              <a href="https://www.w3schools.com" className="read-more"> Read More</a>
            </div>
            <div className="col-sm-4 col-xs-12">
              <h4 className="almost-done-yellow-head"> HOW DOES THE HOUSE BUYING PROCESS WORK? </h4>                    
              <p className="yellow-para">We follow a quick and simple process that makes things easy for sellers: 1.) Call us. 2.) Get your cash offer. 3.) Close on your schedule. …</p>
              <a href="https://www.w3schools.com" className="read-more"> Read More</a>
            </div>                    
          </div>
          <div className="quest-bk" /> 
  </div>
</div>
      <Footer />
    </div>


}

export default ContactUs; 