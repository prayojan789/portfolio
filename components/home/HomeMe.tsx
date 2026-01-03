import { Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

const HomeMe = () => {
  return (
    <div className="py-10">
      <h1 className="text-center md:text-7xl text-6xl">What I do?</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center mt-20 md:p-28">
        <div className="relative">
          <Image
            src={"/images/web.png"}
            alt="Website"
            width={700}
            height={700}
          />
          <div className="absolute bottom-10 left-10">
            <Image
              src={"/images/blue.png"}
              alt="Website"
              className="-z-10"
              width={600}
              height={600}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 ">
          <h1 className="bg-gradient-to-r from-red-600 to-purple-400 text-transparent bg-clip-text md:text-5xl text-4xl font-bold leading-tight ">
            Full Stack Development
          </h1>
          <div className="flex flex-col gap-5">
            <div className="flex gap-4">
              <Zap className="text-red-600 h-6 w-6 flex-shrink-0" />
              <h3 className="text-2xl">
                Building responsive website front end using React, Next.js
              </h3>
            </div>
            <div className="flex gap-4">
              <Zap className="text-red-600 h-6 w-6 flex-shrink-0" />
              <h3 className="text-2xl">
                Integrating libraries like redux toolkit, tailwind, multer and
                much more.
              </h3>
            </div>
            <div className="flex gap-4">
              <Zap className="text-red-600 h-6 w-6 flex-shrink-0" />
              <h3 className="text-2xl">
                Creating application backend in Node, Express & Nest.js
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center md:px-28">
        <div className="relative">
          <Image
            src={"/images/mobile.png"}
            alt="Mobile"
            width={500}
            height={500}
          />
          <div className="absolute bottom-0 left-10">
            <Image
              src={"/images/red.png"}
              alt="Red gradient"
              className="-scale-x-100"
              width={600}
              height={600}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 ">
          <h1 className="bg-gradient-to-r from-red-600 to-purple-400 text-transparent bg-clip-text md:text-5xl text-4xl font-bold leading-tight ">
            Mobile App Development
          </h1>
          <div className="flex flex-col gap-5">
            <div className="flex gap-4">
              <Zap className="text-red-600 h-6 w-6 flex-shrink-0" />
              <h3 className="text-2xl">
                Building and Optimizing mobile application using React Native
              </h3>
            </div>
            <div className="flex gap-4">
              <Zap className="text-red-600 h-6 w-6 flex-shrink-0" />
              <h3 className="text-2xl">
                Integrating Third-Party Dependencies, APIs and other libraries
                like redux toolkit, tailwind, etc.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMe;
