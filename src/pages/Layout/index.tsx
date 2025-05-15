import { AppLayout } from "../../components";
import { MainContainer, NavigationContainer } from "../../containers";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <AppLayout>
      <ToastContainer />
      <NavigationContainer />
      <MainContainer />
    </AppLayout>
  );
};

export default Layout;
