import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export const useTitle = () => {
  const { setTitle } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    const title = path.charAt(0).toUpperCase() + path.slice(1) || "Home";
    setTitle(title);
  }, [location, setTitle]);
};
