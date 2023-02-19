import React from 'react';
// import Headerr from './biopage/Headerr';
// import Main from './biopage/Main';
// import Footer from './biopage/Footer';

import Navbar from './airbnb/navbar';
import Hero from './airbnb/hero';
import Bottom from './airbnb/bottom';


export default function Headed() { //this becomes the Parent component, while these 3 components inside here become the child component
   return (
         <div className="body">
      <div>
       <Navbar/>
       <Hero/>
       <Bottom/>
    </div>
    </div>  
   )
}