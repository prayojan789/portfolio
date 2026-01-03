import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import MobileNavItems from "./movileitems";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className=" max-sm:min-w-full lg:hidden">
        <SheetHeader>
          <SheetTitle>
            <SheetClose asChild>
              <Link href={"/"}>
                <h1 className="bg-gradient-to-r from-red-600 to-purple-400 inline-block text-transparent bg-clip-text text-2xl">
                  {`<ℙ𝕣𝕒𝕪𝕠𝕛𝕒𝕟 ℙ𝕦𝕣𝕚 />`}
                </h1>
              </Link>
            </SheetClose>
          </SheetTitle>
          <div className="pt-20">
            <MobileNavItems />
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
