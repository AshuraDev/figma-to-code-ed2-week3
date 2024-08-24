import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import SideBar from "./side-bar";

const ResponsiveSideBar = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger className="lg:hidden hover:opacity-75 transition">
          <div className="cursor-pointer font-medium border rounded-lg text-tokena_dark_gray text-sm flex items-center justify-center p-3">
            <Menu className="w-5 h-5 text-foreground" />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-background">
          <SideBar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ResponsiveSideBar;
