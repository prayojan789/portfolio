"use client";
import { SheetClose } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/project",
    title: "Project",
  },
  {
    link: "/contact",
    title: "Contact",
  },
];

const NavbarItems = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center text-lg">
      {links.map((link) => (
        <Link
          href={link.link}
          key={link.title}
          className={`border-b-2 p-3 border-transparent  ${
            pathname === link.link
              ? "  bg-gradient-to-r from-red-600 to-purple-400 inline-block text-transparent bg-clip-text   "
              : " hover:border-white duration-300 transition-all ease-linear"
          }  `}
        >
          {link.title}
        </Link>
      ))}

      <Link
        href={
          ""
        }
        target="_blank"
      >
        <button className="p-[3px] relative rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 rounded-full" />
          <div className="px-8 py-2  bg-black rounded-full  relative group transition duration-200 text-white hover:bg-transparent">
            Resume
          </div>
        </button>
      </Link>
    </div>
  );
};

export default NavbarItems;
