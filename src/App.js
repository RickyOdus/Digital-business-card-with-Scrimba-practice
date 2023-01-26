// import Header from './Header';
// import Main from './Main';
// import Footer from './Footer';
// import Mainn from './BioPage/Mainn';
// import Navbar from './Biopage/Navbar';
// import Headerr from './biopage/Headerr';
// import Main from './biopage/Main';
// import Footer from './biopage/Footer';
import React from 'react';
import Site from './Site';

export default function Headed() { //this becomes the Parent component, while these 3 components inside here become the child component
//    return (
//          <div className="body">
//       <div>
//        {/* <Site/> */}
//        {/* <Mainn/> */}
//        {/* <Navbar/> */}
//        <Headerr/>
//        <Main/>
//        <Footer/>
//     </div>
//     </div>  
//    )
// }



    return (
       <div className="flex w-full text-blue-900 m-0 p-0 bg-gray-200">
       <div>
          <site/>
       </div>
       </div>  
      )
   }

