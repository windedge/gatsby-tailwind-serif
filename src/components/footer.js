import React from "react";
import { Link } from "gatsby";
import cx from "classnames";

const Footer = ({ className, ...props }) => {
  className = cx(
    "w-full px-8 py-4 text-white bg-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center",
    className
  );
  return (
    <>
      <div className={className} {...props}>
        <div className="flex-initial text-xl font-semibold">
          Din Tannlege Horten Tannhelse{" "}
        </div>
        <div>
          <ul className="flex flex-col md:flex-row text-sm -mx-3 font-medium">
            <li className="mx-3">
              <Link to="/">Hjem</Link>
            </li>
            <li className="mx-3">
              <Link to="/contact">Kontakt oss</Link>
            </li>
            <li className="mx-3">©2019 Horten Tannhelse AS</li>
          </ul>
        </div>
      </div>

      <div className="w-full px-8 py-2 text-white text-xs font-light bg-black flex flex-col sm:flex-row justify-between items-start md:items-center">
        <div>
          <strong className="font-bold">Tel: </strong>
          33 04 11 47
          <strong className="ml-3 font-bold">Adresse: </strong>
          Harald Pedersensgt.9, 3182 Horten, Norge
        </div>
        <div>
          <Link to="/" className="hover:underline">
            tann-legen.no
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
