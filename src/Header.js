import edufold from "./images/logo192.png";
export default function Header(){
    return (
    <div>
    <header>
    <nav className="navbar">
      <img src={edufold} width="100px" alt= ""/> 
      <div className="">
      <ul className="navbar-ul"> 
        <li className="p-3 shadow-xl hover:border-b-2 border-blue-500">Pricing</li>
        <li className="p-3 shadow-xl hover:border-b-2 border-blue-500">About</li>
        <li className="p-3 shadow-xl hover:border-b-2 border-blue-500">Contact</li>
      </ul>
      </div>
    </nav>
    </header>
    </div>
    ) 
  }
  