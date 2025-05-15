import { useState } from "react";
import HomeAccessSwitch from "./HomeAccessSwitch";

const HomeAccessCard = ({ id, isOn }: { id: string; isOn: string }) => {
  const [selectedValue, setSelectedValue] = useState(isOn);

  return (
    <div className="group h-full w-full relative flex flex-col rounded-xl bg-[#bfbfbfd1] hover:!bg-[#3b3b3baf] p-4 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
      <div className="absolute inset-px rounded-[11px]" />
      <div className="relative flex justify-between items-center w-full h-full gap-5">
        <div className="w-2/5 flex flex-col items-center justify-between">
          <div className="flex items-center justify-start gap-2 w-full">
            <h3 className="text-base font-semibold text-white 2xl:text-base text-start">
              Home Access
            </h3>
          </div>
          <div className="flex items-center justify-start gap-2 w-full">
            <p className="text-xs text-start text-white">All Doors</p>
          </div>
        </div>
        <div className="w-3/5">
          <HomeAccessSwitch
            groupName={id}
            selectedValue={selectedValue}
            onChange={(value: string) => setSelectedValue(value)}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAccessCard;
