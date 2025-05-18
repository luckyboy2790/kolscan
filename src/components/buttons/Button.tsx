interface ButtonProps {
  children: React.ReactNode;
  type: "link" | "primary" | "alert" | "copy";
}

const Button = ({ children, type }: ButtonProps) => {
  let buttonClass = "";

  switch (type) {
    case "primary":
      buttonClass =
        "h-[35px] w-[145px] border border-[#252525] rounded-[3px] text-black font-bold text-[18px] cursor-pointer";
      break;
    case "alert":
      buttonClass =
        "h-[34px] w-[88px] items-center justify-center border border-[#BB2828] rounded-[5px] bg-[#F77B7B] text-white font-bold text-[16px] cursor-pointer";
      break;
    case "copy":
      buttonClass =
        "h-[34px] w-[145px] bg-[#1B1F2672] text-white font-bold rounded-[5px] text-[16px] cursor-pointer";
      break;
    case "link":
    default:
      buttonClass =
        "flex px-4 py-2 items-center justify-center px-auto md:w-auto w-full group border-b border-t border-t-transparent";
  }

  return (
    <button className={buttonClass}>
      <div
        className={
          type === "link"
            ? "text-black text-[24px]"
            : "flex justify-center items-center"
        }
      >
        {children}
      </div>
    </button>
  );
};

export default Button;
