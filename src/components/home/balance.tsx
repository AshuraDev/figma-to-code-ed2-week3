import React from "react";
import { Button } from "../ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";

const Balance = () => {
  return (
    <div className="w-full lg:w-4/12 border flex flex-col items-start gap-2 p-3 rounded-xl">
      <div className="w-full">
        <h1 className="font-semibold text-lg">Balance</h1>
      </div>
      <div className="flex items-start justify-between gap-2 w-full">
        <div className="w-1/2 font-bold text-lg">$63,755,200</div>
        <div className="w-1/2 flex items-center justify-center gap-2 text-sm text-tokena_dark_gray font-medium">
          <span className="text-xs font-semibold flex items-center justify-center py-1 px-2 rounded-2xl bg-tokena_green/30 text-tokena_green">
            +2.3%
          </span>
          vs last month
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 w-full">
        <Button variant={"secondary"} className="w-1/2">
          <ArrowUp className="w-5 h-5" />
          Deposit
        </Button>
        <Button variant={"secondary"} className="w-1/2">
          <ArrowDown className="w-5 h-5" />
          Withdraw
        </Button>
      </div>
    </div>
  );
};

export default Balance;
