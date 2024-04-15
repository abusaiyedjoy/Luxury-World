import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink to="/">
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to="/">
        <li>
          <a>About</a>
        </li>
      </NavLink>
      <NavLink to="/">
        <li>
          <a>Blog</a>
        </li>
      </NavLink>
    </>
  );

  const {LogOut, user}=useAuth();

  return (
    <div className="flex justify-between items-center w-full bg-transparent p-2 absolute z-10">
      <div className="navbar text-white">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >{navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-3xl font-bold">Luxury World</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            {navLinks}
          </ul>
        </div>
        {
          user?.email? <div className="navbar-end">
          <Link onClick={LogOut} className="btn text-white">LogOut</Link>
        </div>
        :<div className="navbar-end">
        <Link to='/login' className="btn text-white">Login</Link>
      </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
