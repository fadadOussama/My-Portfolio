import ProjectsNav from "@/components/projectsNav";

export const metadata = {
  title: "Projects - Fadad Oussama",
  description: "Designed and Developed by Fadad Oussama",
};

export default function ProjectsLayout({ children }) {
  return (
    <div className="case !pt-16 mb:!pt-10 text-textColor">
      <ProjectsNav />
      {children}
    </div>
  );
}
