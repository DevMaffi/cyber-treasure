import { useEffect } from 'react'

import { useThemeToggle } from '@/features/theme'

import { useCommandCenterContext } from '@/features/commandCenter/context'

export function useCommandCenter() {
    const { open, setOpen } = useCommandCenterContext()

    const { toggleTheme } = useThemeToggle()

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            const isMatchShortcut = e.key === 'k' && (e.metaKey || e.ctrlKey)

            if (isMatchShortcut) {
                e.preventDefault()
                setOpen(open => !open)
            }
        }

        document.addEventListener('keydown', down)

        return () => document.removeEventListener('keydown', down)
    }, [])

    return {
        open,
        setOpen,
        toggleTheme,
    }
}
