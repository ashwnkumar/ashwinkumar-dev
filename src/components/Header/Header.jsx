import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="p-5 flex items-center justify-between md:justify-around border-b border-custDark2 sticky top-0 z-10 bg-custDark1 text-custLight">
        <HashLink smooth to="#home">
          <img src="misc/site-logo.png" alt="" />
        </HashLink>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="w-6 h-6"
            />
          </button>
        </div>

        <ul
          className={`text-xl flex-col md:flex md:flex-row items-center justify-evenly md:space-x-20 absolute md:relative top-16 left-0 right-0 md:top-auto md:left-auto md:right-auto bg-custDark1 md:bg-transparent transition-transform duration-300 ease-in-out
             ${isOpen ? "flex" : "hidden md:flex"}`}
        >
          <li className="border-b md:border-none border-custDark2 w-full md:w-auto  py-2 text-center">
            <HashLink smooth to="#skills" onClick={() => setIsOpen(false)}>
              skills
            </HashLink>
          </li>
          <li className="border-b md:border-none border-custDark2 w-full md:w-auto  py-2 text-center">
            <HashLink smooth to="#about" onClick={() => setIsOpen(false)}>
              about
            </HashLink>
          </li>
          <li className="border-b md:border-none border-custDark2 w-full md:w-auto  py-2 text-center">
            <HashLink smooth to="#projects" onClick={() => setIsOpen(false)}>
              projects
            </HashLink>
          </li>
          <li className="border-b md:border-none border-custDark2 w-full md:w-auto  py-2 text-center">
            <HashLink smooth to="#contact" onClick={() => setIsOpen(false)}>
              contact
            </HashLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
