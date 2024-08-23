import React from "react";

function About() {
  return (
    <>
      <div
        id="about"
        className="flex items-center justify-center text-4xl md:text-5xl bg-custDark1 text-custLight py-8 md:py-10"
      >
        <p>About Me</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly bg-custDark1 text-custLight text-2xl md:text-5xl py-8 md:py-10 space-y-8 md:space-y-0">
        <div className="flex items-center justify-center w-2/4 md:w-1/4">
          <img
            src="misc/profile.jpg"
            alt=""
            className="rounded-full border-y-8 border-custPrimary  md:w-auto md:h-auto hover:scale-105 duration-500 transition-all"
          />
        </div>
        <div className="w-full md:w-1/2 p-5 text-lg md:text-2xl">
          <p>
            I'm Ashwin, a motivated and detail-oriented Computer Engineering
            Graduate with a knack for developing visually pleasing web
            interfaces that adhere to UI Design principles.
          </p>
          <br />
          <p>
            I possess a strong foundation in HTML, CSS, Javascript along with
            foundational knowledge of ReactJS. With hands-on experience in using
            Figma to create wireframes and mockups, I excel at translating
            design concepts into functional, user-friendly web experiences.
          </p>
          <br />
          <p>
            I love listening to music, photography, reading, playing video
            games, watching movies, and cooking in my free time.
          </p>
          <br />
          <a
            href="/Resume.pdf"
            download
            className="border border-custPrimary text-custPrimary px-4 py-2 md:px-5 md:py-3 rounded-full text-lg md:text-xl hover:bg-custPrimary hover:text-custDark1 hover:scale-110 transition-all duration-500"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
