import React from "react";
import Balance from "./balance";
import Trending from "./trending";

const BalanceAndTending = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 items-center justify-center w-full">
      <Balance />
      <Trending />
    </div>
  );
};

export default BalanceAndTending;
