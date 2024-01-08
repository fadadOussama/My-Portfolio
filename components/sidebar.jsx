"use client";

import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Command, Home, Layers, Send, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <div className="fixed hidden lg:flex h-screen w-16 flex-col justify-center border-e border-secondaryHover bg-bgColor z-50">
        <ul className="flex flex-col gap-y-8 font-normal">
          <li>
            <Link href="/" className="flex justify-center items-center group">
              <TooltipProvider delayDuration="0">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Home
                      size={24}
                      strokeWidth={1.25}
                      className={cn(
                        "text-primary group-active:scale-125 transition-all duration-300",
                        pathname === "/" ? "text-textColor" : "group-hover:text-accent"
                      )}
                    />
                  </TooltipTrigger>

                  <TooltipContent side="right" sideOffset="1" className="border border-secondaryHover active:scale-125 transition-all duration-300">
                    <span>Home</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </li>

          <li>
            <Link href="/projects/fashion-shop" className="flex justify-center items-center group">
              <TooltipProvider delayDuration="0">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Command
                      size={24}
                      strokeWidth={1.25}
                      className={cn(
                        "text-primary group-active:scale-125 transition-all duration-300",
                        pathname.includes("/projects") ? "text-textColor" : "group-hover:text-accent"
                      )}
                    />
                  </TooltipTrigger>

                  <TooltipContent side="right" sideOffset="1" className="border border-secondaryHover active:scale-125 transition-all duration-300">
                    <span>Projects</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </li>

          <li>
            <Link href="/skills-software" className="flex justify-center items-center group">
              <TooltipProvider delayDuration="0">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Layers
                      size={24}
                      strokeWidth={1.25}
                      className={cn(
                        "text-primary group-active:scale-125 transition-all duration-300",
                        pathname === "/skills-software" ? "text-textColor" : "group-hover:text-accent"
                      )}
                    />
                  </TooltipTrigger>

                  <TooltipContent side="right" sideOffset="1" className="border border-secondaryHover active:scale-125 transition-all duration-300">
                    <span>Skills & Software</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </li>

          <li>
            <Link href="/about" className="flex justify-center items-center group">
              <TooltipProvider delayDuration="0">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <UserRound
                      size={24}
                      strokeWidth={1.25}
                      className={cn(
                        "text-primary group-active:scale-125 transition-all duration-300",
                        pathname === "/about" ? "text-textColor" : "group-hover:text-accent"
                      )}
                    />
                  </TooltipTrigger>

                  <TooltipContent side="right" sideOffset="1" className="border border-secondaryHover active:scale-125 transition-all duration-300">
                    <span>About</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </li>

          {/* <li>
            <Link href="/" className="flex justify-center items-center group">
              <TooltipProvider delayDuration="0">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Send
                      size={24}
                      strokeWidth={1.25}
                      className={cn(
                        "text-primary group-active:scale-125 transition-all duration-300",
                        pathname === "/contact" ? "text-textColor" : "group-hover:text-accent"
                      )}
                    />
                  </TooltipTrigger>

                  <TooltipContent side="right" sideOffset="1" className="border border-secondaryHover active:scale-125 transition-all duration-300">
                    <span>Contact</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </li> */}
        </ul>
      </div>

      <div className="fixed lg:hidden flex justify-center items-center bottom-0 left-0 right-0 h-16 border-t border-secondaryHover bg-bgColor z-50">
        <ul className="flex justify-around items-center font-normal mb:w-4/5 w-full">
          <li>
            <Link href="/" className="flex justify-center items-center">
              <Home
                size={24}
                strokeWidth={1.25}
                className={cn("text-primary active:scale-125 transition-all duration-300", pathname === "/" ? "text-textColor" : "hover:text-accent")}
              />
            </Link>
          </li>

          <li>
            <Link href="/projects/fashion-shop" className="flex justify-center items-center">
              <Command
                size={24}
                strokeWidth={1.25}
                className={cn(
                  "text-primary active:scale-125 transition-all duration-300",
                  pathname.includes("/projects") ? "text-textColor" : "hover:text-accent"
                )}
              />
            </Link>
          </li>

          <li>
            <Link href="/skills-software" className="flex justify-center items-center">
              <Layers
                size={24}
                strokeWidth={1.25}
                className={cn(
                  "text-primary active:scale-125 transition-all duration-300",
                  pathname === "/skills-software" ? "text-textColor" : "hover:text-accent"
                )}
              />
            </Link>
          </li>

          <li>
            <Link href="/about" className="flex justify-center items-center">
              <UserRound
                size={24}
                strokeWidth={1.25}
                className={cn(
                  "text-primary active:scale-125 transition-all duration-300",
                  pathname === "/about" ? "text-textColor" : "hover:text-accent"
                )}
              />
            </Link>
          </li>

          {/* <li>
            <Link href="/" className="flex justify-center items-center">
              <Send
                size={24}
                strokeWidth={1.25}
                className={cn(
                  "text-primary active:scale-125 transition-all duration-300",
                  pathname === "/contact" ? "text-textColor" : "hover:text-accent"
                )}
              />
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  );
}
