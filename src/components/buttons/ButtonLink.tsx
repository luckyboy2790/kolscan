import { IButtonLink } from "../../types";
import { Link } from "react-router-dom";

const ButtonLink = ({ children, to, active }: IButtonLink) => {
  return (
    <Link
      to={to}
      className={`flex px-4 py-2 items-center justify-center px-auto group border-b border-t border-t-transparent ${
        active ? "border-b-black" : "border-b-transparent"
      }`}
    >
      <div className="text-black text-[24px]">{children}</div>
    </Link>
  );
};

export default ButtonLink;
