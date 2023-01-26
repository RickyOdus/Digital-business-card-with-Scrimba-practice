import passport from "../images/passport.jpg";
export default function Headerr() {
  return (
    <div>
      <img src="{passport}" width="1500px" alt="" />
      <div className="profile">
        <h1 className="Name">Odusanya Raphael</h1>
        <h3 className="text-gray-500">Front-end Developer</h3>
        <h4 className="text-gray-500 text-sm mt-3">www.yettobecreated.com</h4>
      </div>
      <div className="EL">
        {/* it's working actually.. the issue is that you added quotes ""  around the curly braces {}.. you shouldn't do that*/}
        <img src={passport} width="1500px" alt="" />
        <button className="rounded bg-white px-6 py-1 mb-1 mr-4 hover:text-black">
          Email
        </button>
        {/* <img src="{LinkedIn}" width="1500px" alt="" /> */}
        <button className="rounded bg-white px-3 py-1 mb-1 ml-4 hover:text-black">
          LinkedIn
        </button>
      </div>
    </div>
  );
}
