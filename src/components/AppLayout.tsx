import { Props } from "../types";

const AppLayout = ({ children }: Props) => {
  return (
    <div className="w-full mx-auto h-screen justify-center">{children}</div>
  );
};

export default AppLayout;
