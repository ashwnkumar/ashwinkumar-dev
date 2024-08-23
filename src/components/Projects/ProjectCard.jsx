import React from "react";

function ProjectCard({ title, image, desc, link, code }) {
  return (
    <div className="bg-custDark2 hover:scale-105 transition-all duration-500 max-w-96 rounded-2xl overflow-hidden">
      <img src={image} alt="" className="" />
      <p className="text-3xl font-bold px-5 py-3">{title}</p>
      <p className="text-xl text-gray-400 px-5">{desc}</p>
      <br />
      <div className="flex items-center space-x-5 px-5 mb-5">
        <a
          href={link}
          target="_blank"
          className=" border border-custPrimary px-3 py-2 text-custPrimary rounded-full hover:bg-custPrimary hover:text-custDark1 transition-all duration-500"
        >
          View Site
        </a>
        <a
          href={code}
          target="_blank"
          className=" border border-custPrimary px-3 py-2 text-custPrimary rounded-full hover:bg-custPrimary hover:text-custDark1 transition-all duration-500"
        >
          Source Code
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
