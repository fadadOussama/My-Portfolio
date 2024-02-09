"use client";

import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_LEFT_ANIMATION_VARIANTS,
  FADE_OPACITY_ANIMATION_VARIANTS,
  FADE_RIGHT_ANIMATION_VARIANTS,
} from "@/anim/revealAnim";

import Image from "next/image";
import { useEffect, useState } from "react";
import profile from "../public/profile.png";
import { motion } from "framer-motion";
import { ArrowRight, Check, Copy, Github, Instagram, Linkedin, Mail, MessagesSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentYear, setCurrentYear] = useState("2023");
  const [buttonText, setButtonText] = useState("Copy email");

  // Handme Email Copy
  function handleEmailCopy() {
    navigator.clipboard.writeText("fadadoussama@gmail.com");
    setButtonText("Copied");

    setTimeout(() => {
      setButtonText("Copy email");
    }, 3000);
  }

  // Handle Current Time & date & year
  useEffect(() => {
    const updateClock = () => {
      const now = dayjs();
      const formattedTime = now.format("ddd HH:mm:ss A");
      setCurrentTime(formattedTime);
      setCurrentYear(now.year());
    };

    // Update time initially
    updateClock();

    // Update the clock every second
    const intervalId = setInterval(updateClock, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
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
      <div className="flex flex-col justify-center items-center gap-4 w-full">
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="mb-6">
          <p className="font-mono text-accent text-xs tracking-wider uppercase font-medium">{currentTime}</p>
        </motion.div>

        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative h-20 w-20">
          <Image src={profile} alt="profile" placeholder="blur" fill priority className="object-cover object-center rounded-full" />
        </motion.div>

        <div className="flex flex-col flex-nowrap items-center justify-center gap-4 w-full text-center">
          <div className="flex flex-col flex-nowrap justify-center items-center gap-y-2 w-full">
            <motion.h1 variants={FADE_DOWN_ANIMATION_VARIANTS} className="text-[22px]">
              Fadad Oussama
            </motion.h1>
            <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS} className="text-lg text-accent">
              Frontend Developer Based In Morocco{" "}
              <Image src="/flag.png" alt="flag" width={300} height={300} className="inline-block h-[18px] w-[18px]" />
            </motion.p>
          </div>

          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="flex flex-nowrap justify-center items-center gap-x-4 w-full">
            <div className="relative flex justify-center items-center rounded-full h-2 w-2 bg-green-400">
              <span className="animate-ping absolute h-3 w-3 rounded-full bg-green-400 opacity-50"></span>
            </div>

            <div>
              <p className="text-sm text-accent">Available for new opportunities</p>
            </div>
          </motion.div>
        </div>

        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="flex items-center gap-x-8 py-3">
          <a
            href="https://github.com/fadadOussama"
            target="_blank"
            className="cursor-pointer text-primary hover:text-textColor active:scale-125 transition-all duration-300"
          >
            <Github size={24} strokeWidth={1.25} />
          </a>

          <a
            href="https://www.linkedin.com/in/fadad-oussama-0b3a492a8"
            target="_blank"
            className="cursor-pointer text-primary hover:text-textColor active:scale-125 transition-all duration-300"
          >
            <Linkedin size={24} strokeWidth={1.25} />
          </a>

          <a
            href="https://www.instagram.com/oussamafadad/"
            target="_blank"
            className="cursor-pointer text-primary hover:text-textColor active:scale-125 transition-all duration-300"
          >
            <Instagram size={24} strokeWidth={1.25} />
          </a>
        </motion.div>

        <motion.div
          variants={{
            show: {
              transition: {
                staggerChildren: 0,
              },
            },
          }}
          className="flex mb:flex-row flex-col justify-center items-center gap-x-4 gap-y-2 mb:max-w-[80%] max-w-full w-full"
        >
          <motion.div className="w-full" variants={FADE_LEFT_ANIMATION_VARIANTS}>
            <Button onClick={handleEmailCopy} disabled={buttonText === "Copied" && true} className="w-full" variant="default">
              <div className="flex justify-center items-center gap-x-2">
                {buttonText}
                {buttonText === "Copy email" ? <Copy size={18} strokeWidth={1.25} /> : <Check size={18} strokeWidth={1.25} />}
              </div>
            </Button>
          </motion.div>

          <motion.div variants={FADE_OPACITY_ANIMATION_VARIANTS} className="text-accent text-sm">
            <span>or</span>
          </motion.div>

          <motion.div className="w-full" variants={FADE_RIGHT_ANIMATION_VARIANTS}>
            <a href="mailto:fadadoussama@gmail.com?subject=Mail%20from%20website" target="_blank" className="w-full">
              <Button className="w-full" variant="secondary">
                <div className="flex justify-center items-center gap-x-2">
                  Contact me
                  <Mail size={18} strokeWidth={1.25} />
                </div>
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div variants={FADE_OPACITY_ANIMATION_VARIANTS}>
          <div className="py-3">
            <p className="font-mono text-accent text-xs tracking-wider uppercase font-medium">CB, MA · 33.5810° N, 7.5241° W</p>
          </div>
        </motion.div>
      </div>

      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative flex flex-col flex-nowrap gap-4 justify-start items-start w-full">
        <div className="hidden mb:block absolute -left-24 top-0 z-10">
          <p className="text-accent text-sm">Projects</p>
        </div>

        <Link
          href="/projects/fashion-shop"
          className="relative w-full group border border-secondaryHover bg-secondary hover:bg-secondaryHover rounded-md transition-colors duration-300"
        >
          <div className="flex flex-col gap-y-4 justify-center p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-base">Fashion Shop</h3>
              <div className="text-accent transform group-hover:-rotate-45 group-hover:text-textColor transition-all duration-300">
                <ArrowRight size={20} strokeWidth={2} />
              </div>
            </div>

            <div>
              <p className="text-base text-accent">
                Fashion shop revolutionizes online fashion shopping with an intuitive interface, advanced filtering, and seamless cart management.
                Users can effortlessly refine searches, add or remove products, and choose sizes, all secured by a robust authentication system.
              </p>
            </div>

            <div className="flex items-center gap-x-4 mt-2">
              <div className="h-5 w-5">
                <svg viewBox="0 0 128 128">
                  <g fill="#61DAFB">
                    <circle cx="64" cy="64" r="11.4"></circle>
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                  </g>
                </svg>
              </div>

              <div className="w-5 h-5">
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#ffffff"
                    d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"
                  ></path>
                </svg>
              </div>

              <div className="w-5 h-5">
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#007acc"
                    d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"
                  ></path>
                </svg>
              </div>

              <div className="w-5 h-5">
                <svg viewBox="0 0 128 128">
                  <path
                    d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                    fill="#38b2ac"
                  ></path>
                </svg>
              </div>

              <div className="w-5 h-5">
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#f58220"
                    d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"
                  ></path>
                </svg>
              </div>

              <div className="h-5 w-5">
                <svg viewBox="0 0 199 197">
                  <path
                    d="M135.487 132.705C142.371 132.011 147.595 126.235 147.357 119.302C147.12 112.371 141.184 106.825 134.062 106.825H133.588C126.227 107.056 120.53 113.064 120.767 120.226C121.005 123.693 122.429 126.696 124.566 128.776C116.494 144.258 104.149 155.58 85.631 165.053C73.0482 171.523 59.991 173.834 46.9338 172.217C36.2502 170.83 27.9409 166.209 22.7171 158.583C15.1205 147.261 14.4085 135.015 20.8187 122.768C25.3297 113.988 32.4512 107.518 36.9622 104.283C36.0126 101.279 34.5879 96.1959 33.8759 92.4993C-0.548522 116.761 3.01293 149.572 13.459 165.053C21.2931 176.607 37.1998 183.77 54.768 183.77C59.5159 183.77 64.2637 183.308 69.0123 182.153C99.4009 176.376 122.43 158.815 135.487 132.705V132.705ZM177.271 104.052C159.228 83.4874 132.638 72.1654 102.25 72.1654H98.4513C96.3146 68.0063 91.8036 65.2331 86.8181 65.2331H86.343C78.9839 65.4643 73.2865 71.4717 73.5234 78.6353C73.7609 85.5669 79.6959 91.1127 86.8181 91.1127H87.2925C92.5156 90.8814 97.0266 87.6465 98.9257 83.2561H103.199C121.243 83.2561 138.336 88.3394 153.768 98.2755C165.638 105.901 174.185 115.837 178.933 127.852C182.968 137.557 182.731 147.03 178.457 155.118C171.81 167.364 160.652 174.065 145.933 174.065C136.436 174.065 127.415 171.292 122.667 169.212C120.055 171.523 115.307 175.22 111.983 177.531C122.192 182.152 132.638 184.694 142.609 184.694C165.4 184.694 182.257 172.447 188.667 160.201C195.551 146.799 195.076 123.693 177.271 104.052V104.052ZM56.6671 136.632C56.9047 143.564 62.8397 149.109 69.9619 149.109H70.4371C77.7968 148.879 83.4942 142.87 83.2567 135.708C83.0198 128.775 77.0841 123.23 69.9619 123.23H69.4875C69.0123 123.23 68.2996 123.23 67.8259 123.461C58.0919 107.748 54.056 90.6502 55.4807 72.1647C56.4296 58.3007 61.1782 46.2851 69.4875 36.349C76.3721 27.7996 89.6668 23.6405 98.6889 23.41C123.854 22.9475 134.537 53.4479 135.249 65.6948C138.336 66.3877 143.559 68.0056 147.12 69.161C144.271 31.7289 120.53 12.3192 97.7393 12.3192C76.3721 12.3192 56.6671 27.3386 48.8322 49.5208C37.9118 79.097 45.0339 107.518 58.3287 129.931C57.1423 131.548 56.4296 134.09 56.6671 136.632V136.632Z"
                    fill="#764ABC"
                  />
                </svg>
              </div>

              <div className="h-5 w-5">
                <svg viewBox="0 0 90 90">
                  <defs>
                    <linearGradient x1="84.775%" y1="-9.121%" x2="-40.08%" y2="116.867%" id="a">
                      <stop stopColor="#17CCFC" offset="0%" />
                      <stop stopColor="#5D31FF" offset="50%" />
                      <stop stopColor="#F35AFF" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fill="none">
                    <path
                      d="m59.468 9.877-8.961 9.002a1.773 1.773 0 0 1-2.18.262 21.247 21.247 0 0 0-23.187.755 21.418 21.418 0 0 0-5.33 5.355 21.536 21.536 0 0 0-.758 23.299 1.792 1.792 0 0 1-.262 2.183l-8.96 9.001a1.774 1.774 0 0 1-2.69-.196A37.6 37.6 0 0 1 .014 36.45a37.583 37.583 0 0 1 8.388-22.657 37.053 37.053 0 0 1 5.33-5.354A37.214 37.214 0 0 1 36.285.014 37.197 37.197 0 0 1 59.267 7.17a1.781 1.781 0 0 1 .722 1.307 1.79 1.79 0 0 1-.52 1.4Z"
                      fill="url(#a)"
                      transform="translate(8 8)"
                    />
                    <path
                      d="m67.46 73.09-8.962-9.002a1.774 1.774 0 0 0-2.18-.262 21.25 21.25 0 0 1-11.013 3.079 21.25 21.25 0 0 1-11.013-3.079 1.77 1.77 0 0 0-2.18.262l-8.96 9.002a1.784 1.784 0 0 0-.542 1.414 1.79 1.79 0 0 0 .737 1.322A37.2 37.2 0 0 0 45.3 83a37.2 37.2 0 0 0 21.952-7.174 1.781 1.781 0 0 0 .743-1.319 1.796 1.796 0 0 0-.535-1.417ZM45.324 56.194c5.887 0 10.66-4.795 10.66-10.71 0-5.914-4.773-10.708-10.66-10.708-5.888 0-10.662 4.794-10.662 10.709 0 5.914 4.774 10.709 10.662 10.709Z"
                      fill="#1F0256"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </Link>

        <Link
          href="/projects/freelancer-dash"
          className="relative w-full group border border-secondaryHover bg-secondary hover:bg-secondaryHover rounded-md transition-colors duration-300"
        >
          <div className="flex flex-col gap-y-4 justify-center p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-base">Freelancer Dash</h3>
              <div className="text-accent transform group-hover:-rotate-45 group-hover:text-textColor transition-all duration-300">
                <ArrowRight size={20} strokeWidth={2} />
              </div>
            </div>

            <div>
              <p className="text-base text-accent">
                Freelancer dash is a dynamic dashboard for freelancers, offering seamless task and project management with kanban organization and
                customizable calendar features. Clients table and projects section enable efficient CRUD operations and server-side project
                management. Real-time updates via dynamic cards and charts, with secure authentication for personalized access or guest exploration.
              </p>
            </div>

            <div className="flex items-center gap-x-4 mt-2">
              <div className="h-5 w-5">
                <svg viewBox="0 0 128 128">
                  <g fill="#61DAFB">
                    <circle cx="64" cy="64" r="11.4"></circle>
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                  </g>
                </svg>
              </div>

              <div className="w-5 h-5">
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#ffffff"
                    d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"
                  ></path>
                </svg>
              </div>

              <div className="w-5 h-5">
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#007acc"
                    d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"
                  ></path>
                </svg>
              </div>

              <div className="w-5 h-5">
                <svg viewBox="0 0 128 128">
                  <path
                    d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                    fill="#38b2ac"
                  ></path>
                </svg>
              </div>

              <div className="w-5 h-5">
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#f58220"
                    d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"
                  ></path>
                </svg>
              </div>

              <div className="h-5 w-5">
                <svg viewBox="0 0 90 90">
                  <defs>
                    <linearGradient x1="84.775%" y1="-9.121%" x2="-40.08%" y2="116.867%" id="a">
                      <stop stopColor="#17CCFC" offset="0%" />
                      <stop stopColor="#5D31FF" offset="50%" />
                      <stop stopColor="#F35AFF" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fill="none">
                    <path
                      d="m59.468 9.877-8.961 9.002a1.773 1.773 0 0 1-2.18.262 21.247 21.247 0 0 0-23.187.755 21.418 21.418 0 0 0-5.33 5.355 21.536 21.536 0 0 0-.758 23.299 1.792 1.792 0 0 1-.262 2.183l-8.96 9.001a1.774 1.774 0 0 1-2.69-.196A37.6 37.6 0 0 1 .014 36.45a37.583 37.583 0 0 1 8.388-22.657 37.053 37.053 0 0 1 5.33-5.354A37.214 37.214 0 0 1 36.285.014 37.197 37.197 0 0 1 59.267 7.17a1.781 1.781 0 0 1 .722 1.307 1.79 1.79 0 0 1-.52 1.4Z"
                      fill="url(#a)"
                      transform="translate(8 8)"
                    />
                    <path
                      d="m67.46 73.09-8.962-9.002a1.774 1.774 0 0 0-2.18-.262 21.25 21.25 0 0 1-11.013 3.079 21.25 21.25 0 0 1-11.013-3.079 1.77 1.77 0 0 0-2.18.262l-8.96 9.002a1.784 1.784 0 0 0-.542 1.414 1.79 1.79 0 0 0 .737 1.322A37.2 37.2 0 0 0 45.3 83a37.2 37.2 0 0 0 21.952-7.174 1.781 1.781 0 0 0 .743-1.319 1.796 1.796 0 0 0-.535-1.417ZM45.324 56.194c5.887 0 10.66-4.795 10.66-10.71 0-5.914-4.773-10.708-10.66-10.708-5.888 0-10.662 4.794-10.662 10.709 0 5.914 4.774 10.709 10.662 10.709Z"
                      fill="#1F0256"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </Link>

        <Link
          href="/projects/modern-world"
          className="relative w-full group border border-secondaryHover bg-secondary hover:bg-secondaryHover rounded-md transition-colors duration-300"
        >
          <div className="flex flex-col gap-y-4 justify-center p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-base">Modern World</h3>
              <div className="text-accent transform group-hover:-rotate-45 group-hover:text-textColor transition-all duration-300">
                <ArrowRight size={20} strokeWidth={2} />
              </div>
            </div>

            <div>
              <p className="text-base text-accent">
                Modern world is a visually stunning landing page featuring contemporary buildings and architectures. With a sleek modern UI, swipers,
                and animations, it delivers a seamless and engaging exploration of modern design excellence
              </p>
            </div>

            <div className="flex items-center gap-x-4 mt-2">
              <div className="h-5 w-5">
                <svg viewBox="0 0 128 128">
                  <g fill="#61DAFB">
                    <circle cx="64" cy="64" r="11.4"></circle>
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                  </g>
                </svg>
              </div>

              <div className="w-5 h-5">
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#ffffff"
                    d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"
                  ></path>
                </svg>
              </div>

              <div className="w-5 h-5">
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#007acc"
                    d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"
                  ></path>
                </svg>
              </div>

              <div className="w-5 h-5">
                <svg viewBox="0 0 128 128">
                  <path
                    d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                    fill="#38b2ac"
                  ></path>
                </svg>
              </div>

              <div className="w-5 h-5">
                <svg viewBox="3.7 3.7 43.6 43.6">
                  <path d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z" fill="#59529d" />
                  <path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4" />
                  <path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#bb4b96" />
                </svg>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/projects/fashion-shop" className="w-full group">
          <Button variant="default" className="w-full gap-x-2">
            <span className="">View all</span>
            <div className="text-accent transform group-hover:-rotate-45 group-hover:text-textColor transition-all duration-300">
              <ArrowRight size={18} strokeWidth={2} />
            </div>
          </Button>
        </Link>
      </motion.div>

      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative flex flex-col flex-nowrap gap-4 justify-start items-start w-full">
        <div className="grid mb:grid-cols-3 grid-cols-2 gap-4 w-full">
          <div className="hidden mb:block absolute -left-24 top-0 z-10">
            <p className="text-accent text-sm">Stack</p>
          </div>

          <div className="w-full h-[160px] flex flex-col gap-y-4 justify-center items-center bg-secondary hover:bg-secondaryHover border border-secondaryHover rounded-md transition-colors duration-300">
            <div className="h-11 w-11 ">
              <svg viewBox="0 0 128 128">
                <g fill="#61DAFB">
                  <circle cx="64" cy="64" r="11.4"></circle>
                  <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                </g>
              </svg>
            </div>

            <h3 className="text-sm">React</h3>
          </div>

          <div className="w-full h-[160px] flex flex-col gap-y-4 justify-center items-center bg-secondary hover:bg-secondaryHover border border-secondaryHover rounded-md transition-colors duration-300">
            <div className="h-11 w-11 ">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#E2E2E2"
                  d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"
                ></path>
              </svg>
            </div>

            <h3 className="text-sm">Next.js</h3>
          </div>

          <div className="w-full h-[160px] flex flex-col gap-y-4 justify-center items-center bg-secondary hover:bg-secondaryHover border border-secondaryHover rounded-md transition-colors duration-300">
            <div className="h-11 w-11 ">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#007acc"
                  d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"
                ></path>
              </svg>
            </div>

            <h3 className="text-sm">TypeScript</h3>
          </div>

          <div className="w-full h-[160px] flex flex-col gap-y-4 justify-center items-center bg-secondary hover:bg-secondaryHover border border-secondaryHover rounded-md transition-colors duration-300">
            <div className="h-11 w-11 ">
              <svg viewBox="0 0 128 128">
                <path
                  d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                  fill="#38b2ac"
                ></path>
              </svg>
            </div>

            <h3 className="text-sm">Tailwind CSS</h3>
          </div>

          <div className="w-full h-[160px] flex flex-col gap-y-4 justify-center items-center bg-secondary hover:bg-secondaryHover border border-secondaryHover rounded-md transition-colors duration-300">
            <div className="h-11 w-11 ">
              <svg viewBox="0 0 128 128">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#CB6699"
                  d="M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153a11.696 11.696 0 00-.354-1.014c-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896a10.384 10.384 0 002.691-3.199c1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888a3.701 3.701 0 00-.48 1.364 1.737 1.737 0 001.383 1.971 9.661 9.661 0 002.708.193c3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605a.869.869 0 00-.205.67c.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788a25.401 25.401 0 00-9.765 1.503c-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5a2.854 2.854 0 00-.786-.258c-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368a11.643 11.643 0 00-5.354.438c-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436a172.189 172.189 0 011.578-7.099c.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568a2.592 2.592 0 01-.757.654c-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091a39.478 39.478 0 01-9.765 2.083c-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125C68.756 18.179 64.588 17 60.286 17h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79a40.494 40.494 0 00-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zM54.303 70.98c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417a1.689 1.689 0 01-.283.334c-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054a6.27 6.27 0 011.595-.706c.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354a2.385 2.385 0 01.093-.721c.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z"
                ></path>
              </svg>
            </div>

            <h3 className="text-sm">Sass</h3>
          </div>

          <div className="w-full h-[160px] flex flex-col gap-y-4 justify-center items-center bg-secondary hover:bg-secondaryHover border border-secondaryHover rounded-md transition-colors duration-300">
            <div className="h-11 w-11">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#f58220"
                  d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"
                ></path>
              </svg>
            </div>

            <h3 className="text-sm">Firebase</h3>
          </div>

          <div className="w-full h-[160px] flex flex-col gap-y-4 justify-center items-center bg-secondary hover:bg-secondaryHover border border-secondaryHover rounded-md transition-colors duration-300">
            <div className="h-11 w-11">
              <svg viewBox="0 0 199 197">
                <path
                  d="M135.487 132.705C142.371 132.011 147.595 126.235 147.357 119.302C147.12 112.371 141.184 106.825 134.062 106.825H133.588C126.227 107.056 120.53 113.064 120.767 120.226C121.005 123.693 122.429 126.696 124.566 128.776C116.494 144.258 104.149 155.58 85.631 165.053C73.0482 171.523 59.991 173.834 46.9338 172.217C36.2502 170.83 27.9409 166.209 22.7171 158.583C15.1205 147.261 14.4085 135.015 20.8187 122.768C25.3297 113.988 32.4512 107.518 36.9622 104.283C36.0126 101.279 34.5879 96.1959 33.8759 92.4993C-0.548522 116.761 3.01293 149.572 13.459 165.053C21.2931 176.607 37.1998 183.77 54.768 183.77C59.5159 183.77 64.2637 183.308 69.0123 182.153C99.4009 176.376 122.43 158.815 135.487 132.705ZM177.271 104.052C159.228 83.4874 132.638 72.1654 102.25 72.1654H98.4513C96.3146 68.0063 91.8036 65.2331 86.8181 65.2331H86.343C78.9839 65.4643 73.2865 71.4717 73.5234 78.6353C73.7609 85.5669 79.6959 91.1126 86.8181 91.1126H87.2925C92.5156 90.8814 97.0266 87.6465 98.9257 83.2561H103.199C121.243 83.2561 138.336 88.3394 153.768 98.2755C165.638 105.901 174.185 115.837 178.933 127.852C182.969 137.557 182.731 147.03 178.457 155.118C171.81 167.364 160.652 174.065 145.933 174.065C136.436 174.065 127.415 171.292 122.667 169.212C120.055 171.523 115.307 175.22 111.983 177.531C122.192 182.152 132.638 184.694 142.609 184.694C165.4 184.694 182.257 172.447 188.667 160.201C195.551 146.799 195.076 123.693 177.271 104.052ZM56.6671 136.632C56.9047 143.564 62.8397 149.109 69.9619 149.109H70.4371C77.7968 148.879 83.4942 142.87 83.2567 135.708C83.0198 128.775 77.0841 123.23 69.9619 123.23H69.4875C69.0123 123.23 68.2996 123.23 67.8259 123.461C58.0919 107.748 54.056 90.6502 55.4807 72.1647C56.4296 58.3007 61.1782 46.2851 69.4875 36.349C76.3721 27.7996 89.6668 23.6405 98.6889 23.41C123.854 22.9475 134.537 53.4479 135.249 65.6948C138.336 66.3877 143.559 68.0056 147.12 69.161C144.271 31.7289 120.53 12.3192 97.7393 12.3192C76.3721 12.3192 56.6671 27.3386 48.8322 49.5208C37.9118 79.097 45.0339 107.518 58.3287 129.931C57.1423 131.548 56.4296 134.09 56.6671 136.632V136.632Z"
                  fill="#764ABC"
                />
              </svg>
            </div>

            <h3 className="text-sm">Redux Toolkit</h3>
          </div>

          <div className="w-full h-[160px] flex flex-col gap-y-4 justify-center items-center bg-secondary hover:bg-secondaryHover border border-secondaryHover rounded-md transition-colors duration-300">
            <div className="h-11 w-11">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#cb3837"
                  d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"
                ></path>
              </svg>
            </div>

            <h3 className="text-sm">Npm</h3>
          </div>

          <div className="w-full h-[160px] flex flex-col gap-y-4 justify-center items-center bg-secondary hover:bg-secondaryHover border border-secondaryHover rounded-md transition-colors duration-300">
            <div className="h-11 w-11">
              <svg viewBox="0 0 512 512">
                <path d="M256 34L512 477.41H0L256 34Z" fill="black" />
              </svg>
            </div>

            <h3 className="text-sm">Vercel</h3>
          </div>

          <Link
            href="/skills-software"
            className="mb:hidden w-full h-[160px] flex flex-col gap-y-4 justify-center items-center bg-secondary hover:bg-secondaryHover border border-secondaryHover rounded-md transition-colors duration-300"
          >
            <div className="text-accent transform -rotate-45">
              <ArrowRight size={44} strokeWidth={2} />
            </div>

            <h3 className="text-sm">View all</h3>
          </Link>
        </div>

        <Link href="/skills-software" className="hidden mb:block w-full group">
          <Button variant="default" className="w-full gap-x-2">
            <span className="">View all</span>
            <div className="text-accent transform group-hover:-rotate-45 group-hover:text-textColor transition-all duration-300">
              <ArrowRight size={18} strokeWidth={2} />
            </div>
          </Button>
        </Link>
      </motion.div>

      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative flex flex-col flex-nowrap gap-4 justify-start items-center w-full">
        <div className="text-accent">
          <MessagesSquare size={32} strokeWidth={1.25} />
        </div>

        <div className="flex flex-col flex-nowrap gap-2 justify-center items-center">
          <h1 className="text-lg text-center">Interested in working together ?</h1>

          <p className="text-center text-base text-accent">
            I&apos;m open to remote or on-site job opportunities, ready to contribute, learn, and grow. Connect with me on my Bento, where you can
            find all my relevant links in one place.
          </p>
        </div>

        <Link href="https://bento.me/fadadoussama" target="_blank" className="w-full group mt-2">
          <Button variant="default" className="w-full gap-x-2">
            <span className="">Bento</span>
            <div className="text-accent transform group-hover:-rotate-45 group-hover:text-textColor transition-all duration-300">
              <ArrowRight size={18} strokeWidth={2} />
            </div>
          </Button>
        </Link>
      </motion.div>

      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative w-full">
        <div className="pt-2 lg:pb-0 mb:pb-10 w-full text-center">
          <span className="text-accent text-sm">&copy; {currentYear} Fadad Oussama</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
