import ContactDetail from "@/components/contact/ContactDetail";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

import React, { useRef } from "react";

const contactPage = () => {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-purple-600  text-center font-sans font-bold">
          Contact Me
        </h1>

        <p className="text-primary/60 text-lg md:text-xl max-w-lg mx-auto my-2 text-center relative z-10">
          {`If you want to know more about me or my work, or if you would just
          like to say hello, send me a message. I'd love to hear from you.`}
        </p>
        <ContactDetail />
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default contactPage;
