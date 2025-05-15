import { Props } from "../../types";

const Navigation = ({ children }: Props) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-20 flex justify-between  items-center bg-[#F9FAFC] px-12 z-2">
      {children}
    </div>
  );
};

Navigation.Nav = function NavigationNav({ children }: Props) {
  return <ul className="flex justify-start gap-3 flex-row">{children}</ul>;
};

Navigation.NavItem = function NavigationNavItem({ children }: Props) {
  return <li className="flex justify-center items-center">{children}</li>;
};

export default Navigation;
