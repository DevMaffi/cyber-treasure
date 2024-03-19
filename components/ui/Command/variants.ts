import React from 'react'

import type { DialogProps } from '@radix-ui/react-dialog'

import { Command as CommandPrimitive } from 'cmdk'

import { Dialog } from '@/components/ui/Dialog'

import type {
    CmpWithReadonlyProps,
    RefCmpWithReadonlyProps,
} from '@/types/components'

export const COMMAND_ELEMENTS = {
    Command: CommandPrimitive,
    Dialog: Dialog,
    Input: CommandPrimitive.Input,
    List: CommandPrimitive.List,
    Empty: CommandPrimitive.Empty,
    Group: CommandPrimitive.Group,
    Separator: CommandPrimitive.Separator,
    Item: CommandPrimitive.Item,
    Shortcut: 'span',
    ShortcutKbd: 'span',
} as const

export type CommandCmp = RefCmpWithReadonlyProps<
    typeof COMMAND_ELEMENTS.Command
>

export type CommandDialogProps = DialogProps & {}

export type CommandDialogCmp = React.FC<Readonly<CommandDialogProps>>

export type CommandInputCmp = RefCmpWithReadonlyProps<
    typeof COMMAND_ELEMENTS.Input
>

export type CommandListCmp = RefCmpWithReadonlyProps<
    typeof COMMAND_ELEMENTS.List
>

export type CommandEmptyCmp = RefCmpWithReadonlyProps<
    typeof COMMAND_ELEMENTS.Empty
>

export type CommandGroupCmp = RefCmpWithReadonlyProps<
    typeof COMMAND_ELEMENTS.Group
>

export type CommandSeparatorCmp = RefCmpWithReadonlyProps<
    typeof COMMAND_ELEMENTS.Separator
>

export type CommandItemCmp = RefCmpWithReadonlyProps<
    typeof COMMAND_ELEMENTS.Item
>

export type CommandShortcutCmp = CmpWithReadonlyProps<
    typeof COMMAND_ELEMENTS.Shortcut
>

export type CommandShortcutKbdCmp = CmpWithReadonlyProps<
    typeof COMMAND_ELEMENTS.ShortcutKbd
>
