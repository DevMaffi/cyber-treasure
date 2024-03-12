'use client'

import React from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'

import { XMarkIcon } from '@heroicons/react/16/solid'

import { cn } from '@/lib/utils'

import {
    renderPlainElement as renderElement,
    renderRefPlainElement as renderRefElement,
} from '@/lib/renderElement'

import type {
    DialogCloseCmp,
    DialogCmp,
    DialogContentCmp,
    DialogDescriptionCmp,
    DialogFooterCmp,
    DialogHeaderCmp,
    DialogOverlayCmp,
    DialogPortalCmp,
    DialogTitleCmp,
    DialogTriggerCmp,
} from '@/components/ui/Dialog/variants'
import { DIALOG_ELEMENTS } from '@/components/ui/Dialog/variants'

import styles from './Dialog.module.scss'

const Dialog: DialogCmp = DIALOG_ELEMENTS.Dialog

export const DialogTrigger: DialogTriggerCmp = DIALOG_ELEMENTS.Trigger
DialogTrigger.displayName = 'DialogTrigger'

export const DialogPortal: DialogPortalCmp = DIALOG_ELEMENTS.Portal
DialogPortal.displayName = 'DialogPortal'

export const DialogClose: DialogCloseCmp = DIALOG_ELEMENTS.Close
DialogClose.displayName = 'DialogClose'

export const DialogOverlay: DialogOverlayCmp = renderRefElement(
    DIALOG_ELEMENTS.Overlay,
    styles.overlay,
)
DialogOverlay.displayName = 'DialogOverlay'

export const DialogContent: DialogContentCmp = React.forwardRef(
    (props, ref) => {
        const { children, className, ...restProps } = props

        return (
            <DialogPortal>
                <DialogOverlay />
                <DialogPrimitive.Content
                    ref={ref}
                    className={cn(styles.content, className)}
                    {...restProps}
                >
                    {children}
                    <DialogPrimitive.Close className={styles.close}>
                        <XMarkIcon className={styles.closeIcon} />
                        <span className={styles.closeSr}>Close</span>
                    </DialogPrimitive.Close>
                </DialogPrimitive.Content>
            </DialogPortal>
        )
    },
)
DialogContent.displayName = 'DialogContent'

export const DialogHeader: DialogHeaderCmp = renderElement(
    DIALOG_ELEMENTS.Header,
    styles.header,
)
DialogHeader.displayName = 'DialogHeader'

export const DialogFooter: DialogFooterCmp = renderElement(
    DIALOG_ELEMENTS.Footer,
    styles.footer,
)
DialogFooter.displayName = 'DialogFooter'

export const DialogTitle: DialogTitleCmp = renderRefElement(
    DIALOG_ELEMENTS.Title,
    styles.title,
)
DialogTitle.displayName = 'DialogTitle'

export const DialogDescription: DialogDescriptionCmp = renderRefElement(
    DIALOG_ELEMENTS.Description,
    styles.description,
)

DialogDescription.displayName = 'DialogDescription'

Dialog.displayName = 'Dialog'

export default Dialog
