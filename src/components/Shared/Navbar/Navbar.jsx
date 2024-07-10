import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";
const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      <li>
        <Link to={"/about"}>About Us</Link>
      </li>

      <li>
        <Link to={"/courses"}>Courses </Link>
      </li>
      <li>
        <a>Success Story</a>
      </li>
      <li>
        <a>Gallery</a>
      </li>
      <li>
        <a>Team</a>
      </li>
      <li>
        <a>Tutorials</a>
      </li>
      <li>
        <Link to={"/contact"}>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a>
            <img src={logo} className="w-52" alt="logo not found!" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn capitalize">Kids Programs</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
