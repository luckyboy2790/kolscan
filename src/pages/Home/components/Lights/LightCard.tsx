import { useState } from "react";
import Switch from "./LightSwitch";
import CustomSelect from "./LightSelect";

const LightCard = ({ id, isOn }: { id: string; isOn: string }) => {
  const [selectedValue, setSelectedValue] = useState(isOn);
  const [roomName, setRoomName] = useState<string>("Master Bedroom");

  return (
    <div className="group h-full w-full relative flex flex-col rounded-xl bg-[#bfbfbfd1] hover:!bg-[#3b3b3baf] p-4 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
      <div className="absolute inset-px rounded-[11px]" />
      <div className="relative flex flex-col justify-between w-full h-full gap-5">
        <div className="mb-4 flex sm:flex-row flex-col gap-2 items-center justify-between">
          <div className="flex sm:w-auto w-full items-center justify-between gap-2">
            <h3 className="text-base font-semibold text-white 2xl:text-xl">
              Lights
            </h3>
          </div>
          <div className="flex sm:w-auto w-full items-center justify-between gap-2">
            <CustomSelect setRoomName={setRoomName} />
          </div>
        </div>
        <div className="w-full">
          <Switch
            groupName={id}
            roomName={roomName}
            selectedValue={selectedValue}
            onChange={(value: string) => setSelectedValue(value)}
          />
        </div>
      </div>
    </div>
  );
};

export default LightCard;
