'use client'

import React from 'react'

import type { Variants } from 'framer-motion'

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

export const DialogOverlay: DialogOverlayCmp = React.forwardRef(
    (props, ref) => {
        const { className, ...restProps } = props

        const DialogOverlay = DIALOG_ELEMENTS.Overlay

        const overlayVariants: Variants = {
            initial: {
                opacity: 0,
            },
            target: {
                opacity: 1,
            },
        }

        return (
            <DialogOverlay
                ref={ref}
                className={cn(styles.overlay, className)}
                variants={overlayVariants}
                initial={'initial'}
                animate={'target'}
                transition={{
                    ease: 'linear',
                    duration: 0.15,
                }}
                {...restProps}
            />
        )
    },
)
DialogOverlay.displayName = 'DialogOverlay'

export const DialogContent: DialogContentCmp = React.forwardRef(
    (props, ref) => {
        const { children, className, ...restProps } = props

        const DialogContent = DIALOG_ELEMENTS.Content

        const contentVariants: Variants = {
            initial: {
                opacity: 0,
                scale: 0.95,
                x: '-50%',
                y: '-48%',
            },
            target: {
                opacity: 1,
                scale: 1,
                y: '-55%',
            },
        }

        return (
            <DialogPortal>
                <DialogOverlay />
                <DialogContent
                    ref={ref}
                    className={cn(styles.content, className)}
                    variants={contentVariants}
                    initial={'initial'}
                    animate={'target'}
                    transition={{
                        ease: 'linear',
                        duration: 0.05,
                    }}
                    {...restProps}
                >
                    {children}
                    <DialogClose className={styles.close}>
                        <XMarkIcon className={styles.closeIcon} />
                        <span className={styles.closeSr}>Close</span>
                    </DialogClose>
                </DialogContent>
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
