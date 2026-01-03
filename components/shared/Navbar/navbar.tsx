import Link from "next/link";
import NavbarItems from "./navbaritems";
import MobileNav from "./mobilenav";

const Navbar = () => {
  return (
    <nav className="p-5 border-b sticky top-0 z-50 bg-primary-foreground">
      <div className="flex justify-between items-center ">
        <Link href={"/"}>
          <h1 className="bg-gradient-to-r from-red-600 to-purple-400 inline-block text-transparent bg-clip-text text-2xl">
            {`<ℙ𝕣𝕒𝕪𝕠𝕛𝕒𝕟 ℙ𝕦𝕣𝕚 />`}
          </h1>
        </Link>

        <div className="lg:flex hidden ">
          <NavbarItems />
        </div>

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
