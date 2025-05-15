import { Props } from "../../types";

const Navigation = ({ children }: Props) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-20 flex justify-between items-center bg-[#F9FAFC] lg:px-12 px-7 z-2">
      {children}
    </div>
  );
};

Navigation.Nav = function NavigationNav({ children }: Props) {
  return (
    <ul className="flex md:flex-row flex-col justify-start lg:gap-3 gap-1.5 md:w-auto w-full">
      {children}
    </ul>
  );
};

Navigation.NavItem = function NavigationNavItem({ children }: Props) {
  return (
    <li className="flex md:justify-center justify-start items-center md:w-auto w-full">
      {children}
    </li>
  );
};

export default Navigation;
