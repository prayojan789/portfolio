"use client";
import React from "react";
import Marquee from "../ui/marquee";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ReviewCard = ({
  title,
  link,
  thumbnail,
}: {
  title: string;
  link: string;
  thumbnail: string;
}) => {
  return (
    <Link href={link} className="flex flex-col items-center gap-2">
      <Image
        width="400"
        height="400"
        alt=""
        src={`/project/${thumbnail}.png`}
        className="w-auto h-60"
      />

      <p className="text-sm font-medium dark:text-white/40">{title}</p>
    </Link>
  );
};

const ProjectGrid = () => {
  const reviews = [
    {
      title: "P1",
      link: "",
      thumbnail: "",
    },
    
    {
      title: "P2",
      link: "",
      thumbnail: "",
    },

    {
      title: "P3",
      link: "",
      thumbnail: "",
    },

    {
      title: "P4",
      link: "",
      thumbnail: "",
    },

    {
      title: "P5",
      link: "",
      thumbnail: "",
    },

    {
      title: "P6",
      link: "",
      thumbnail: "",
    },
    
    {
      title: "P7",
      link: "",
      thumbnail: "",
    },
    {
      title: "P8",
      link: "",
      thumbnail: "",
    },
    {
      title: "P9",
      link: "",
      thumbnail: "",
    },
    {
      title: "P10",
      link: "",
      thumbnail: "",
    },
    {
      title: "P11",
      link: "",
      thumbnail: "",
    },
  ];
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  return (
    <div className="relative flex h-full w-full flex-col gap-10 items-center justify-center overflow-hidden rounded-lg bg-background py-20 md:shadow-xl">
      <Marquee pauseOnHover className="md:[--duration:50s] [--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="md:[--duration:50s] [--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
    </div>
  );
};

export default ProjectGrid;
