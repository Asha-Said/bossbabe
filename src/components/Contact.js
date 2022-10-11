import React from "react";
import {Link} from "react-router-dom";

function Contact() {
    return (
        <div>
            <h3 className="cont" >Contact</h3>
            <div className="conTact">
            <p className="links">
                <div>
                    <p className="contactInfo">Phone number:</p>
                    <Link to="+25478161892" >+25478161892</Link>
                </div>
                
                    <hr></hr>
                <div>
                    <p className="contactInfo">Email:</p>
                    <Link to="aisha.y.dahir@gmail.com">aisha.y.dahir@gmail.com</Link>
                    </div>
   
            </p>
            </div>
        </div>
      
      
    );
  }
  
  export default Contact;