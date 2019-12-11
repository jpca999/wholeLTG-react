import React from 'react';
// import './Testimonials.scss';  

import BasicForm from '../../components/BasicForm'; 
import fivestars from '../../Images/testimonials/five-stars-reviews.png';
import styled from 'styled-components';
import Footer from '../../components/Footer'; 
import Questions from '../../components/Questions'; 

const PushDownSection = styled.section`
  margin-top:30px; 
`;

const GetCashOfferbtnStyle = {
  background: '#f04134',
  color: 'white',
  marginTop: '63px',
  padding: '15px',
  width: '330px',
  bottom: '50px',
};

const BgYellow = styled.section`
  background: #f9d507;
  color: #4a4244;
`; 

const BgYellowInnerP = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  max-width: 870px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`; 




  const HowItWorks = () =>{
    return (<div> 
      <section className="container-fluid tinted-image"> 
          <h1 className="faq-header text-center"> How it works ?</h1>
          <h3 className="index-h3 text-center">Getting Cash For Your House Is Easier Than You Think. </h3>
          <div className="s130">
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
        </section>
        {/* SECOND Container */}

        <BgYellow className="container-fluid">
                  <BgYellowInnerP> We Buy Houses for Cash, The Good, The Bad and The Ugly℠. No gimmicks, no false promises, just fast cash for your house. Here’s how it works.
                  </BgYellowInnerP>
                  
                    <br />
          </BgYellow>






        <div>
          <div className="row">
            <div className="col-sm-7 col-xs-12 left-faq">                  
              
            <h1 class="almost-done-yellow-top push-down2">
                    We Buy Houses Ugly or Not℠
                </h1>


                <div class="text-center push-down">
                    <p class="p-above-leading push-down"> (Rem) WE BUY UGLY HOUSES REVIEWS & HowItWorks</p>
                </div>

              
                <p class="testi-page-p push-down"> We have local professional home buyers in your area ready to answer any questions you may have about selling your house. Call 866-200-6475 or fill out the form for a fast cash offer. </p>
            

                <div class="list">
                  <ul>
                  <li class="testi-page-li">No Painting </li>
                  <li class="testi-page-li">No Repairs </li>
                  <li class="testi-page-li">No worrying </li>
                  <li class="testi-page-li">No Hassles</li>
                </ul>
                </div>

                <div class="row push-down">
                  <div class="col-sm-12 col-xs-12">  
                      <h6 class="testiPage-header-h6">
                          Morris H. (Flint, Michigan)
                      </h6>
                      
                      <div class="text-left">
                          <img class="testiPage-fivestar" src={fivestars} alt="" /> 
                      </div>  

                      <p class="testiPage-p">  Very relaxed, no pressure and on my timeline.</p> 
                      <hr class="testiPage-hr" />
                    </div>
                </div>

                <div class="row push-down">
                    <div class="col-sm-12 col-xs-12">  
                        <h6 class="testiPage-header-h6 text-center">
                            Melody W. (Hyannis, Massachusetts)
                        </h6>
                        
                        <div class="text-left">
                            <img class="testiPage-fivestar" src={fivestars} alt="" /> 
                        </div>     
                        <p class="testiPage-p">  It was a great experience.we had some hurdles along the way ..but they worked with usand we are happy how it all turned out
                          </p> 
                        <hr class="testiPage-hr" />
                      </div>
                  </div>

                  <div class="row push-down">
                      <div class="col-sm-12 col-xs-12">  
                          <h6 class="testiPage-header-h6">
                              Janenne M. (Yorktown, Virginia)
                          </h6>
                          
                          <div class="text-left">
                              <img class="testiPage-fivestar" src={fivestars} alt="" /> 
                          </div>     
                          <p class="testiPage-p">  The gentlemen I worked with were great! They made this process so easy and were very fair in their offer. I would not hesitate to recommend Home Vestors!!</p> 
                          <hr class="testiPage-hr" />
                        </div>
                    </div>
                    
                    <div class="row push-down">
                        <div class="col-sm-12 col-xs-12">  
                            <h6 class="testiPage-header-h6">
                                Pierre Y. (Saint Louis, Missouri)
                            </h6>
                            
                            <div class="text-left">
                                <img class="testiPage-fivestar" src={fivestars} alt="" /> 
                            </div>     
                            <p class="testiPage-p">  My HomeVestors representative dealt with me in a fair and professional manner and bought my house when I needed to sell it quickly.</p> 
                            <hr class="testiPage-hr" />
                          </div>
                      </div>
                      
                      
                      <div class="row push-down">
                          <div class="col-sm-12 col-xs-12">  
                              <h6 class="testiPage-header-h6">
                                  Andrei B. (ARVADA, Colorado)
                              </h6>
                              
                              <div class="text-left">
                                  <img class="testiPage-fivestar" src={fivestars} alt="" /> 
                              </div>     
                              <p class="testiPage-p"> Thank you Ryan and Vivianne for helping me get red of an "Ugly House".It was an easy and painless process. </p> 
                              <hr class="testiPage-hr" />
                            </div>
                        </div>      
                        
                      

                         <div className="text-center">
                          <button type="submit" className="btn"  style={GetCashOfferbtnStyle} >
                            Get Cash Offer Now
                          </button>
                    </div> 



            
            </div>  
            {/* col end */}
            <div className="col-sm-5 col-xs-12 right-faq">  
              <h2 className="right-faq-h1 text-center"> Request a free, no obligation consultation.</h2>                
              <div className="row">
                <div className="col-sm-12 col-xs-12"> 
                  <BasicForm />

                </div>
              </div>
            </div>
          </div>
        </div>
      
          <PushDownSection>
          <Questions /> 
            <Footer />
          </PushDownSection>
      {/* <StyledComponent /> */}      

      </div>); 
}



export default HowItWorks; 