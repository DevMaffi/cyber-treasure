import * as DialogPrimitive from '@radix-ui/react-dialog'

import type {
    CmpWithReadonlyProps,
    RefCmpWithReadonlyProps,
} from '@/types/components'

export const DIALOG_ELEMENTS = {
    Dialog: DialogPrimitive.Root,
    Trigger: DialogPrimitive.Trigger,
    Portal: DialogPrimitive.Portal,
    Close: DialogPrimitive.Close,
    Overlay: DialogPrimitive.Overlay,
    Content: DialogPrimitive.Content,
    Header: 'div',
    Footer: 'div',
    Title: DialogPrimitive.Title,
    Description: DialogPrimitive.Description,
} as const

export type DialogCmp = CmpWithReadonlyProps<typeof DIALOG_ELEMENTS.Dialog>

export type DialogTriggerCmp = RefCmpWithReadonlyProps<
    typeof DIALOG_ELEMENTS.Trigger
>

export type DialogPortalCmp = CmpWithReadonlyProps<
    typeof DIALOG_ELEMENTS.Portal
>

export type DialogCloseCmp = RefCmpWithReadonlyProps<
    typeof DIALOG_ELEMENTS.Close
>

export type DialogOverlayCmp = RefCmpWithReadonlyProps<
    typeof DIALOG_ELEMENTS.Overlay
>

export type DialogContentCmp = RefCmpWithReadonlyProps<
    typeof DIALOG_ELEMENTS.Content
>

export type DialogHeaderCmp = CmpWithReadonlyProps<
    typeof DIALOG_ELEMENTS.Header
>

export type DialogFooterCmp = CmpWithReadonlyProps<
    typeof DIALOG_ELEMENTS.Footer
>

export type DialogTitleCmp = RefCmpWithReadonlyProps<
    typeof DIALOG_ELEMENTS.Title
>

export type DialogDescriptionCmp = RefCmpWithReadonlyProps<
    typeof DIALOG_ELEMENTS.Description
>
