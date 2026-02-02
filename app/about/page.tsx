import { AboutIconCard } from "@/components/about/AboutIconCard";
import IconCloud from "@/components/ui/icon-cloud";
import React from "react";

const tech = [
  {
    title: "CSS",
    icon: "css",
  },
  {
    title: "Express",
    icon: "express",
  },
  {
    title: "Git",
    icon: "git",
  },
  {
    title: "Html",
    icon: "html",
  },
  {
    title: "Javascript",
    icon: "javascript",
  },
  {
    title: "MongoDB",
    icon: "mongodb",
  },
  {
    title: "Node.js",
    icon: "nodejs",
  },
  {
    title: "Postman",
    icon: "postman",
  },
  {
    title: "React Native",
    icon: "react",
  },
  {
    title: "React",
    icon: "react",
  },
  {
    title: "Tailwind",
    icon: "tailwind",
  },
  {
    title: "Typescript",
    icon: "typescript",
  },
];

const slugs = [
  "typescript",
  "javascript",
  "tailwindcss",
  "bootstrap",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

const AboutPage = () => {
  return (
    <div className="py-10 max-w-7xl m-auto p-5">
      <div className="flex w-full justify-center">
        <h1 className="bg-gradient-to-r from-red-600 to-purple-400 text-transparent bg-clip-text md:text-7xl text-6xl font-bold leading-tight xl:h-20 ">
          About Me
        </h1>
      </div>
      <div className="py-10 flex flex-col gap-5">
        <h1 className="md:text-5xl text-4xl">A bit about me</h1>
        <h2 className="md:text-2xl text-xl text-primary/60">
          {`I am a passionate software engineering student who thrives on building end-to-end applications and systems that solve real-world problems. From crafting user-friendly 
          interfaces to architecting scalable backends, I enjoy every step of the development lifecycle. My work spans web development, AI-powered games, and system-level programming — all 
          driven by a commitment to sustainability, scalability, and impact. I believe in open-source values and continuously seek opportunities to contribute to meaningful, community-focused projects.`}
        </h2>
      </div>
      <div className="pt-10 flex flex-col gap-5">
        <h1 className="md:text-5xl text-4xl">Technologies and Tools</h1>
        <h2 className="md:text-2xl text-xl text-primary/60">
          {`Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.`}
        </h2>
      </div>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 ">
        {tech.map((tech) => (
          <AboutIconCard key={tech.title} title={tech.title} icon={tech.icon} />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
