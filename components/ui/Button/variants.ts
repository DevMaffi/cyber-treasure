import React from 'react'

import type { DefaultCmpMeta } from '@/types/globals'

export type ButtonProps<T> = React.ComponentPropsWithRef<'button'> &
    T & {
        asChild?: boolean
    }

export type ButtonCmp<T> = React.ExoticComponent<Readonly<ButtonProps<T>>> &
    DefaultCmpMeta
