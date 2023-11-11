import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-3xl text-white font-bold">
          Photo Viewer
        </Link>
        <ul className="text-xl flex items-center space-x-4">
          {/* <li>
            <Link
              to="/"
              className=" text-white hover:underline hover:text-blue-300"
            >
              Home
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
