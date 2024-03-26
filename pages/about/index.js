/* eslint-disable react/jsx-key */
// icons
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaDatabase, FaGitAlt, FaWordpress, FaFigma, FaPaperPlane, FaEnvelopeOpen } from "react-icons/fa";

import { SiNextdotjs, SiAdobephotoshop } from "react-icons/si";

import { AiFillAndroid  } from "react-icons/ai";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3Alt />,
          <FaJs />,
          <FaDatabase />,
          <FaBootstrap />,
          <FaWordpress />,
          
        ],
      },
      {
        title: "Mobile Development",
        icons: [
          <AiFillAndroid />,
          <FaGitAlt />,
      ],
      },
      {
        title: "Graphic Design",
        icons: [
          <FaFigma />,
          <SiAdobephotoshop />,
        ],
      },
      {
        title: "Email Marketing",
        icons: [
          <FaPaperPlane />,
          <FaEnvelopeOpen />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Email Marketing - YOOL EDUCATION",
        stage: "Fev 2024 -> CURRENT",
      },
      {
        title: "Email Marketing Specialist - ADSENTYA",
        stage: "Dec 2024 -> Fev 2024",
      },
      {
        title: "Graphic Designer - RANKUP MARKETING",
        stage: "Aug 2023 -> Oct 2023",
      },
      
      {
        title: "Mobile Application Developer",
        
        stage: "Jan 2023 -> Feb 2023",
      },
      {
        title: "Design / Technology - FIRST DRIVER",
        stage: "Jul 2022 -> Nov 2022",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Affiliate Marketing- Great Learning",
        stage: "2024",
      },
      {
        title: "Email Marketing- Great Learning",
        stage: "2024",
      },
      {
        title: "Android Application Development- Great Learning",
        stage: "2023",
      },
      {
        title: "Introduction to Microsoft Excel- Coursera",
        stage: "2023",
      },
      {
        title: "Build a free website with WordPress- Coursera",
        stage: "2023",
      },
      {
        title: "PHP for Beginners- Great Learning",
        stage: "2023",
      },
    ],
  },
];

import Circles from "../../components/Circles";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Image from "next/image";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[140px]"
      >
        <div className="hidden xl:flex xl:max-w-none">
          <Image
            src={`/avatar2.png`}
            width={300}
            height={678}
            alt=""
            className="translate-z-0 bulb "
          />
        </div>
        ;
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center ">
          {/* text */}
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xl:text-left"
          >
            I'm <span className="text-accent"> Developer </span>
            and <span className="text-accent"> Designer </span> and <span className="text-accent"> Mailer </span><span className="text-accent "> . </span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 xl:text-left px-2 xl:px-0"
          >
            I'm Mohamed Moumen, a versatile professional blending roles as a developer, designer, and email marketer, driven by a fervent passion for crafting captivating digital encounters. With a robust background in web development and Graphic design, I excel in shaping visually stunning and intuitive websites and applications. My adeptness in email marketing empowers me to orchestrate compelling campaigns that not only spark engagement but also foster conversions effectively.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-5 "
          >
            <div className=" flex flex-1 gap-x-6">
              {/* experince */}
              <div className="relative flex-1 after:w-[1px] items-center after:h-full after:bg-white/10 after:absolute after:top-0 after:left-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] mx-auto w-[100px]">
                  Years Of Experience
                </div>
              </div>
              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:left-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] mx-auto leading-[1.4] w-[100px]">
                  Finished Projects
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:left-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] mx-auto leading-[1.4] w-[100px]">
                  Email Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* counter */}

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-full after:bg-red-700  after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  className=" flex-1 flex flex-col md:flex-row max-w-max gap-x-2 text-white/60 items-center"
                  key={itemIndex}
                >
                  <div className="font-light md:mb-0"> {item.title}</div>
                  <div className="hidden md:flex ">-</div>
                  <div> {item.stage} </div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => (
                      <div
                        className="text-2xl hover:text-accent text-white"
                        key={itemIndex}
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
