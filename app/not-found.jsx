import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "¯\\_(ツ)_/¯",
  description: "Designed and Developed by Fadad Oussama",
};

export default function NotFound() {
  return (
    <div className="caseNotFound text-textColor">
      <div className="flex flex-nowrap flex-col gap-y-6 justify-center items-center text-center">
        <div className="flex flex-nowrap flex-col text-accent text-base">
          <span>¯\_(ツ)_/¯</span>
          <span>This page is taking a nap.</span>
          <p className="text-base text-accent">But fear not, I&apos;m wide awake and ready for action!</p>
        </div>

        <Link href="/" className="group text-base">
          <div className="flex flex-nowrap flex-row items-center justify-center gap-x-2">
            <span>Return Home</span>
            <div className="transform group-hover:-rotate-45 transition-all duration-300">
              <ArrowRight size={18} strokeWidth={2} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
