import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col space-y-10 md:space-y-16 items-center justify-center h-max bg-custDark1 py-10 md:py-20"
    >
      <div className="flex flex-col items-center justify-center text-custLight text-center">
        <p className="text-3xl md:text-5xl">Like What You See?</p>
        <p className="text-2xl md:text-4xl">Let's Connect!</p>
      </div>
      <div className="text-custLight flex flex-col items-center justify-center text-center">
        <p className="text-xl px-5 md:px-0 md:text-2xl">
          Feel free to reach out to me via any of the following mediums.
        </p>{" "}
        <br />
        <div className="flex flex-wrap items-center justify-center space-x-10 md:space-x-16 text-4xl md:text-5xl">
          <a
            className="hover:scale-110 md:hover:scale-125 transition-all duration-500"
            href="https://www.linkedin.com/in/ashwin-kumar-221160240/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className="hover:scale-110 md:hover:scale-125 transition-all duration-500"
            href="https://www.instagram.com/ashwnkumar/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            className="hover:scale-110 md:hover:scale-125 transition-all duration-500"
            href="https://x.com/ashwnkumaar"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>

          <a
            className="hover:scale-110 md:hover:scale-125 transition-all duration-500"
            href="mailto:ashwin12kumar07@gmail.com?subject=Inquiry&body=Hello, I would like to get in touch with you."
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
