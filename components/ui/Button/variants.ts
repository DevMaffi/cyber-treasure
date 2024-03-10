import type { RefCmpWithReadonlyProps } from '@/types/components'

export type ButtonProps<T> = T & {
    asChild?: boolean
}

export type ButtonCmp<T> = RefCmpWithReadonlyProps<'button', ButtonProps<T>>
