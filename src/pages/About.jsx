import { motion } from "framer-motion";
import React from "react";

export const About = () => {
  const imageVariant = {
    offScreen: {
      y: 300,
      opacity: 0,
    },
    onScreen: {
      y: 5,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const textVariant = {
    offScreen: {
      x: 100,
      opacity: 0,
    },
    onScreen: {
      x: 5,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <section
      id="about"
      className="bg-white py-20 flex items-center justify-center overflow-hidden "
    >
      <motion.div
        initial="offScreen"
        whileInView="onScreen"
        viewport={{ once: true }}
        className="m-auto sm:w-[90%] md:w-[60%] grid xl:grid-cols-2 gap-10"
      >
        <motion.div
          variants={imageVariant}
          className="flex justify-center items-center"
        >
          <div className="relative z-50">
            <img
              className="w-full h-full rounded-xl h-full z-50 "
              src="/images/me1o1.png"
              alt=""
            />
            {/* <div className="rounded-full bg-blue-400 absolute w-[60px] h-[60px] top-0 z-0"></div>
            <div className="rounded-full bg-emerald-400 absolute w-[60px] h-[60px] top-0 right-0 z-0"></div>
            <div className="rounded-full bg-red-400 absolute w-[60px] h-[60px] bottom-0 right-0 z-0"></div>
            <div className="rounded-full bg-indigo-400 absolute w-[60px] h-[60px] bottom-0 left-0 z-0"></div> */}
          </div>
        </motion.div>
        <motion.div
          variants={textVariant}
          className="flex flex-col gap-5 sm:text-center xl:text-justify"
        >
          <h1 className="text-blue-400 font-bold">ABOUT ME 😉</h1>
          <h2 className="text-2xl text-slate-900 font-bold sm:text-center md:text-start">
            A dedicated Web Developer based in Quezon City, Philippines 📍
          </h2>
          <motion.p
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: true, amount: 0.8 }}
            className="opacity-60"
          >
            I am a graduate of Information Technology and a passionate Web
            Developer with a strong foundation in Php. I'm capable of
            creating engaging user interfaces that blend both aesthetics and
            functionality seamlessly. Beyond Software technologies, I possess
            expertise in Express.js, postgres, and Node.js, enabling me to
            design and develop full-stack applications that deliver robust and
            efficient user experiences. With a growing familiarity in,
            PHP, python, and Arduino C++, I am constantly expanding my skill set
            to craft dynamic and responsive digital solutions. I'm enthusiastic
            about tackling new challenges and contributing to innovative
            projects in the technology landscape.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};
