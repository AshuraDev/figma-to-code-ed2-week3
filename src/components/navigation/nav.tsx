import React from "react";
import DarkModeToggleButton from "../dark-mode-toggle-button";
import { Button } from "../ui/button";
import Image from "next/image";
import ResponsiveSideBar from "./responsive-side-bar";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between py-3 px-6 bg-background border-b border-tokena_light_gray">
      <div className="flex items-start gap-5">
        <ResponsiveSideBar />
        <div className="flex flex-col items-start gap-0">
          <h1 className="font-semibold text-sm">Dashboard </h1>
          <span className="font-medium text-tokena_dark_gray text-xs">
            Welcome back, John Doe
          </span>
        </div>
        <Button className="hidden md:flex">
          <Image
            src={"./icons/wallet.svg"}
            height={24}
            width={24}
            alt="wallet"
          />
          Connect wallet
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <div className="font-medium border rounded-lg text-tokena_dark_gray text-sm flex items-center justify-center gap-1 py-3 px-5">
          USD
          <Image
            src={"./icons/chevron-up-down.svg"}
            height={14}
            width={14}
            alt="wallet"
          />
        </div>
        <DarkModeToggleButton />
      </div>
    </nav>
  );
};

export default Nav;
