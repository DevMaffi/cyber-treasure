import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import type {
    CmpWithReadonlyProps,
    RefCmpWithReadonlyProps,
} from '@/types/components'

export const DROPDOWN_MENU_ELEMENTS = {
    DropdownMenu: DropdownMenuPrimitive.Root,
    Trigger: DropdownMenuPrimitive.Trigger,
    Group: DropdownMenuPrimitive.Group,
    Portal: DropdownMenuPrimitive.Portal,
    Sub: DropdownMenuPrimitive.Sub,
    RadioGroup: DropdownMenuPrimitive.RadioGroup,
    SubTrigger: DropdownMenuPrimitive.SubTrigger,
    SubContent: DropdownMenuPrimitive.SubContent,
    Content: DropdownMenuPrimitive.Content,
    Item: DropdownMenuPrimitive.Item,
    CheckboxItem: DropdownMenuPrimitive.CheckboxItem,
    RadioItem: DropdownMenuPrimitive.RadioItem,
    Label: DropdownMenuPrimitive.Label,
    Separator: DropdownMenuPrimitive.Separator,
    Shortcut: 'span',
} as const

export type DropdownMenuCmp = CmpWithReadonlyProps<
    typeof DROPDOWN_MENU_ELEMENTS.DropdownMenu
>

export type DropdownMenuTriggerCmp = RefCmpWithReadonlyProps<
    typeof DROPDOWN_MENU_ELEMENTS.Trigger
>

export type DropdownMenuGroupCmp = RefCmpWithReadonlyProps<
    typeof DROPDOWN_MENU_ELEMENTS.Group
>

export type DropdownMenuPortalCmp = CmpWithReadonlyProps<
    typeof DROPDOWN_MENU_ELEMENTS.Portal
>

export type DropdownMenuSubCmp = CmpWithReadonlyProps<
    typeof DROPDOWN_MENU_ELEMENTS.Sub
>

export type DropdownMenuRadioGroupCmp = RefCmpWithReadonlyProps<
    typeof DROPDOWN_MENU_ELEMENTS.RadioGroup
>

export type DropdownMenuSubTriggerCmp = RefCmpWithReadonlyProps<
    typeof DROPDOWN_MENU_ELEMENTS.SubTrigger,
    {
        inset?: boolean
    }
>

export type DropdownMenuSubContentCmp = RefCmpWithReadonlyProps<
    typeof DROPDOWN_MENU_ELEMENTS.SubContent
>

export type DropdownMenuContentCmp = RefCmpWithReadonlyProps<
    typeof DROPDOWN_MENU_ELEMENTS.Content
>

export type DropdownMenuItemCmp = RefCmpWithReadonlyProps<
    typeof DROPDOWN_MENU_ELEMENTS.Item,
    {
        inset?: boolean
    }
>

export type DropdownMenuCheckboxItemCmp = RefCmpWithReadonlyProps<
    typeof DROPDOWN_MENU_ELEMENTS.CheckboxItem
>

export type DropdownMenuRadioItemCmp = RefCmpWithReadonlyProps<
    typeof DROPDOWN_MENU_ELEMENTS.RadioItem
>

export type DropdownMenuLabelCmp = RefCmpWithReadonlyProps<
    typeof DROPDOWN_MENU_ELEMENTS.Label,
    {
        inset?: boolean
    }
>

export type DropdownMenuSeparatorCmp = RefCmpWithReadonlyProps<
    typeof DROPDOWN_MENU_ELEMENTS.Separator
>

export type DropdownMenuShortcutCmp = CmpWithReadonlyProps<
    typeof DROPDOWN_MENU_ELEMENTS.Shortcut
>
