"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function ProjectsNav() {
  const pathname = usePathname();
  const [status, setStatus] = useState(false);

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "tween" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {},
      }}
      className="w-full"
    >
      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="hidden w-full mb:grid grid-cols-3 h-10 justify-center items-center p-1 bg-secondary rounded-md"
      >
        <Link
          className={cn(
            "flex justify-center items-center px-3 py-1.5  rounded-md text-textColor text-sm outline-none",
            pathname === "/projects/fashion-shop" ? "bg-bgColor text-textColor" : "text-accent"
          )}
          href="/projects/fashion-shop"
        >
          Fashion Shop
        </Link>

        <Link
          className={cn(
            "flex justify-center items-center px-3 py-1.5  rounded-md text-textColor text-sm outline-none",
            pathname === "/projects/freelancer-dash" ? "bg-bgColor text-textColor" : "text-accent"
          )}
          href="/projects/freelancer-dash"
        >
          Freelancer Dash
        </Link>

        <Link
          className={cn(
            "flex justify-center items-center px-3 py-1.5  rounded-md text-textColor text-sm outline-none",
            pathname === "/projects/modern-world" ? "bg-bgColor text-textColor" : "text-accent"
          )}
          href="/projects/modern-world"
        >
          Modern World
        </Link>
      </motion.div>

      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="mb:hidden w-full fixed top-0 right-0 h-16 z-50 flex flex-row flex-nowrap justify-between items-center py-1 px-4 bg-bgColor border border-secondaryHover"
      >
        <div>
          <span className="text-sm">Projects</span>
        </div>

        <Sheet open={status} onOpenChange={setStatus}>
          <SheetTrigger className="outline-none">
            <Menu size={24} strokeWidth={1.25} className={cn("text-primary active:scale-125 transition-all duration-300 hover:text-textColor")} />
          </SheetTrigger>

          <SheetContent side="top">
            <div className="flex flex-col flex-nowrap items-center py-4 gap-y-6">
              <Link href="/projects/fashion-shop" className="block w-full" onClick={() => setStatus(false)}>
                <div
                  className={cn(
                    "w-full cursor-pointer group flex flex-row flex-nowrap justify-between items-center p-4 rounded-md",
                    pathname === "/projects/fashion-shop" ? "bg-secondaryHover" : "bg-secondary"
                  )}
                >
                  <div>
                    <h3 className="text-textColor text-base">Fashion Shop</h3>
                    <p className="text-accent text-sm">Loading Page Website</p>
                  </div>

                  <div
                    className={cn(
                      "transition-all duration-300",
                      pathname === "/projects/fashion-shop"
                        ? "text-textColor"
                        : "text-accent group-hover:-rotate-45 group-hover:text-textColor transform"
                    )}
                  >
                    {pathname === "/projects/fashion-shop" ? <Eye size={20} strokeWidth={1.5} /> : <ArrowRight size={20} strokeWidth={1.5} />}
                  </div>
                </div>
              </Link>

              <Link href="/projects/freelancer-dash" className="block w-full" onClick={() => setStatus(false)}>
                <div
                  className={cn(
                    "w-full cursor-pointer group flex flex-row flex-nowrap justify-between items-center p-4 rounded-md",
                    pathname === "/projects/freelancer-dash" ? "bg-secondaryHover" : "bg-secondary"
                  )}
                >
                  <div>
                    <h3 className="text-textColor text-base">Freelancer Dash</h3>
                    <p className="text-accent text-sm">Dashboard Website For Freelancers</p>
                  </div>

                  <div
                    className={cn(
                      "transition-all duration-300",
                      pathname === "/projects/freelancer-dash"
                        ? "text-textColor"
                        : "text-accent group-hover:-rotate-45 group-hover:text-textColor transform"
                    )}
                  >
                    {pathname === "/projects/freelancer-dash" ? <Eye size={20} strokeWidth={1.5} /> : <ArrowRight size={20} strokeWidth={1.5} />}
                  </div>
                </div>
              </Link>

              <Link href="/projects/modern-world" className="block w-full" onClick={() => setStatus(false)}>
                <div
                  className={cn(
                    "w-full cursor-pointer group flex flex-row flex-nowrap justify-between items-center p-4 rounded-md",
                    pathname === "/projects/modern-world" ? "bg-secondaryHover" : "bg-secondary"
                  )}
                >
                  <div>
                    <h3 className="text-textColor text-base">Modern World</h3>
                    <p className="text-accent text-sm">Landing Page Website</p>
                  </div>

                  <div
                    className={cn(
                      "transition-all duration-300",
                      pathname === "/projects/modern-world"
                        ? "text-textColor"
                        : "text-accent group-hover:-rotate-45 group-hover:text-textColor transform"
                    )}
                  >
                    {pathname === "/projects/modern-world" ? <Eye size={20} strokeWidth={1.5} /> : <ArrowRight size={20} strokeWidth={1.5} />}
                  </div>
                </div>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </motion.div>
    </motion.div>
  );
}
