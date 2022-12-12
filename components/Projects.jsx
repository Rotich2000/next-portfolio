import Image from "next/image";
import Link from "next/link";
import React from "react";
import Airbnb from "../public/assets/projects/airbnb.png";
import Netflix from "../public/assets/projects/netflix.png";
import Sushi from "../public/assets/projects/sushi.png";
import Fitness from "../public/assets/projects/fitness.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 capitalize">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Airbnb"
            language="Next JS"
            backgroundImg={Airbnb}
            projectUrl="/property"
          />
           <ProjectItem
            title="Netflix Clone"
            language="React JS"
            backgroundImg={Netflix}
            projectUrl="/netflix"
          />
           <ProjectItem
            title="Sushi"
            language="Vanilla JS"
            backgroundImg={Sushi}
            projectUrl="/sushi"
          />
           <ProjectItem
            title="GYM"
            language="HTML & CSS"
            backgroundImg={Fitness}
            projectUrl="/gym"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
