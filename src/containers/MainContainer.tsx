import { Main } from "../components";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <Main>
      <Main.Container>
        <Outlet />
      </Main.Container>
    </Main>
  );
};

export default MainContainer;
