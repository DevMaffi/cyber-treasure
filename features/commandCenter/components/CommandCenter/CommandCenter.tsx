'use client'

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/Command'

import { useCommandCenter } from '@/features/commandCenter/hooks'

export default function CommandCenter() {
    const { open, setOpen } = useCommandCenter()

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder={'Type a command or search...'} />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading={'Suggestions'}>
                    <CommandItem>Calendar</CommandItem>
                    <CommandItem>Search Emoji</CommandItem>
                    <CommandItem>Calculator</CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}
