import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className=" text-white p-4 shadow-lg flex justify-between items-center">
    
    <div >
        <img src="vite.svg" alt="logo" />
    </div>
      <div>
        <ul className="flex justify-center space-x-8 font-semibold px-10 py-5  mr-20">
          <li>
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/predict" className="hover:text-yellow-300">
              Predict
            </Link>
          </li>
          
          <li>
            <Link to="/chatbot" className="hover:text-yellow-300">
              ChatBot
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
