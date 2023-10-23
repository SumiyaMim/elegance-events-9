/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    logOut(); 
    navigate('/login'); 
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-xs md:text-sm font-bold text-pink-600"
              : "text-xs md:text-sm font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/offerings"
          className={({ isActive }) =>
            isActive
              ? "text-xs md:text-sm font-bold text-pink-600"
              : "text-xs md:text-sm font-bold"
          }
        >
          Offerings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/packages"
          className={({ isActive }) =>
            isActive
              ? "text-xs md:text-sm font-bold text-pink-600"
              : "text-xs md:text-sm font-bold"
          }
        >
          Packages
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="shadow-md">
      <div className="navbar pl-3 md:pl-5 pr-8 lg:px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul className="menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <a className="normal-case text-base md:text-xl font-bold">
            Elegance Events
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center justify-center gap-4 font-medium text-sm menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu-sm dropdown-content mt-3 z-[1] p-4 shadow text-center bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="text-xs lg:text-sm font-bold hover:text-pink-600">
                    {user.displayName}
                  </button>
                </li>
                <li>
                  <button onClick={handleLogOut} className="text-xs lg:text-sm font-bold hover:text-pink-600">Log Out</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
                <button className="border-[1.5px] border-pink-600 hover:bg-pink-600 hover:text-white px-3 py-1 rounded-md font-bold text-xs md:text-sm">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
