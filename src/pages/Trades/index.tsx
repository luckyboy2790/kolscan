// import HomeAccessCard from "./components/HomeAccess/HomeAccessCard";
// import LightCard from "./components/Lights/LightCard";
// import MediaSectionCard from "./components/Media/MediaSectionCard";
// import RoomTemp from "./components/RoomTemp/RoomTempCard";
// import SecuritySectionCard from "./components/Security/SecuritySectionCard";
// import WeatherCard from "./components/WeatherTme/WeatherCard";

import Card from "./components/Card";

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

const Trades = () => {
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
          <Card card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default Trades;
