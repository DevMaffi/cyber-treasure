'use client'

import { useTheme } from 'next-themes'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

import { Button } from '@/components/ui/Button'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'

import { THEME_MODE } from '@/enums'

import styles from './ThemeToggleBtn.module.scss'

export default function ThemeToggleBtn() {
    const { theme, setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'} size={'icon'}>
                    <SunIcon className={styles.sunIcon} />
                    <MoonIcon className={styles.moonIcon} />
                    <span className={styles.themeSr}>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={'end'}>
                <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                    <DropdownMenuRadioItem value={THEME_MODE.Light}>
                        Light
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value={THEME_MODE.Dark}>
                        Dark
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value={THEME_MODE.System}>
                        System
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
