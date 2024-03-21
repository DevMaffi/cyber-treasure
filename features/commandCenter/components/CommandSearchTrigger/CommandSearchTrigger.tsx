'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { TypographyKbd } from '@/components/ui/Typography'

import { cn } from '@/lib/utils'

import { useCommandCenterContext } from '@/features/commandCenter/context'

import styles from './CommandSearchTrigger.module.scss'

type CommandSearchTriggerProps = Readonly<{
    className?: string
    disabled?: boolean
}>

export default function CommandSearchTrigger(props: CommandSearchTriggerProps) {
    const { className, disabled } = props

    const { setOpen } = useCommandCenterContext()

    function onOpen() {
        setOpen(true)
    }

    return (
        <button
            className={cn(
                styles.search,
                disabled && styles.searchDisabled,
                className,
            )}
            onClick={onOpen}
        >
            <div className={styles.searchPlaceholder}>
                <MagnifyingGlassIcon className={styles.searchIcon} />
                <span>Open search</span>
            </div>
            <ShortcutTrigger />
        </button>
    )
}

function ShortcutTrigger() {
    return (
        <div className={styles.shortcut}>
            <TypographyKbd>CTRL</TypographyKbd>&nbsp;
            <TypographyKbd>K</TypographyKbd>
        </div>
    )
}
