"use client"

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
const SideBarLinks = () => {
  //
  const pathname = usePathname();

  const links = [
    {
      icon: "./icons/home.svg",
      label: "Dashboard",
      href: "/",
    },
    {
      icon: "./icons/news.svg",
      label: "News",
      href: "/news",
    },
    {
      icon: "./icons/chart.svg",
      label: "Activities",
      href: "#",
    },
    {
      icon: "./icons/card.svg",
      label: "Cards",
      href: "#",
    },
    {
      icon: "./icons/reports.svg",
      label: "Reports",
      href: "#",
    },
    {
      icon: "./icons/bell.svg",
      label: "Notifications",
      href: "#",
    },
    {
      icon: "./icons/wallet.svg",
      label: "Billing",
      href: "#",
    },
    {
      icon: "./icons/invoice.svg",
      label: "Invoices",
      href: "#",
    },
    {
      icon: "./icons/headphone.svg",
      label: "Help center",
      href: "#",
    },
    {
      icon: "./icons/settings.svg",
      label: "Settings",
      href: "#",
    },
  ];
  //
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      {links.map((link, i) => (
        <Link
          key={i}
          href={link.href}
          className={
            link.href === pathname
              ? "bg-primary text-white text-xs font-semibold w-full rounded-xl py-3 px-2 flex items-center gap-1"
              : "text-xs font-semibold w-full rounded-xl py-3 px-2 flex items-center gap-1"
          }
        >
          <Image src={link.icon} height={18} width={18} alt={link.label}/>
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default SideBarLinks;
