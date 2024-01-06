import { NavLink } from "react-router-dom";
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
    <div className="bg-black text-white">
      <div className="navbar container mx-auto">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-white text-black"
            >
              <li>
                <NavLink to="/">
                  <AiOutlineHome />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <AiOutlineInfoCircle />
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/education">
                  <AiOutlineBook />
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink to="/experience">
                  <AiOutlineUser />
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects">
                  <AiOutlineProject />
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  <AiOutlineMail />
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="text-xl sm:text-3xl">
            FSD Tanvir
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6">
            <li className="cursor-pointer hover:bg-gray-500 px-2 py-1 rounded-lg">
              <NavLink to="/" className="flex items-center gap-1">
                <AiOutlineHome />
                Home
              </NavLink>
            </li>
            <li className="cursor-pointer hover:bg-gray-500 px-2 py-1 rounded-lg">
              <NavLink to="/about" className="flex items-center gap-1">
                <AiOutlineInfoCircle />
                About
              </NavLink>
            </li>
            <li className="cursor-pointer hover:bg-gray-500 px-2 py-1 rounded-lg">
              <NavLink to="/education" className="flex items-center gap-1">
                <AiOutlineBook />
                Education
              </NavLink>
            </li>
            <li className="cursor-pointer hover:bg-gray-500 px-2 py-1 rounded-lg">
              <NavLink to="/experience" className="flex items-center gap-1">
                <AiOutlineUser />
                Experience
              </NavLink>
            </li>
            <li className="cursor-pointer hover:bg-gray-500 px-2 py-1 rounded-lg">
              <NavLink to="/projects" className="flex items-center gap-1">
                <AiOutlineProject />
                Projects
              </NavLink>
            </li>
            <li className="cursor-pointer hover:bg-gray-500 px-2 py-1 rounded-lg">
              <NavLink to="/contact" className="flex items-center gap-1">
                <AiOutlineMail />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink
            className="border-2 px-2 py-1 sm:px-4 sm:py-2 cursor-pointer hover:bg-gray-500 rounded-full"
            to={
              "https://drive.google.com/file/d/1hBB_WDjROVfJMjny9U_bVxAGp8F0ixBa/view?usp=sharing"
            }
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
