import React from "react";
import { Heading } from "./Heading";
import StackIcon from "tech-stack-icons";

export const TechStack = () => {
  const stack = [
    // Core Technologies
    { title: "React Js", name: "reactjs" },
    { title: "Redux", name: "redux" },
    { title: "Javascript", name: "js" },
    { title: "PHP", name: "php" },
    { title: "Firebase", name: "firebase" },
    { title: "MongoDB", name: "mongodb" },
    { title: "MySQL", name: "mysql" },
    { title: "Git", name: "git" },
    { title: "Render", name: "render" },
    { title: "Netlify", name: "netlify2" },
    { title: "Next.js", name: "nextjs" },

    // UI/Styling Frameworks
    { title: "Material UI", name: "materialui" },
    { title: "Tailwind CSS", name: "tailwindcss" },
    { title: "Framer Motion", name: "framer" },
    { title: "Bootstrap", name: "bootstrap5" },
    { title: "HTML5", name: "html5" },
    { title: "CSS3", name: "css3" },
  ];

  return (
    <div>
      {/* Core Tech Stack */}
      <Heading as="h2" className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4">
        Core Technologies
      </Heading>
      <div className="flex flex-wrap gap-6">
        {stack.slice(0, 8).map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center">
              <StackIcon name={item.name} className="mr-2 mb-2" />
            </div>
            <span className="text-xs font-medium mt-1">{item.title}</span>
          </div>
        ))}
      </div>

      {/* UI/Styling Stack */}
      <Heading as="h2" className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4">
        UI/Styling Frameworks
      </Heading>
      <div className="flex flex-wrap gap-6 mt-6">
        {stack.slice(11, 18).map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center">
              <StackIcon name={item.name} className="mr-2 mb-2" />
            </div>
            <span className="text-xs font-medium mt-1">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
