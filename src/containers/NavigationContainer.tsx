import { useNavigate } from "react-router-dom";
import { Navigation } from "../components";
import ButtonLink from "../components/buttons/ButtonLink";
import { IoSearch } from "react-icons/io5";
import { RiRefreshLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

import ImageLink from "/src/assets/logo.png";
import KolscanIconLink from "/src/assets/kolscanIcon.svg";

const pages = [
  { name: "Trades", to: "/trades" },
  { name: "Leaderboard", to: "/leaderboard" },
];

const NavigationContainer = () => {
  const path = window.location.pathname;

  const navigate = useNavigate();

  return (
    <Navigation>
      <div className="flex justify-start items-center gap-11">
        <div
          className="flex gap-4.5 items-center cursor-pointer"
          onClick={() => {
            navigate("/trades");
          }}
        >
          <img src={ImageLink} alt="logo" className="w-12 h-12" />
          <h3 className="text-[32px] font-bold text-[#000000]">Kolscan</h3>
        </div>
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
      <div className="flex justify-end items-center gap-4.5 border-2">
        <IoSearch className="text-[#BFBFBF] text-[32px]" />
        <div className="flex justify-start items-center w-55 h-10 border border-[#252525] rounded-full overflow-hidden">
          <div className="flex items-center justify-between h-full w-21.5 p-2">
            <div className="w-5 h-5 flex justify-center items-center">
              <img src={KolscanIconLink} alt="" className="w-4 h-4" />
            </div>
            <h3 className="text-black text-[16px]">0</h3>
            <RiRefreshLine className="text-[16px] text-[#BFBFBF]" />
          </div>
          <div className="flex-1 h-full bg-[#252525] flex justify-center items-center">
            <h3 className="text-[18px]">qYac4M X</h3>
          </div>
        </div>
        <IoSettingsOutline className="text-[#BFBFBF] text-[32px]" />
      </div>
    </Navigation>
  );
};

export default NavigationContainer;
