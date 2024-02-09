import { GeistSans } from "geist/font/sans";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";
import Sidebar from "@/components/sidebar";

export const metadata = {
  title: "Fadad Oussama - Frontend Developer",
  description: "Hi I'm Oussama welcome to my portfolio! I'm a frontend developer with a particular focus on the Next.js/React stack.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body className={`${GeistSans.className} bg-bgColor`}>
        {children}
        <NextTopLoader color="#E2E2E2" height={1} showSpinner={false} zIndex={9999} />
        <Sidebar />
      </body>
    </html>
  );
}
