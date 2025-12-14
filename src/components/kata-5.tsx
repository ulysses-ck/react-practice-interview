import { useTheme } from "../providers/theme-provider"

export function Kata5() {
    const {
        setTheme,
        theme
    } = useTheme();
    return <div style={{
        backgroundColor: theme  === "dark" ? "#000" : "#fff",
        color: theme === "dark" ? "#fff" : "#000"
    }}>
        {theme}

        <button onClick={() => setTheme(theme === "light" ? "dark": "light")}>
            change theme
        </button>
    </div>
}