'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

import { Button } from '@/components/ui/Button'

import { useThemeToggle } from '@/features/theme/hooks'

import styles from './ThemeToggleBtn.module.scss'

export default function ThemeToggleBtn() {
    const [theme, toggleTheme] = useThemeToggle()

    const ThemeIcon = theme === 'dark' ? MoonIcon : SunIcon

    return (
        <Button variant={'outline'} size={'icon'} onClick={toggleTheme}>
            <ThemeIcon className={styles.themeIcon} />
        </Button>
    )
}
