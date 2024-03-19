'use client'

import {
    Cog6ToothIcon,
    FireIcon,
    HeartIcon,
    HomeIcon,
    PaintBrushIcon,
    ShoppingCartIcon,
    Squares2X2Icon,
    UserIcon,
} from '@heroicons/react/24/outline'

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandShortcut,
    CommandShortcutKbd,
} from '@/components/ui/Command'

import { useCommandCenter } from '@/features/commandCenter/hooks'

import styles from './CommandCenter.module.scss'

export default function CommandCenter() {
    const { open, setOpen, toggleTheme } = useCommandCenter()

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder={'Type a command or search...'} />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading={'Navigation'}>
                    <CommandItem>
                        <HomeIcon className={styles.cmdIcon} />
                        <span>Home</span>
                    </CommandItem>
                    <CommandItem>
                        <Squares2X2Icon className={styles.cmdIcon} />
                        <span>Library</span>
                    </CommandItem>
                    <CommandItem>
                        <FireIcon className={styles.cmdIcon} />
                        <span>Suggestions</span>
                    </CommandItem>
                    <CommandItem>
                        <HeartIcon className={styles.cmdIcon} />
                        <span>Wishlist</span>
                    </CommandItem>
                    <CommandItem>
                        <ShoppingCartIcon className={styles.cmdIcon} />
                        <span>Cart</span>
                    </CommandItem>
                </CommandGroup>
                <CommandGroup heading={'Settings'}>
                    <CommandItem>
                        <UserIcon className={styles.cmdIcon} />
                        <span>Profile</span>
                        <CommandShortcut>
                            <CommandShortcutKbd>CTRL</CommandShortcutKbd>&nbsp;
                            <CommandShortcutKbd>P</CommandShortcutKbd>
                        </CommandShortcut>
                    </CommandItem>
                    <CommandItem onSelect={toggleTheme}>
                        <PaintBrushIcon className={styles.cmdIcon} />
                        <span>Theme</span>
                        <CommandShortcut>
                            <CommandShortcutKbd>CTRL</CommandShortcutKbd>&nbsp;
                            <CommandShortcutKbd>[</CommandShortcutKbd>
                        </CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <Cog6ToothIcon className={styles.cmdIcon} />
                        <span>Settings</span>
                        <CommandShortcut>
                            <CommandShortcutKbd>CTRL</CommandShortcutKbd>&nbsp;
                            <CommandShortcutKbd>S</CommandShortcutKbd>
                        </CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}
