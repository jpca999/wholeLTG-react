import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 

const PageOne = () =>{
        return <div> 
        Page one 
        <Link to="/page2">  Navigate to page 2 </Link>
    </div>

}
export default PageOne; 