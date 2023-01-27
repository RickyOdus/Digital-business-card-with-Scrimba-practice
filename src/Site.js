import lainey from "./images/lainey.jpg";
import edufo from "./images/pen.svg";
import padlock from "./images/padlock.png";
import barcode from "./images/barcode.png";
import location from "./images/location.png";
import printer from "./images/printer.png";
import willie from "./images/willie.jpg";
import calendar from "./images/calendar.jpg";
import seats from "./images/seats.png";

export default function Site(){
    return (
        <div>
  <img className="border border border-gray-100 h-48" src={lainey} width="1500px" alt= ""/> 
 
 
  <div className="flex flex-col">
  <p className="text-sm font-bold flex pt-3 pl-1 underline">← Back to Order History</p>
  <span className="text-black font-extrabold text-lg pl-1 pt-1">Order for: </span>
  <p className="text-2xl font-extrabold flex text-center mt-2 bg-gradient-to-b from-orange-500 to-black rounded-lg text-white">LAINEY WILSON PRESENTS COUNTRY WITH A FLARE TOUR</p>
  <p className="text-sm font-extrabold text-center underline">World Tour</p>
  <p className="text-base font-extrabold text-center text-black pt-1">(With Special Guests: Ben Chapman & MegMcRee)</p>
  </div>

  <div className="mt-1 text-xs">
        <hr className=" border border-gray-200" />
        <p className="text-gray-500 font-bold ml-1">Tickets for Dova Lucinda Peterson <span className="underline">#5172457356</span> purchased on Jan 25, 2023 @ $2055.75</p>
        <p className="text-gray-500 pt-2 font-bold italic ml-1"><span className="text-black">NB:</span> These tickets are transferable</p>
        <div className="flex flex-row items-center pt-2">
        <img className="mr-1 ml-1 pb-1 mt-1" src={calendar} width="15px" alt="" />
        <p className="text-gray-500 font-bold ml-1">Apr 29-30, 2023 at 11:58PM</p>
        </div>
        <div className="flex flex-row items-center pt-2">
          <img className="mr-1 ml-1 pb-1" src={location} width="12px" alt="" />
          <p className="text-gray-500 font-bold pb-1 underline">Hollywood Bowl, Los Angeles, CA.</p>
        </div>
        <div className="flex flex-row items-center pt-2">
        <img className="mr-1 ml-1" src={seats} width="20px" alt="" />
        <p className="text-gray-500 font-bold ml-1">Super Seat H, Row 22</p>
        </div>
        <hr className="border border-gray-200" />
      </div>
  
  <div className="flex flex-col items-center text-xl">
  <div className="bg-orange-500 w-3/4 rounded font-bold mt-2 flex flex-row items-center text-white justify-center">
<button className="p-2">Send Tickets to Print </button>
<img className=" ml-2 mt-1" src={printer} width="18px" alt= ""/>
  </div>

<button className="bg-white font-bold rounded w-3/4 mt-2 p-2 text-black border border-black justify-center mb-2">See chart for allocated seats</button>
<p className="text-black text-xs flex justify-right">Refund Policy: No refund on purchased tickets at the moment</p> 
  </div>

  <div className="flex flex-col justify-between items-center mt-3">
  <img className="" src={barcode} width="110px" alt= ""/>
  <p className="text-black mt-1 text-xs">Scan barcode to download tickets in PDF</p> 
<p className="text-xl font-bold">(6x) General admission</p> 
  </div>

  <hr className="border border-gray-300"/>
  <div className="flex flex-row">
  <p className="text-black text-xl font-bold pl-1">Contact Information</p>
  <div className=" flex flex-row items-center">
<img className="border-b border-black ml-40" src={edufo} width="12px" alt= ""/>
<p className="text-black text-normal text-gray-500 font-bold">Edit</p> 
        </div>
       </div> 

  <hr className=" mt-1 border border-gray-100"/>
        <footer>
<div className=" flex flex-row justify-center p-3 pt-1 bg-white">
        <img className="pt-1 h-4" src={padlock} width="10px" alt= ""/>
    <p className="text-black text-xs font-normal flex pl-1">seatgeek.com</p> 
    </div>
        </footer>
  <hr className="border shadow-inner border-gray-200"/>
        </div>
    )};


