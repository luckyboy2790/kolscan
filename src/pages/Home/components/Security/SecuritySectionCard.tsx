import SecurityPinPad from "./SecurityPinpad";
import { IoMdPower } from "react-icons/io";
import { TbHomeShield } from "react-icons/tb";
import { GoShieldLock } from "react-icons/go";

const SecuritySectionCard = () => {
  return (
    <div className="group h-full w-full relative flex flex-col rounded-xl bg-[#bfbfbfcc] transition-all duration-300 hover:!bg-[#3b3b3baf] p-4 shadow-2xl hover:scale-[1.02] hover:shadow-indigo-500/20">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
      <div className="absolute inset-px rounded-[11px]" />
      <div className="relative flex flex-col justify-between items-center w-full h-full gap-5">
        <div className="flex w-full justify-between items-center">
          <h3 className="text-xl text-[#ffffff]">Security</h3>
          <p className="text-xs text-[#ffffff] uppercase">view zones</p>
        </div>

        <div className="flex justify-center items-center w-full grow">
          <SecurityPinPad />
        </div>

        <div className="w-full flex justify-between">
          <div className="flex flex-col gap-2 justify-center items-center w-1/3 py-4 text-4xl cursor-pointer text-[#ffffff]">
            <IoMdPower />
            <p className="uppercase text-sm">disarm</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-1/3 py-4 text-4xl cursor-pointer text-red-500">
            <GoShieldLock />
            <p className="uppercase text-sm">arm away</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-1/3 py-4 text-4xl cursor-pointer text-blue-500">
            <TbHomeShield />
            <p className="uppercase text-sm">arm home</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySectionCard;
