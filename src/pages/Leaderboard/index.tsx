// Leaderboard.tsx
import { useEffect, useState } from "react";
import CardComponent from "./components/CardComponent";
import ToggleRadioGroup from "./components/ToggleRadioGroup";
import UserCard from "./components/UserCard";

const leaderboardData = [
  {
    number: 1,
    id: 1,
    username: "Heyitsyolo",
    handle: "65paNE",
    twitter: true,
    telegram: true,
    wins: 74,
    losses: 31,
    pnl: "+144.08 Sol($24,810.6)",
  },
  {
    number: 2,
    id: 2,
    username: "Heyitsyolo",
    handle: "65paNE",
    twitter: true,
    telegram: true,
    wins: 74,
    losses: 31,
    pnl: "+144.08 Sol($24,810.6)",
  },
  {
    number: 3,
    id: 3,
    username: "Heyitsyolo",
    handle: "65paNE",
    twitter: true,
    telegram: true,
    wins: 74,
    losses: 31,
    pnl: "+144.08 Sol($24,810.6)",
  },
  {
    number: 4,
    id: 4,
    username: "Heyitsyolo",
    handle: "65paNE",
    twitter: true,
    telegram: true,
    wins: 74,
    losses: 31,
    pnl: "+144.08 Sol($24,810.6)",
  },
  {
    number: 5,
    id: 5,
    username: "Heyitsyolo",
    handle: "65paNE",
    twitter: true,
    telegram: true,
    wins: 74,
    losses: 31,
    pnl: "+144.08 Sol($24,810.6)",
  },
  {
    number: 6,
    id: 6,
    username: "Heyitsyolo",
    handle: "65paNE",
    twitter: true,
    telegram: true,
    wins: 74,
    losses: 31,
    pnl: "+144.08 Sol($24,810.6)",
  },
  {
    number: 7,
    id: 7,
    username: "Heyitsyolo",
    handle: "65paNE",
    twitter: true,
    telegram: true,
    wins: 74,
    losses: 31,
    pnl: "+144.08 Sol($24,810.6)",
  },
  {
    number: 8,
    id: 8,
    username: "Heyitsyolo",
    handle: "65paNE",
    twitter: true,
    telegram: true,
    wins: 74,
    losses: 31,
    pnl: "+144.08 Sol($24,810.6)",
  },
  {
    number: 9,
    id: 9,
    username: "Heyitsyolo",
    handle: "65paNE",
    twitter: true,
    telegram: true,
    wins: 74,
    losses: 31,
    pnl: "+144.08 Sol($24,810.6)",
  },
  {
    number: 10,
    id: 10,
    username: "Heyitsyolo",
    handle: "65paNE",
    twitter: true,
    telegram: true,
    wins: 74,
    losses: 31,
    pnl: "+144.08 Sol($24,810.6)",
  },
];

const Leaderboard = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredData =
    screenWidth > 690 ? leaderboardData.slice(3) : leaderboardData;

  return (
    <div className="w-full h-full flex flex-col gap-5 justify-between">
      <div className="w-full flex justify-center items-center">
        <h3 className="text-[30px] text-center font-bold">
          Relized Pnl Leaderboard
        </h3>
      </div>

      <div className="w-full flex justify-center items-center">
        <ToggleRadioGroup />
      </div>

      <div className="w-full flex justify-center items-center gap-7 userCards">
        <div className="h-[280px] flex items-end">
          <UserCard number={2} id={"2"} />
        </div>
        <div className="h-[280px] flex items-start">
          <UserCard number={1} id={"1"} />
        </div>
        <div className="h-[280px] flex items-end">
          <UserCard number={3} id={"3"} />
        </div>
      </div>

      <div className="flex-1 w-full 2xl:px-50 lg:px-30 px-0 flex flex-col justify-start items-center gap-2 overflow-y-scroll ">
        {filteredData.map((user, index) => (
          <CardComponent key={index} data={user} />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
