import React from 'react';
import {FaEnvelope, FaLinkedin} from 'react-icons/fa'
import passport from "../images/passport.jpg";
import linked from "../images/linkedin.png";
import email from "../images/mail.png";

export default function Headerr(){
return(
<div>
    <img className="h-80" src={passport} width="1350px" alt="" />
    <div className="profile">
    <h1 className="Name">Odusanya Raphael</h1>
    <h3 className="text-gray-500">Front-end Developer</h3>
    <h4 className="text-gray-500 text-sm">www.yettobecreated.com</h4>
    </div>
    
    <div className="EL">
        <div className="mail">
 <FaEnvelope color="black"/>
<button className="pl-3">Email</button>
        </div>

<div className="linked">
  <FaLinkedin color="white"/>
<button className="pl-3">LinkedIn</button>
</div>
    </div>
</div>
) }