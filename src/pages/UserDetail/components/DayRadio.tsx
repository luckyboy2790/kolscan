import { useState } from "react";

const options = ["1d", "3d", "7d", "14d", "30d"];

const DayRadioGroup = () => {
  const [selected, setSelected] = useState("1d");

  return (
    <div className="flex items-center justify-between w-[194px] h-[46px] border border-[#252525] rounded-full px-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className={`
            w-8 h-8 rounded-full flex items-center justify-center cursor-pointer
            text-sm font-medium
            ${selected === option ? "bg-[#252525] text-white" : "text-black"}
          `}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default DayRadioGroup;
