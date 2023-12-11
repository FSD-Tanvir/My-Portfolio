import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineBook,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className=" bg-sky-400 text-white">
      <div className="navbar  container mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-9 sm:w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-white text-sky-400"
            >
              <li>
                <Link to="/">
                  <AiOutlineHome />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <AiOutlineInfoCircle />
                  About
                </Link>
              </li>
              <li>
                <Link to="/education">
                  <AiOutlineBook />
                  Education
                </Link>
              </li>
              <li>
                <Link to="/experience">
                  <AiOutlineUser />
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <AiOutlineProject />
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <AiOutlineMail />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <a className="text-xl sm:text-3xl">FSD Tanvir</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 ">
            <li className="cursor-pointer hover:bg-sky-600 px-2 py-1 rounded-lg">
              <Link to="/" className="flex items-center gap-1">
                <AiOutlineHome />
                Home
              </Link>
            </li>
            <li className="cursor-pointer hover:bg-sky-600 px-2 py-1 rounded-lg">
              <Link to="/about" className="flex items-center gap-1">
                <AiOutlineInfoCircle />
                About
              </Link>
            </li>
            <li className="cursor-pointer hover:bg-sky-600 px-2 py-1 rounded-lg">
              <Link to="/education" className="flex items-center gap-1">
                <AiOutlineBook />
                Education
              </Link>
            </li>
            <li className="cursor-pointer hover:bg-sky-600 px-2 py-1 rounded-lg">
              <Link to="/experience" className="flex items-center gap-1">
                <AiOutlineUser />
                Experience
              </Link>
            </li>
            <li className="cursor-pointer hover:bg-sky-600 px-2 py-1 rounded-lg">
              <Link to="/projects" className="flex items-center gap-1">
                <AiOutlineProject />
                Projects
              </Link>
            </li>
            <li className="cursor-pointer hover:bg-sky-600 px-2 py-1 rounded-lg">
              <Link to="/contact" className="flex items-center gap-1">
                <AiOutlineMail />
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={'/resume'} className="border-2 px-2 py-1 sm:px-4 sm:py-2  cursor-pointer  hover:bg-sky-600 rounded-full">
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
