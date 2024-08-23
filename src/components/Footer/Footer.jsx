import React from "react";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center border-t border-custDark2 text-custLight py-5 px-4 sm:px-6 md:px-10">
      <HashLink smooth to="#home">
        <img src="misc/site-logo.png" className="mb-3" alt="Site Logo" />
      </HashLink>
      <p className="text-sm sm:text-base md:text-lg text-center">
        Designed and Developed by yours truly. Built using{" "}
        <span className="text-custPrimary">React</span> and{" "}
        <span className="text-custPrimary">TailwindCSS</span>
      </p>
      <p className="text-sm sm:text-base md:text-lg text-center">
        Hosted using Google's <span className="text-custPrimary">Firebase</span>
      </p>
      <p className="text-xs sm:text-sm md:text-base text-center">
        &copy; All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
