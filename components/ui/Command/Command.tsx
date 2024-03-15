'use client'

import React from 'react'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { DialogContent } from '@/components/ui/Dialog'

import { cn } from '@/lib/utils'

import {
    renderPlainElement as renderElement,
    renderRefPlainElement as renderRefElement,
} from '@/lib/renderElement'

import type {
    CommandCmp,
    CommandDialogCmp,
    CommandEmptyCmp,
    CommandGroupCmp,
    CommandInputCmp,
    CommandItemCmp,
    CommandListCmp,
    CommandSeparatorCmp,
    CommandShortcutCmp,
} from '@/components/ui/Command/variants'
import { COMMAND_ELEMENTS } from '@/components/ui/Command/variants'

import styles from './Command.module.scss'

const Command: CommandCmp = renderRefElement(
    COMMAND_ELEMENTS.Command,
    styles.command,
)
Command.displayName = 'Command'

export const CommandDialog: CommandDialogCmp = props => {
    const { children, ...restProps } = props

    const CommandDialog = COMMAND_ELEMENTS.Dialog

    return (
        <CommandDialog {...restProps}>
            <DialogContent className={styles.dialogContent}>
                <Command className={styles.dialogCommand}>{children}</Command>
            </DialogContent>
        </CommandDialog>
    )
}
CommandDialog.displayName = 'CommandDialog'

export const CommandInput: CommandInputCmp = React.forwardRef((props, ref) => {
    const { className, ...restProps } = props

    const CommandInput = COMMAND_ELEMENTS.Input

    return (
        <div className={styles.inputContainer} cmdk-input-wrapper={''}>
            <MagnifyingGlassIcon className={styles.inputIcon} />
            <CommandInput
                ref={ref}
                className={cn(styles.input, className)}
                {...restProps}
            />
        </div>
    )
})
CommandInput.displayName = 'CommandInput'

export const CommandList: CommandListCmp = renderRefElement(
    COMMAND_ELEMENTS.List,
    styles.list,
)
CommandList.displayName = 'CommandList'

export const CommandEmpty: CommandEmptyCmp = renderRefElement(
    COMMAND_ELEMENTS.Empty,
    styles.empty,
)
CommandEmpty.displayName = 'CommandEmpty'

export const CommandGroup: CommandGroupCmp = renderRefElement(
    COMMAND_ELEMENTS.Group,
    styles.group,
)
CommandGroup.displayName = 'CommandGroup'

export const CommandSeparator: CommandSeparatorCmp = renderRefElement(
    COMMAND_ELEMENTS.Separator,
    styles.separator,
)
CommandSeparator.displayName = 'CommandSeparator'

export const CommandItem: CommandItemCmp = renderRefElement(
    COMMAND_ELEMENTS.Item,
    styles.item,
)
CommandItem.displayName = 'CommandItem'

export const CommandShortcut: CommandShortcutCmp = renderElement(
    COMMAND_ELEMENTS.Shortcut,
    styles.shortcut,
)
CommandShortcut.displayName = 'CommandShortcut'

export default Command
