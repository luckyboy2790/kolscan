import { useNavigate } from "react-router-dom";
import { Navigation } from "../components";
import ButtonLink from "../components/buttons/ButtonLink";
import { IoSearch } from "react-icons/io5";
import { RiRefreshLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

import ImageLink from "/src/assets/logo.png";
import PumpScanIconLink from "/src/assets/kolscanIcon.svg";
import { PiListBold } from "react-icons/pi";
import { useState } from "react";
import Button from "../components/buttons/Button";

const pages = [
  { name: "Trades", to: "/trades" },
  { name: "Leaderboard", to: "/leaderboard" },
];

const NavigationContainer = () => {
  const path = window.location.pathname;

  const navigate = useNavigate();

  const [isShow, setIsShow] = useState(false);

  return (
    <Navigation>
      <div className="flex justify-start items-center lg:gap-11 gap-5">
        <div
          className="flex gap-4.5 items-center cursor-pointer"
          onClick={() => {
            navigate("/trades");
          }}
        >
          <img src={ImageLink} alt="logo" className="w-12 h-12" />
          <h3 className="text-[32px] font-bold text-[#000000] hidden lg:flex">
            Pumpscan
          </h3>
        </div>
        <div className="md:block hidden">
          <Navigation.Nav>
            {pages.map(({ name, to }) => (
              <Navigation.NavItem key={name}>
                {to === path ? (
                  <ButtonLink to={to} active={true}>
                    {name}
                  </ButtonLink>
                ) : (
                  <ButtonLink to={to} active={false}>
                    {name}
                  </ButtonLink>
                )}
              </Navigation.NavItem>
            ))}
          </Navigation.Nav>
        </div>
      </div>
      <div className="flex justify-end items-center gap-4.5">
        <IoSearch className="text-[#BFBFBF] text-[32px] hidden md:block" />
        <div className="flex justify-start items-center w-55 h-10 border border-[#252525] rounded-full overflow-hidden">
          <div className="flex items-center justify-between h-full w-21.5 p-2">
            <div className="w-5 h-5 flex justify-center items-center">
              <img src={PumpScanIconLink} alt="" className="w-4 h-4" />
            </div>
            <h3 className="text-black text-[16px]">0</h3>
            <RiRefreshLine className="text-[16px] text-[#BFBFBF]" />
          </div>
          <div className="flex-1 h-full bg-[#252525] flex justify-center items-center">
            <h3 className="text-[18px] text-[#ffffff]">qYac4M X</h3>
          </div>
        </div>
        <IoSettingsOutline className="text-[#BFBFBF] text-[32px] hidden md:block" />
        {isShow ? (
          <IoCloseSharp
            className="text-[#BFBFBF] text-[32px] block md:hidden"
            onClick={() => {
              setIsShow(!isShow);
            }}
          />
        ) : (
          <PiListBold
            className="text-[#BFBFBF] text-[32px] block md:hidden"
            onClick={() => {
              setIsShow(!isShow);
            }}
          />
        )}
      </div>
      {isShow && (
        <div
          className="fixed top-20 left-0 w-screen h-[calc(100vh-80px)] bg-[#505050c9] backdrop-blur-sm z-40"
          onClick={() => setIsShow(false)}
        />
      )}
      <div
        className={`fixed top-20 right-0 h-[calc(100vh-80px)] w-60 bg-[#6EC5C3] z-50 transform transition-transform duration-300 ease-in-out ${
          isShow ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-1.5 h-full p-4">
          <Navigation.Nav>
            {pages.map(({ name, to }) => (
              <Navigation.NavItem key={name}>
                <ButtonLink to={to} active={to === path}>
                  {name}
                </ButtonLink>
              </Navigation.NavItem>
            ))}
          </Navigation.Nav>
          <Button type="link">Search</Button>
          <Button type="link">Setting</Button>
        </div>
      </div>
    </Navigation>
  );
};

export default NavigationContainer;
