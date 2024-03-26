import WorkSlider from "../../components/WorkSlider";
import Bulb from "./../../components/Bulb";
import Circles from "./../../components/Circles";

// motion , fadIn
import { motion } from "framer-motion";
import { fadeIn } from "./../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ">
            <motion.h2
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Work <span className="text-accent">.</span>{" "}
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
            Step into my world of design and programming mastery. Explore projects where aesthetics blend seamlessly with functionality, creating impactful digital experiences. From sleek websites to innovative applications, each work showcases my dedication to crafting solutions that inspire and delight.   
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            {/* slider */}
            <WorkSlider />
          </motion.div>
        </div>

        <Bulb />
      </div>
    </div>
  );
};

export default Work;
