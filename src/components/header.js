import React, { useState } from "react";
import { Link } from "gatsby";
import cx from "classnames";
import logo from "../images/logo.svg";

const StyledLink = ({ className, ...props }) => {
  className = cx(className);
  return (
    <Link className={className} {...props}>
      {props.children}
    </Link>
  );
};

const HeaderLink = ({ className, children, ...props }) => {
  className = cx(
    "w-full md:w-auto py-2 md:px-1 -mb-1 text-sm font-medium uppercase hover:text-indigo-500 border-transparent border-b-4 md:hover:border-indigo-600 relative",
    className
  );
  return (
    <div className="flex px-1">
      <Link
        className={className}
        {...props}
        activeClassName="md:border-indigo-600"
      >
        {children}
      </Link>
    </div>
  );
};

const Header = ({ className, ...props }) => {
  let [isExpanded, toggleExpansion] = useState(false);

  className = cx("w-full shadow-md", className);
  return (
    <div className={className} {...props}>
      <div className="flex flex-wrap flex-row items-start md:items-center justify-between px-6 md:px-10 lg:px-24 text-indigo-700">
        <div className="my-2">
          <Link to="/">
            <img className="w-3/5" alt="Figurit Homepage" src={logo} />
          </Link>
        </div>

        <button
          className="block relative md:hidden border border-indigo-700 my-2 px-3 py-2"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full md:w-auto flex md:flex flex-col md:flex-row justify-center md:justify-end items-stretch md:items-center py-1`}
        >
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/services">Services</HeaderLink>
          <HeaderLink to="/team">Team</HeaderLink>
          <HeaderLink to="/testimonials">Testimonials</HeaderLink>
          <HeaderLink to="/contact">Contact</HeaderLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
