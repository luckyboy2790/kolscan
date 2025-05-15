import { createContext, useContext } from "react";
import { AppContextType } from "../types";
import { AppProviderProps } from "../types";
import { useState } from "react";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [title, setTitle] = useState<string | null>(null);
    const [alarmStatus, setAlarmStatus] = useState<boolean>(false);

    return (
        <AppContext.Provider
            value={{ title, setTitle, alarmStatus, setAlarmStatus }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
