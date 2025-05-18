// CardComponent.tsx
import { FaXTwitter } from "react-icons/fa6";
import UserProfile from "/src/assets/userProfile.png";
import { FaTelegramPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type CardData = {
  number: number;
  id: number;
  username: string;
  handle: string;
  twitter: boolean;
  telegram: boolean;
  wins: number;
  losses: number;
  pnl: string;
};

type CardComponentProps = {
  data: CardData;
};

const CardComponent = ({ data }: CardComponentProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full flex sm:flex-row flex-col justify-between items-center p-3 relative rounded-[5px] sm:h-16 h-auto gap-4 bg-white border border-[#DDDDDD] cursor-pointer"
      onClick={() => navigate(`/account/${data.id}`)}
    >
      <div className="w-0 h-0 border-b-[26px] border-l-[26px] border-b-transparent border-l-black absolute -top-[0.8px] -left-[0.8px] rounded-tl-[5px]"></div>
      <div className="md:pl-10 flex justify-start gap-4 items-center">
        <div className="relative w-9 h-9 flex items-center justify-center text-white font-bold">
          <div className="absolute w-[25px] h-[25px] bg-black transform rotate-45"></div>
          <div className="absolute w-[25px] h-[25px] bg-black"></div>
          <span className="z-10">{data.number}</span>
        </div>
        <img
          src={UserProfile}
          alt="userImage"
          className="w-9 h-9 rounded-full"
        />
        <h3 className="text-[18px] text-black font-bold">{data.username}</h3>
        <div className="flex items-center justify-start gap-2">
          {data.twitter && (
            <div className="w-[22px] h-[22px] rounded-[11px] bg-black flex justify-center items-center text-white text-[14px]">
              <FaXTwitter />
            </div>
          )}
          {data.telegram && (
            <div className="w-[22px] h-[22px] rounded-[11px] bg-blue-400 flex justify-center items-center text-white text-[14px]">
              <FaTelegramPlane />
            </div>
          )}
        </div>
        <h3 className="text-[14px] text-[#666]">{data.handle}</h3>
      </div>
      <div className="md:pr-2 flex justify-end items-center gap-4">
        <div className="flex justify-center items-center gap-0.5">
          <h3 className="text-[#5BBB69] text-[16px]">{data.wins}</h3>
          <h3 className="text-[#252525] text-[16px]">/</h3>
          <h3 className="text-[#E35A48] text-[16px]">{data.losses}</h3>
        </div>
        <h3 className="text-[#37A637] text-[16px]">{data.pnl}</h3>
      </div>
    </div>
  );
};

export default CardComponent;
