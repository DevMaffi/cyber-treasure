import { useEffect, useState } from 'react'

export function useCommandCenter() {
    const [open, setOpen] = useState(false)

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
    }
}
