import { useEffect } from 'react'

import { useThemeToggle } from '@/features/theme'

export function useRootShortcuts() {
    const [theme, toggleTheme] = useThemeToggle()

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            const isMatchShortcut = e.key === '[' && (e.metaKey || e.ctrlKey)

            if (isMatchShortcut) {
                e.preventDefault()
                toggleTheme()
            }
        }

        document.addEventListener('keydown', down)

        return () => document.removeEventListener('keydown', down)
    }, [theme])
}
