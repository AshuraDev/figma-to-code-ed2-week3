import { ChevronRight, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";
import TrendingCard from "./trending_card";

const Trending = () => {
  const items = [
    {
      picture: "/images/sui.png",
      title: "Sui",
      sub: "SUI",
      qty: "1.56",
      price: "$2,455,806,673",
      badge: "-10.5%",
      color: " bg-tokena_red/30 text-tokena_red",
      icon: TrendingDown,
    },
    {
      picture: "/images/cat.png",
      title: "Ginnan The Cat",
      sub: "GINNAN",
      qty: "8.36",
      price: "$34,007,492",
      badge: "+3.2%",
      color: " bg-tokena_green/30 text-tokena_green",
      icon: TrendingUp,
    },
    {
      picture: "/images/toncoin.png",
      title: "Toncoin",
      sub: "TON",
      qty: "6.95",
      price: "$17,524,537,268",
      badge: "+07.5%",
      color: " bg-tokena_green/30 text-tokena_green",
      icon: TrendingUp,
    },
    {
      picture: "/images/solana.png",
      title: "Solana",
      sub: "SOL",
      qty: "143.76",
      price: "$67,116,052,623",
      badge: "-0.05%",
      color: " bg-tokena_red/30 text-tokena_red",
      icon: TrendingDown,
    },
  ];
  return (
    <div className="w-full lg:w-2/3 flex flex-col items-start gap-2 p-3 rounded-xl">
      <div className="flex items-center justify-between gap-3 w-full">
        <h1 className="font-semibold text-base">Trending</h1>
        <span className="flex items-center gap-1 text-xs font-medium text-tokena_dark_gray">
          View more <ChevronRight />
        </span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-center gap-2 w-full">
        {items.map((item, i) => (
          <TrendingCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
