'use client'

import React from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import type { Variants } from 'framer-motion'

import { CheckIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

import { cn } from '@/lib/utils'

import {
    renderPlainElement as renderElement,
    renderRefPlainElement as renderRefElement,
} from '@/lib/renderElement'

import type {
    DropdownMenuCheckboxItemCmp,
    DropdownMenuCmp,
    DropdownMenuContentCmp,
    DropdownMenuGroupCmp,
    DropdownMenuItemCmp,
    DropdownMenuLabelCmp,
    DropdownMenuPortalCmp,
    DropdownMenuRadioGroupCmp,
    DropdownMenuRadioItemCmp,
    DropdownMenuSeparatorCmp,
    DropdownMenuShortcutCmp,
    DropdownMenuSubCmp,
    DropdownMenuSubContentCmp,
    DropdownMenuSubTriggerCmp,
    DropdownMenuTriggerCmp,
} from '@/components/ui/DropdownMenu/variants'
import { DROPDOWN_MENU_ELEMENTS } from '@/components/ui/DropdownMenu/variants'

import styles from './DropdownMenu.module.scss'

const DropdownMenu: DropdownMenuCmp = DROPDOWN_MENU_ELEMENTS.DropdownMenu
DropdownMenu.displayName = 'DropdownMenu'

export const DropdownMenuTrigger: DropdownMenuTriggerCmp =
    DROPDOWN_MENU_ELEMENTS.Trigger
DropdownMenuTrigger.displayName = 'DropdownMenuTrigger'

export const DropdownMenuGroup: DropdownMenuGroupCmp =
    DROPDOWN_MENU_ELEMENTS.Group
DropdownMenuGroup.displayName = 'DropdownMenuGroup'

export const DropdownMenuPortal: DropdownMenuPortalCmp =
    DROPDOWN_MENU_ELEMENTS.Portal
DropdownMenuPortal.displayName = 'DropdownMenuPortal'

export const DropdownMenuSub: DropdownMenuSubCmp = DROPDOWN_MENU_ELEMENTS.Sub
DropdownMenuSub.displayName = 'DropdownMenuSub'

export const DropdownMenuRadioGroup: DropdownMenuRadioGroupCmp =
    DROPDOWN_MENU_ELEMENTS.RadioGroup
DropdownMenuRadioGroup.displayName = 'DropdownMenuRadioGroup'

export const DropdownMenuSubTrigger: DropdownMenuSubTriggerCmp =
    React.forwardRef((props, ref) => {
        const { children, className, inset, ...restProps } = props

        const DropdownMenuSubTrigger = DROPDOWN_MENU_ELEMENTS.SubTrigger

        return (
            <DropdownMenuSubTrigger
                ref={ref}
                className={cn(
                    styles.subTrigger,
                    inset && styles.inset,
                    className,
                )}
                {...restProps}
            >
                {children}
                <ChevronRightIcon className={styles.subTriggerIcon} />
            </DropdownMenuSubTrigger>
        )
    })
DropdownMenuSubTrigger.displayName = 'DropdownMenuSubTrigger'

export const DropdownMenuSubContent: DropdownMenuSubContentCmp =
    renderRefElement(DROPDOWN_MENU_ELEMENTS.SubContent, styles.subContent)
DropdownMenuSubContent.displayName = 'DropdownMenuSubContent'

export const DropdownMenuContent: DropdownMenuContentCmp = React.forwardRef(
    (props, ref) => {
        const { className, sideOffset = 4, ...restProps } = props

        const DropdownMenuContent = DROPDOWN_MENU_ELEMENTS.Content

        const contentVariants: Variants = {
            initial: {
                opacity: 0,
                scale: 0.95,
            },
            target: {
                opacity: 1,
                scale: 1,
            },
        }

        return (
            <DropdownMenuPortal>
                <DropdownMenuContent
                    ref={ref}
                    className={cn(styles.content, className)}
                    variants={contentVariants}
                    initial={'initial'}
                    animate={'target'}
                    transition={{
                        ease: 'linear',
                        duration: 0.1,
                    }}
                    sideOffset={sideOffset}
                    {...restProps}
                />
            </DropdownMenuPortal>
        )
    },
)
DropdownMenuContent.displayName = 'DropdownMenuContent'

export const DropdownMenuItem: DropdownMenuItemCmp = React.forwardRef(
    (props, ref) => {
        const { className, inset, ...restProps } = props

        const DropdownMenuItem = DROPDOWN_MENU_ELEMENTS.Item

        return (
            <DropdownMenuItem
                ref={ref}
                className={cn(
                    styles.menuItem,
                    inset && styles.inset,
                    className,
                )}
                {...restProps}
            />
        )
    },
)
DropdownMenuItem.displayName = 'DropdownMenuItem'

export const DropdownMenuCheckboxItem: DropdownMenuCheckboxItemCmp =
    React.forwardRef((props, ref) => {
        const { children, className, checked, ...restProps } = props

        const DropdownMenuCheckboxItem = DROPDOWN_MENU_ELEMENTS.CheckboxItem

        return (
            <DropdownMenuCheckboxItem
                ref={ref}
                className={cn(styles.checkboxItem, className)}
                checked={checked}
                {...restProps}
            >
                <span className={styles.itemIndicatorContainer}>
                    <DropdownMenuPrimitive.ItemIndicator>
                        <CheckIcon className={styles.itemIndicatorIcon} />
                    </DropdownMenuPrimitive.ItemIndicator>
                </span>
                {children}
            </DropdownMenuCheckboxItem>
        )
    })
DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem'

export const DropdownMenuRadioItem: DropdownMenuRadioItemCmp = React.forwardRef(
    (props, ref) => {
        const { children, className, ...restProps } = props

        const DropdownMenuRadioItem = DROPDOWN_MENU_ELEMENTS.RadioItem

        return (
            <DropdownMenuRadioItem
                ref={ref}
                className={cn(styles.radioItem, className)}
                {...restProps}
            >
                <span className={styles.itemIndicatorContainer}>
                    <DropdownMenuPrimitive.ItemIndicator>
                        <CheckIcon className={styles.itemIndicatorIcon} />
                    </DropdownMenuPrimitive.ItemIndicator>
                </span>
                {children}
            </DropdownMenuRadioItem>
        )
    },
)
DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem'

export const DropdownMenuLabel: DropdownMenuLabelCmp = React.forwardRef(
    (props, ref) => {
        const { className, inset, ...restProps } = props

        const DropdownMenuLabel = DROPDOWN_MENU_ELEMENTS.Label

        return (
            <DropdownMenuLabel
                ref={ref}
                className={cn(styles.label, inset && styles.inset, className)}
                {...restProps}
            />
        )
    },
)
DropdownMenuLabel.displayName = 'DropdownMenuLabel'

export const DropdownMenuSeparator: DropdownMenuSeparatorCmp = renderRefElement(
    DROPDOWN_MENU_ELEMENTS.Separator,
    styles.separator,
)
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator'

export const DropdownMenuShortcut: DropdownMenuShortcutCmp = renderElement(
    DROPDOWN_MENU_ELEMENTS.Shortcut,
    styles.shortcut,
)
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'

export default DropdownMenu
