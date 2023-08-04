import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
      <p className="text-4xl text-center text-white my-8">Technologies We work on.</p>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 flex justify-center flex-col items-center' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="text-white">{technology.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SectionWrapper(Tech, "");
