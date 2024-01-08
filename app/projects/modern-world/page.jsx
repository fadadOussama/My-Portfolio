"use client";

import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_LEFT_ANIMATION_VARIANTS,
  FADE_OPACITY_ANIMATION_VARIANTS,
  FADE_RIGHT_ANIMATION_VARIANTS,
} from "@/anim/revealAnim";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

export default function ModernWorldPage() {
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
            delayChildren: 0.1,
          },
        },
      }}
      className="w-full flex flex-col flex-nowrap gap-y-10 items-center justify-start"
    >
      <div className="w-full flex flex-col flex-nowrap justify-center items-center gap-y-4">
        <div className="w-full flex flex-col flex-nowrap justify-center items-center gap-y-2">
          <motion.h1 variants={FADE_DOWN_ANIMATION_VARIANTS} className="text-[22px]">
            Modern World
          </motion.h1>
          <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS} className="text-lg text-accent text-center">
            Landing Page Website
          </motion.p>
        </div>

        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="flex items-center gap-x-4 pb-3">
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
            <a href="https://modern-world.vercel.app/" target="_blank" className="w-full">
              <Button className="w-full" variant="default">
                <div className="flex justify-center items-center gap-x-2">
                  Live Demo
                  <ExternalLink size={18} strokeWidth={1.25} />
                </div>
              </Button>
            </a>
          </motion.div>

          <motion.div variants={FADE_OPACITY_ANIMATION_VARIANTS} className="text-accent text-sm">
            <span>or</span>
          </motion.div>

          <motion.div className="w-full" variants={FADE_RIGHT_ANIMATION_VARIANTS}>
            <a href="https://github.com/fadadOussama/modernWorld" target="_blank" className="w-full">
              <Button className="w-full" variant="secondary">
                <div className="flex justify-center items-center gap-x-2">
                  Source Code
                  <Code2 size={18} strokeWidth={1.25} />
                </div>
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative flex flex-col flex-nowrap gap-y-10 justify-start items-center w-full">
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative w-full h-[400px]">
          <Image
            src="/modernMock.png"
            alt="mockup"
            fill
            className="object-contain"
            sizes="(min-width: 1040px) 540px, (min-width: 820px) 60vw, 92vw"
            priority
          />
        </motion.div>

        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="text-left text-accent">
          Welcome to Modern World – an immersive digital experience that transcends the boundaries of conventional design. Our visually{" "}
          <span className="text-textColor">stunning landing page</span> is a curated showcase of contemporary buildings and architecture, where each
          pixel is meticulously crafted to celebrate the epitome of <span className="text-textColor">modern design</span>.
          <p>
            <br />
          </p>
          As you embark on this digital journey, be prepared to be captivated by the sleek and modern user interface that awaits. The clean lines,
          intuitive navigation, and carefully <span className="text-textColor">selected color palette</span> create a sophisticated backdrop for your
          exploration. Our commitment to a seamless user experience is evident through the integration of{" "}
          <span className="text-textColor">swipers and animations</span>, providing you with a fluid and captivating journey through the world of
          modern design excellence.
        </motion.div>
      </div>

      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative w-full mt-28">
        <div className="pt-2 lg:pb-0 mb:pb-10 w-full text-center">
          <span className="text-accent text-sm">&copy; {currentYear} Fadad Oussama</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
