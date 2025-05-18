import { FaXTwitter } from "react-icons/fa6";
import UserProfile from "/src/assets/userProfile.png";
import { FaTelegramPlane } from "react-icons/fa";
import Button from "../../components/buttons/Button";
import DayRadioGroup from "./components/DayRadio";
import { FaPlay } from "react-icons/fa";
import AmountCard from "./components/AmountCard";

const holdings = [
  {
    id: 1,
    amount: "1.4m",
    img: UserProfile,
    name: "Ghlbli",
    value: "$2893.6",
    highlight: true,
  },
  {
    id: 2,
    amount: "1.4m",
    img: UserProfile,
    name: "Ghlbli",
    value: "$2893.6",
    highlight: false,
  },
  {
    id: 3,
    amount: "1.4m",
    img: UserProfile,
    name: "Ghlbli",
    value: "$2893.6",
    highlight: true,
  },
  {
    id: 4,
    amount: "1.4m",
    img: UserProfile,
    name: "Ghlbli",
    value: "$2893.6",
    highlight: false,
  },
  {
    id: 5,
    amount: "1.4m",
    img: UserProfile,
    name: "Ghlbli",
    value: "$2893.6",
    highlight: true,
  },
  {
    id: 6,
    amount: "1.4m",
    img: UserProfile,
    name: "Ghlbli",
    value: "$2893.6",
    highlight: false,
  },
  {
    id: 7,
    amount: "1.4m",
    img: UserProfile,
    name: "Ghlbli",
    value: "$2893.6",
    highlight: true,
  },
  {
    id: 8,
    amount: "1.4m",
    img: UserProfile,
    name: "Ghlbli",
    value: "$2893.6",
    highlight: false,
  },
];

const UserDetail = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between items-end 2xl:px-50 xl:px-30 px-0 gap-6">
      <div className="w-full h-22 flex justify-between items-center userDetailButtons gap-5">
        <div className="flex jusity-start items-center gap-[29px]">
          <img
            src={UserProfile}
            alt="user image"
            className="w-22 h-22 rounded-full"
          />
          <div className="h-full flex flex-col justify-center items-start gap-3">
            <h3 className="font-bold text-[30px]">Heyitsyolo</h3>
            <div className="gap-1.5 flex justify-start items-center">
              <div className="w-[22px] h-[22px] rounded-[11px] bg-black flex justify-center items-center text-white text-[14px]">
                <FaXTwitter />
              </div>
              <div className="w-[22px] h-[22px] rounded-[11px] bg-blue-400 flex justify-center items-center text-white text-[14px]">
                <FaTelegramPlane />
              </div>
              <h3 className="text-xl text-[#666666]">65paNE</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end gap-3 h-full">
          <div className="flex justify-end items-center gap-3">
            <Button type="alert">Alerts</Button>
            <Button type="copy">Copy Trade</Button>
            <DayRadioGroup />
          </div>
        </div>
      </div>
      <div className="flex-1 w-full flex flex-col items-center justify-beteween bg-white overflow-y-auto relative">
        <div className="w-full h-[104px] sticky top-0 bg-[#ffffff] flex items-center justify-start py-9 px-[53px]">
          <h3 className="text-[24px] font-bold">Top Holdings</h3>
        </div>
        <div className="w-full flex flex-col">
          {holdings.map((item, index) => (
            <AmountCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
