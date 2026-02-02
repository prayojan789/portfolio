import { Button } from "@/components/ui/button";
import { Facebook, Github, Instagram, Linkedin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Homestarter = () => {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 justify-items-center md:p-28 mt-[-50px]">
      <div className="flex gap-10 flex-col place-self-center pt-10 ">
        <h1 className="bg-gradient-to-r from-red-600 to-purple-400 text-transparent bg-clip-text md:text-6xl text-5xl font-bold leading-tight xl:h-20 ">
          Prayojan Puri
        </h1>
        <p className="md:text-3xl text-2xl text-primary/60">
         ➡️ Someone who is genuinely enthusiastic about building innovative and meaningful technology solutions.
        </p>
        <div className="flex gap-6 items-center">
          <Link href={"https://github.com/prayojan789"} target="_blank">
            <Button size={"icon"} className="rounded-full ">
              <Github />
            </Button>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/prayojanpuri/"}
            target="_blank"
          >
            <Button size={"icon"} className="rounded-full ">
              <Linkedin className="text-blue-400" />
            </Button>
          </Link>
          <Link href={"https://www.facebook.com/prayojan7952"} target="_blank">
            <Button size={"icon"} className="rounded-full">
              <Facebook className="text-blue-800" />
            </Button>
          </Link>
          <Link href={"https://www.instagram.com/pra__yo__jan/"} target="_blank">
            <Button size={"icon"} className="rounded-full">
              <Instagram className="text-red-500" />
            </Button>
          </Link>
        </div>
        <div>
          <Link href={"https://github.com/prayojan789"} target="_blank">
            <Button
              variant={"shimmer"}
              size={"lg"}
              className="rounded-full h-14"
            >
              <div className=" gap-3 flex items-center">
                <Star className="text-red-600" />
                Star Me on Github
              </div>
            </Button>
          </Link>
        </div>
      </div>

      <div className="rounded-full">
        <Image
          src={"/images/prayojan.jpg"}
          alt="Prayojan Image"
          className="rounded-full max-md:h-96 max-md:w-96 max-sm:h-70 max-sm:w-80"
          height={400}
          width={400}
          priority
        />
      </div>
    </div>
  );
};

export default Homestarter;
