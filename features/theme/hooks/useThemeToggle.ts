import { useTheme } from 'next-themes'

export function useThemeToggle() {
    const { theme, setTheme } = useTheme()

    function toggleTheme() {
        const isDarkMode = theme === 'dark'

        if (isDarkMode) {
            setTheme('light')
            return
        }

        setTheme('dark')
    }

    return [theme, toggleTheme] as const
}
