import React from 'react';
import styled from 'styled-components'; 
import { Col, Row, Container } from 'react-bootstrap';
import Footer from '../../components/Footer'; 

import { Formik } from 'formik'
import { Form, Input, PhoneInput, Select, SubmitBtn } from 'react-formik-ui';



const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #4a4244; 
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  font-size: 20px;
  margin: 0.5em 0;
  position: relative;
`;


const GetCashOfferbtnStyle = {
  background: '#f04134',
  color: 'white',
  marginTop: '23px',
};


const GetCashOfferbtn = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const customzedInput = {
  background: 'red !important',
}


const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const ConfirmAddressSection = styled.section`
  border-right: 1px dashed lightgray;
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

 <Formik
  initialValues={{
    textFieldExample3: '',
    FirstName: '', 
    LastName: '', 
  }}

  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form mode='themed'>
      
      
      <div className="row push-down">
          <div className="col-sm-6 col-xs-12 text-center ">   
                      
                <Title>      
                    <span class="asmanicolor">1.</span>   Confirm Address
                </Title>

                  <Input
                    className='customzedInput'
                    required='true'
                    name='Street Address'
                    label='Street Address'
                    // style=''
                  />      


                  <Input
                    required='true'
                    name='City'
                    label='City'
                  />      

                  <Select
                    name='State'
                    placeholder='CA'
                    options={[
                      { value: '1', label: 'AK' },
                      { value: '2', label: 'AZ' },
                      { value: '3', label: 'CA' },
                      { value: '4', label: 'DC' },
                      { value: '5', label: 'LA' },
                      { value: '6', label: 'MD' },
                    ]}
                  />    

                  <Input
                    required='true'
                    name='Zip'
                    label='Zip'
                  />            

                  </div>  
            


          <div className="col-sm-6 col-xs-12 text-center">  
            <Title>      
                <span class="asmanicolor">2.</span>    Add Contact Info
            </Title>


              <Input
                required='true'
                name='FirstName'
                label='First Name'
              />

              <Input
                required='true'
                name='LastName'
                label='Last Name'
              />


            <PhoneInput
                    name='phoneNr5'
                    label='Phone Nr.'
                    format='NATIONAL'
                    defaultCountry='us'
                    placeholder='(555) 555-5555'
                  />
         
            <Input
                required='true'     
                name='Email'
                label='Email'
              />    

          </div>                                                            
        </div> 

      
      <div className="text-center">
      <button type="submit" className="btn"  style={GetCashOfferbtnStyle} >
            Get Cash Offer Now
          </button>
          </div> 
    </Form>
  )}
/>



          
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