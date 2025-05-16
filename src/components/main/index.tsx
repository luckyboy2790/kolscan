import { Props } from "../../types";
import Zombie1ImageLink from "/src/assets/zombie-1.png";
import Zombie2ImageLink from "/src/assets/zombie-2.png";
import Vector1ImageLink from "/src/assets/vector-1.png";
import Vector2ImageLink from "/src/assets/vector-2.png";

const Main = ({ children }: Props) => {
  return (
    <div className="relative pt-32 py-10 h-[calc(100vh)] overflow-y-scroll justify-center flex flex-col text-xl max-xl:!px-14 max-lg:!px-4 responsive bg-[#6EC5C3]">
      <img
        src={Zombie1ImageLink}
        alt="zombie1"
        className="absolute bottom-18 left-6 w-56"
      />
      <img
        src={Zombie2ImageLink}
        alt="zombie1"
        className="absolute bottom-90 right-0 w-45"
      />
      <img
        src={Vector1ImageLink}
        alt="zombie1"
        className="absolute top-62 left-4 w-45 h-50"
      />
      <img
        src={Vector2ImageLink}
        alt="zombie1"
        className="absolute bottom-44 right-15 w-30 h-43"
      />
      {children}
    </div>
  );
};

Main.Container = function mainContainer({ children }: Props) {
  return <div className="w-full h-full overflow-y-scroll z-1">{children}</div>;
};

export default Main;
