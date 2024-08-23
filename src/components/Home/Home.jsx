import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";

function Home() {
  const [typewrite] = useTypewriter({
    words: [
      "Front End Developer.",
      "Designer.",
      "Photographer.",
      "UI Developer.",
    ],
    loop: 0,
    delaySpeed: 1500,
    deleteSpeed: 50,
  });

  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center justify-center md:justify-around h-screen bg-custDark1 text-custLight p-5 md:p-10"
    >
      <div className="flex flex-col items-center md:items-start space-y-6 md:space-y-10 text-center md:text-left md:pr-10">
        <p className="text-xl md:text-3xl">
          <span className="block">Hello there, I'm</span>
          <span className="block text-4xl md:text-6xl mt-2">Ashwin Kumar,</span>
          <span className="block text-2xl md:text-4xl mt-2">
            a{" "}
            <span className="font-bold text-3xl md:text-5xl text-custPrimary">
              {typewrite}
              <Cursor cursorColor="white" cursorStyle="_" />
            </span>
          </span>
        </p>

        <p className="text-xl md:text-2xl text-gray-300">
          I design and develop web interfaces that run across platforms and
          devices.
        </p>
        <HashLink smooth to="#skills">
          <FontAwesomeIcon
            icon={faAnglesDown}
            className="text-4xl md:text-5xl text-custPrimary animate-bounce cursor-pointer"
          />
        </HashLink>
      </div>
      <div className="hidden md:block p-10"></div>
    </div>
  );
}

export default Home;
