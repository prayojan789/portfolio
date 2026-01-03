"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

interface AboutIconCardProps {
  title: string;
  icon: string;
}

export function AboutIconCard({ title, icon }: AboutIconCardProps) {
  return (
    <CardContainer className="cursor-pointer">
      <CardBody className="flex items-center justify-center group/card border border-black bg-primary-foreground  rounded-3xl p-2 h-20 w-52 gap-3">
        <CardItem translateZ="50" className="text-primary font-bold text-xl">
          {title}
        </CardItem>

        <CardItem translateZ="100">
          <Image
            src={`/icons/${icon}.svg`}
            height={40}
            width={40}
            alt="thumbnail"
            className={`${icon === "bootstrap" && "invert"} ${
              icon === "express" && "invert"
            }`}
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
