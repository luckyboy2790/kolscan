import { BsFillMoonStarsFill } from "react-icons/bs";

const TimePart = () => {
  return (
    <div className="w-1/2 h-full flex flex-col gap-4">
      <div className="w-full text-xl text-white flex justify-end items-center">
        <BsFillMoonStarsFill />
      </div>
      <div className="w-full grow flex flex-col gap-3 justify-center items-start">
        <div className="flex justify-start">
          <p className="text-4xl text-start text-white">
            11:11 <span className="text-sm">PM</span>
          </p>
        </div>
        <div className="flex justify-start">
          <p className="text-xs text-start text-white">Wednesday, June 15th</p>
        </div>
      </div>
    </div>
  );
};

export default TimePart;
