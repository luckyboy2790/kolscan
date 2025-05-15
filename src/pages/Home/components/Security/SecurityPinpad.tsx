import { useState } from "react";

const SecurityPinPad = () => {
  const [pin, setPin] = useState("");

  const handleNumberClick = (num: number) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      if (newPin.length === 4) {
        handleSubmit(newPin);
      }
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  const handleClear = () => {
    setPin("");
  };

  const handleSubmit = (submittedPin?: string) => {
    console.log(submittedPin);
  };

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <h2 className="mb-6 text-sm font-semibold">Enter PIN code</h2>
      <div className="mb-4 flex gap-2">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              pin.length > i ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-5">
        {[
          { num: 1, text: "ABC" },
          { num: 2, text: "DEF" },
          { num: 3, text: "GHI" },
          { num: 4, text: "JKL" },
          { num: 5, text: "MNO" },
          { num: 6, text: "PQR" },
          { num: 7, text: "STU" },
          { num: 8, text: "VWX" },
          { num: 9, text: "YZ" },
          { action: "clear", label: "C" },
          { num: 0, text: "" },
          { action: "delete", label: "⌫" },
        ].map((item, index) => (
          <button
            key={index}
            className="w-[58px] h-[58px] flex flex-col items-center justify-center text-lg font-bold rounded-full bg-[#7e7e7eab] hover:bg-[#6e6e6e] cursor-pointer"
            onClick={() => {
              if (item.num !== undefined) handleNumberClick(item.num);
              if (item.action === "clear") handleClear();
              if (item.action === "delete") handleDelete();
            }}
          >
            {item.num !== undefined ? (
              <>
                <span>{item.num}</span>
                <span className="text-[9px] text-white">{item.text}</span>
              </>
            ) : (
              item.label
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SecurityPinPad;
