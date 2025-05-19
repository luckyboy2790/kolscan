import { useState } from "react";

const options = ["Daily", "Weekly", "Monthly"];

type ToggleRadioGroupProps = {
  onChange?: (value: string) => void;
};

export default function ToggleRadioGroup({ onChange }: ToggleRadioGroupProps) {
  const [selected, setSelected] = useState<string>("Daily");

  const handleClick = (value: string) => {
    setSelected(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex space-x-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleClick(option)}
          className={`px-4 py-2 rounded border text-sm font-medium w-24 h-9 cursor-pointer
            ${
              selected === option
                ? "bg-[#252525] text-white border-[#252525]"
                : "bg-transparent text-black border-[#252525] hover:bg-gray-200"
            }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
