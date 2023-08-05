import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import {  teams } from "../constants";//services,
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { TeamCard } from "./Cards/Cards";



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Our Team.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        We are a team of skilled software developers with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. We can collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {teams.map((team, index) => (
          // <ServiceCard key={service.title} index={index} {...service} />
          <TeamCard key={`project-${index}`} index={index} {...team} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
