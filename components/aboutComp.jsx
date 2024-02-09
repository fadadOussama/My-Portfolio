"use client";

import { FADE_DOWN_ANIMATION_VARIANTS } from "@/anim/revealAnim";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import about from "../public/about.jpg";

export default function AboutComp() {
  const [currentYear, setCurrentYear] = useState("2023");

  useEffect(() => {
    const updateClock = () => {
      const now = dayjs();
      setCurrentYear(now.year());
    };

    // Update time initially
    updateClock();
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="case text-textColor"
    >
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative w-full flex flex-nowrap flex-col items-center justify-center gap-y-1">
        <h1 className="text-[22px] text-textColor text-center">About Me</h1>
        <p className="text-lg text-accent text-center">A Few Things You Should Know.</p>
      </motion.div>

      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative w-full flex flex-nowrap flex-col gap-y-6 justify-center">
        <div className="hidden mb:block absolute -left-24 top-0 z-10">
          <p className="text-accent text-sm">Intro</p>
        </div>

        <div className="w-full relative mb:h-[600px] h-[400px]">
          <Image src={about} alt="about" placeholder="blur" fill priority className="rounded-md object-cover object-center" />
        </div>

        <div className="flex flex-nowrap flex-col gap-y-6 justify-center text-base">
          <p>
            Greetings 👋🏻 I&apos;m Fadad Oussama, a 22-year-old self-taught developer based in the lively city of Casablanca, Morocco{" "}
            <Image src="/flag.png" alt="flag" width={300} height={300} className="inline-block h-[18px] w-[18px]" />. My journey into the realm of
            programming began with a two years of formal education at Ista 🏫, but the real growth in my experience and skills as a developer began
            when I finished my two years at Ista and decided to embark on the path of self learning, this decision made me the developer I always
            dreamed of, because the path of self learning empowers me to confront challenges autonomously, fostering continuous growth through
            learning from mistakes and this exactly what sets great developers apart from their counterparts in the field.
          </p>

          <p>
            Embarking on a new chapter after two years of formal education at Ista 🏫, I decide to start from scratch and build a strong foundation in
            programming by exploring computer science to establish a solid foundation for my ongoing journey. As i later focused on the frontend path
            👨🏻‍💻 navigating through technologies, with a particular focus on those that significantly improve efficiency and boost productivity in my
            workflow.
            <br />
            <br />
            <span className="text-accent italic">
              As Isaac Asimov wisely said, &quot;Self-education is, I firmly believe, the only kind of education there is.&quot;
            </span>
          </p>

          <p>
            Presently, My primary focus lies in the Next.js/React stack ⚛️, a dynamic duo that empowers me to craft user interfaces with unparalleled
            dynamism and performance seamlessly.
          </p>

          <p>
            Outside the realm of development and learning, you&apos;ll find me immersed in one of two activities. I am either at the gym 🏋🏻‍♂️, dedicated
            to maintaining my physical well-being, or engaged in the world of chess ♟️, providing balance to my life.
          </p>
        </div>
      </motion.div>

      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative w-full mt-6">
        <div className="hidden mb:block absolute -left-24 top-0 z-10">
          <p className="text-accent text-sm">Education</p>
        </div>

        <div className="flex flex-nowrap flex-col mb:gap-y-2 gap-y-6 justify-center items-center text-base">
          <div className="flex flex-nowrap justify-center gap-x-8">
            <span className="text-accent font-mono">
              2019 <span className="hidden mb:inline-block">—</span> 2021
            </span>
            <p>Technician Specialized in Software Development</p>
          </div>

          <div className="flex flex-nowrap justify-center gap-x-8">
            <span className="text-accent font-mono">
              2021 <span className="hidden mb:inline-block">—</span> 2023
            </span>
            <p>Learning in Gammal Tech both with Self-learning</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative w-full mt-28">
        <div className="pt-2 lg:pb-0 mb:pb-10 w-full text-center">
          <span className="text-accent text-sm">&copy; {currentYear} Fadad Oussama</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
