import UserProfile from "/src/assets/userProfile.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const UserCard = ({ number }: { number: number }) => {
  return (
    <div
      className={`w-[194px] h-[256px] rounded-[5px] flex flex-col gap-2 px-4 py-6
      ${
        number === 1
          ? "backgroundFirst"
          : number === 2
          ? "backgroundSecond"
          : "backgroundThird"
      } relative`}
    >
      <div className="absolute w-full h-[26px] -top-[13px] right-0 flex justify-center">
        <div className="w-[29px] h-[27px] relative">
          <div className="w-6 h-6 rounded-full bg-[#000000] absolute top-0 left-0 text-white font-bold text-[18px] z-1 flex justify-center items-center">
            {number}
          </div>
          <div className="w-6 h-6 rounded-full border-1 border-black absolute bottom-0 right-0"></div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        <div className="flex-1 h-full pl-2"></div>

        <img
          src={UserProfile}
          alt="userImage"
          className="h-22 w-22 rounded-full"
        />

        <div className="flex-1 h-full flex flex-col justify-start items-start gap-2 pl-2">
          <div className="w-[22px] h-[22px] rounded-[11px] bg-black flex justify-center items-center text-white text-[14px]">
            <FaXTwitter />
          </div>
          <div className="w-[22px] h-[22px] rounded-[11px] bg-blue-400 flex justify-center items-center text-white text-[14px]">
            <FaTelegramPlane />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <h3 className="font-bold text-[18px]">Heyistyolo</h3>
      </div>

      <div className="flex justify-center items-center gap-1">
        <h3 className="text-[#5BBB69] text-[16px]">74</h3>
        <h3 className="text-[#252525] text-[16px]">/</h3>
        <h3 className="text-[#E35A48] text-[16px]">31</h3>
      </div>

      <div className="flex justify-center items-center">
        <h3 className="text-[#37A637] text-[16px]">+144.08 Sol($24,810.6)</h3>
      </div>
    </div>
  );
};

export default UserCard;
