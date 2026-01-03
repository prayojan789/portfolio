"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/image-slider";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ProjectImageSlider = () => {
  const images = [
    "/images/photo-2.jpg",
    "/images/photo-1.jpg",
    "/images/photo-3.jpg",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          <h1 className="bg-gradient-to-r from-red-600 to-purple-400 text-transparent bg-clip-text md:text-7xl text-6xl font-bold leading-tight xl:h-20 ">
            Projects
          </h1>

          <h3 className="max-w-2xl text-base md:text-3xl mt-8">
            My project makes use of vast variety of latest technology tools. I
            love to use new technologies to build projects.
          </h3>
        </motion.p>
        <Link href="https://github.com/prayojan789" target="_blank">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-10 mt-8">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              More Projects <ArrowRight />
            </span>
          </button>
        </Link>
      </motion.div>
    </ImagesSlider>
  );
};

export default ProjectImageSlider;
