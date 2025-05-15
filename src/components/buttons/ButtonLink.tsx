import { IButtonLink } from "../../types";
import { Link } from "react-router-dom";

const ButtonLink = ({ children, to, active }: IButtonLink) => {
  return (
    <Link
      to={to}
      className={`flex px-4 py-2 items-center justify-center px-auto md:w-auto w-full group border-b border-t border-t-transparent ${
        active ? "md:border-b-black" : "md:border-b-transparent"
      }`}
    >
      <div className="text-black text-[24px]">{children}</div>
    </Link>
  );
};

export default ButtonLink;
