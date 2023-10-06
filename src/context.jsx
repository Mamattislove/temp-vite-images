import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [search, setSearch] = useState("cat");

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        const body = document.querySelector("body");
        body.classList.toggle("dark-theme");
    };

    return (
        <AppContext.Provider
            value={{ darkMode, toggleDarkMode, search, setSearch }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => useContext(AppContext);
