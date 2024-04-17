import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const navLinks = (
    <>
      <li className=" text-gray-50">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className=" text-gray-50">
        <NavLink to="/service">Service</NavLink>
      </li>
      <li className=" text-gray-50">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  const { LogOut, user } = useAuth();
  const handleSignOut = () => {
    LogOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-transparent z-50 justify-between my-4 absolute top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-50"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content font-semibold mx-2 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="lg:w-1/3 flex justify-start items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="flex-shrink-0 w-5 sm:w-7 h-5 sm:h-7 rounded-full text-gray-50"
            >
              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
            </svg>
          </div>
          <span className="btn btn-ghost text-xl sm:text-3xl text-gray-50 font-bold">
            Luxury World
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  font-semibold gap-4 px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1 btn-ghost btn-circle avatar text-gray-50">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL || "https://avatars.githubusercontent.com/u/153846355?v=4"} alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user && (
                <p className="font-semibold btn  mr-2 text-gray-50 bg-opacity-10">
                  {user.displayName || 'Name Not Found'}
                </p>
              )}
              <button
                className="btn rounded-xl text-white bg-opacity-10"
                onClick={handleSignOut}
              >
                LogOut
              </button>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn rounded-xl  text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
