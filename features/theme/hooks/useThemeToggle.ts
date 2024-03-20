import { useTheme } from 'next-themes'

import { THEME_MODE } from '@/enums'

export function useThemeToggle() {
    const { theme, setTheme } = useTheme()

    function toggleTheme() {
        const isDarkMode = theme === THEME_MODE.Dark

        if (isDarkMode) {
            setTheme(THEME_MODE.Light)
            return
        }

        setTheme(THEME_MODE.Dark)
    }

    return {
        theme,
        toggleTheme,
    }
}
