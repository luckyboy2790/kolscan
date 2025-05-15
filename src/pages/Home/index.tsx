// import HomeAccessCard from "./components/HomeAccess/HomeAccessCard";
// import LightCard from "./components/Lights/LightCard";
// import MediaSectionCard from "./components/Media/MediaSectionCard";
// import RoomTemp from "./components/RoomTemp/RoomTempCard";
// import SecuritySectionCard from "./components/Security/SecuritySectionCard";
// import WeatherCard from "./components/WeatherTme/WeatherCard";
import { FaRegStar } from "react-icons/fa";

const cardData = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  createdBy: "39exGX",
  timeAgo: "4h ago",
  marketCap: "$5.5K",
  replies: 80,
  tokenName: "Clout(clout)",
  description:
    "Clout is that sparkly, swaggerfueled superpower that makes people sit up and listen when you walk into the room",
}));

const Home = () => {
  return (
    <div className="flex flex-col justify-between gap-10 h-full w-full">
      <div className="flex justify-between items-center ">
        <div className="flex justify-start items-center gap-3">
          <div className="w-[29px] h-[27px] relative">
            <div className="w-6 h-6 rounded-full bg-[#000000] absolute top-0 left-0"></div>
            <div className="w-6 h-6 rounded-full border-1 border-black absolute bottom-0 right-0"></div>
          </div>
          <h3 className="text-black font-bold text-6">Realtime Trades</h3>
        </div>
        <button className="h-[35px] w-[145px] border border-[#252525] rounded-[3px] text-black font-bold text-[18px] cursor-pointer">
          Filter Wallets
        </button>
      </div>
      <div className="h-auto flex-1 max-lg:pl-0 pl-10 card gap-6">
        {cardData.map((card) => (
          <div key={card.id} className="relative h-44">
            <div className="h-full bg-white clip-pentagon rounded-bl-[60px] rounded-tr-[60px] rounded-tl-xl p-1.5 flex justify-between">
              <div className="h-full w-36 bg-[url(/src/assets/cardImage.avif)] rounded-bl-[55px] rounded-tl-[14px] bg-cover relative bg-center">
                <div className="w-0 h-0 border-b-[26px] border-l-[26px] border-b-transparent border-l-black absolute -top-[0.8px] -left-[0.8px] rounded-tl-[14px]"></div>
              </div>
              <div className="h-full flex-1 rounded-tr-[55px] border border-[#D9D9D9] flex flex-col p-2 px-3">
                <div className="w-full flex justify-between items-center pr-6">
                  <div className="flex justify-start items-center gap-2.5">
                    <h3 className="text-[16px] text-black font-medium">
                      created by
                    </h3>
                    <div className="flex justify-start items-center gap-1">
                      <div className="bg-[url(/src/assets/userImage.avif)] w-5 h-5 rounded-full bg-center bg-cover"></div>
                      <h3 className="text-[16px] text-black">
                        {card.createdBy}
                      </h3>
                    </div>
                  </div>
                  <h3 className="text-[12px] text-[#999999] font-medium">
                    {card.timeAgo}
                  </h3>
                  <FaRegStar className="text-[16px] text-[#000000]" />
                </div>
                <div className="w-full flex justify-start gap-2 items-center">
                  <h3 className="text-[#007AFF] text-[18px] font-medium">
                    market cap:
                  </h3>
                  <h3 className="text-[#007AFF] text-[18px] font-medium">
                    {card.marketCap}
                  </h3>
                </div>
                <div className="w-full flex items-center justify-start gap-1.5">
                  <h3 className="text-[16px] font-medium">replies:</h3>
                  <h3 className="text-[16px] font-medium">{card.replies}</h3>
                </div>
                <div className="w-full flex items-center justify-start gap-1.5">
                  <h3 className="text-[18px] font-bold uppercase">
                    {card.tokenName}
                  </h3>
                </div>
                <div className="w-full pr-5">
                  <h3 className="text-[12px]">{card.description}</h3>
                </div>
              </div>
            </div>
            <div className="w-0 h-0 border-t-[44px] border-r-[44px] border-t-transparent border-r-black absolute -bottom-[2px] right-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
