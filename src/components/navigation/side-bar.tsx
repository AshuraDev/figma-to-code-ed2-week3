import Image from "next/image";
import React from "react";
import SideBarLinks from "./side-bar-links";

const SideBar = () => {
  return (
    <div className="h-full w-full py-4 px-3 flex flex-col justify-between">
      <div className="flex flex-col items-center gap-7">
        <div className="flex items-cente gap-3 w-full bg-secondary py-3 px-4 rounded-md">
          <Image
            src={"./images/Tokena.svg"}
            height={24}
            width={24}
            alt="Tokena"
          />
          <div className="">
            <h2 className="text-primary font-bold text-xs">Tokena</h2>
            <p className="text-primary text-xs">Finance app</p>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-sm text-tokena_dark_gray">Menu</h2>
        </div>
        {/* Likns */}
        <SideBarLinks />
      </div>
      {/* Profil */}
      <div className="w-full flex items-center justify-between gap-1 bg-card py-2 rounded-lg">
        <div className="flex gap-1 w-3/4 h-full">
          <Image
            src={"/images/person.png"}
            height={40}
            width={40}
            alt={"Profil"}
          />
          <div className="">
            <h2 className="text-sm text-foreground font-bold">John Doe</h2>
            <p className="truncate text-sm text-tokena_dark_gray">johndoe8@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <Image
            src={"./icons/chevron-down.svg"}
            height={18}
            width={18}
            alt={"chevron_down"}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
