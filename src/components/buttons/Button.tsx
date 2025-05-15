const Button = ({ children }: { children: any }) => {
  return (
    <button
      className={`flex px-4 py-2 items-center justify-center px-auto md:w-auto w-full group border-b border-t border-t-transparent`}
    >
      <div className="text-black text-[24px]">{children}</div>
    </button>
  );
};

export default Button;
