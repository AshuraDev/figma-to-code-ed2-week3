import { LucideIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ItemsProps {
  picture: string;
  title: string;
  sub: string;
  qty: string;
  price: string;
  badge: string;
  color: string;
  icon: LucideIcon;
}

const TrendingCard = ({
  picture,
  title,
  sub,
  qty,
  price,
  badge,
  color,
  icon: Icon,
}: ItemsProps) => {
  return (
    <div className="w-full flex flex-col items-start bg-background gap-2 p-2 border rounded-lg overflow-hidden">
      <div className="flex items-start justify-between gap-1 w-full">
        <div className=" flex items-center justify-center gap-1 w-3/5">
          <Image src={picture} height={32} width={32} alt={title} />
          <div className="flex flex-col items-start w-full overflow-hidden">
            <span className="truncate w-full">{title}</span>
            <span className="truncate w-full">{sub}</span>
          </div>
        </div>
        <div className="w-2/5 flex justify-end">
          <span
            className={`text-xs w-fit font-semibold flex items-center justify-center gap-1 py-1 px-2 rounded-2xl ${color}`}
          >
            {badge}
            <Icon className="h-3 w-3"/>
          </span>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-xs font-bold">{qty} {sub}</h2>
        <span className="text-xs">{price}</span>
      </div>
    </div>
  );
};

export default TrendingCard;
