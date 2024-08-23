import React from "react";
import skills from "./skills.json";

function Skills() {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center bg-custDark1 text-custLight p-10"
    >
      <p className="text-5xl mb-10">Skill Stack</p>

      <ul className="flex flex-wrap gap-10 justify-center text-xl">
        {skills &&
          skills.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center space-y-5 w-32 sm:w-40 md:w-48 lg:w-60"
            >
              <img
                src={item.src}
                alt=""
                className="hover:scale-110 transition-all duration-300"
              />
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                {item.title}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Skills;
