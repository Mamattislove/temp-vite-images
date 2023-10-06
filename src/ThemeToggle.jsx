import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useGlobalContext } from "./context";

const ThemeToggle = () => {
    const { darkMode, toggleDarkMode } = useGlobalContext();
    return (
        <section className="toggle-container">
            <button type="button" className="dark-toggle">
                {darkMode ? (
                    <BsFillMoonFill
                        className="toggle-icon"
                        onClick={toggleDarkMode}
                    />
                ) : (
                    <BsFillSunFill
                        className="toggle-icon"
                        onClick={toggleDarkMode}
                    />
                )}
            </button>
        </section>
    );
};

export default ThemeToggle;
