import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "./../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <ParticlesContainer />
      <div className="w-full h-full bg-gradient-to-t from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto ">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            I'm <span className="text-accent">Mohamed Moumen</span> 
            <br /> {" "}
            
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 xl:mb-16 mb-16"
          >
          Junior website developer and creative designer and email marketer with i passion for creating engaging digital experiences.          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center xl:hidden relative "
          >
            <ProjectsBtn />
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex z-50"
          >
            <ProjectsBtn />
          </motion.div>
        </div>

        {/* image */}
        <div className="w-[1200px] h-full absolute right-0 bottom-0 ">
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 "></div>
          {/* Particles */}

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[500px] max-h-[570px] absolute -bottom-32 lg:bottom-0 lg:right-[13%]  "
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
