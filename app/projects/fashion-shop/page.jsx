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

export default function FashionShopPage() {
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
            Fashion Shop
          </motion.h1>
          <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS} className="text-lg text-accent text-center">
            E-commerce Website For Clothes
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
            <a href="https://fashionshop-web.vercel.app/" target="_blank" className="w-full">
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
            <a href="https://github.com/fadadOussama/fashionShop" target="_blank" className="w-full">
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
            src="/fashionMock.png"
            alt="mockup"
            fill
            className="object-contain"
            sizes="(min-width: 1040px) 540px, (min-width: 820px) 60vw, 92vw"
            priority
          />
        </motion.div>

        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="text-left text-accent">
          Fashion Shop is an <span className="text-textColor">e-commerce platform for online fashion shopping</span>. With its sleek and intuitive
          interface, the website is designed to deliver a seamless user experience.
          <p>
            <br />
          </p>
          It includes dedicated <span className="text-textColor">men and women sections</span>, each equipped with a powerful{" "}
          <span className="text-textColor">filtering system</span> that empowers users to precisely refine their{" "}
          <span className="text-textColor">search based on price range and categories</span>. The cart management system is seamlessly integrated,
          allowing users to effortlessly <span className="text-textColor">add products, remove products, and choose sizes</span>, even without signing
          in.
          <p>
            <br />
          </p>
          All user actions are securely stored in a <span className="text-textColor">user-specific database</span>, ensuring a continuous and
          personalized experience. The robust <span className="text-textColor">authentication system</span> enhances security and facilitates the
          smooth transfer of data, including cart items, to the <span className="text-textColor">user&apos;s account</span> upon signing in.
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
