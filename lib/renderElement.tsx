import React from 'react'

import type { ClassValue } from 'clsx'

import type {
    CmpElementsRecord,
    RefCmpWithReadonlyProps,
} from '@/types/components'

import { cn } from '@/lib/utils'

export const renderRefPlainElement = <T extends React.ElementType>(
    elem: T,
    ...styles: ClassValue[]
) => {
    const PlainElement = React.forwardRef((props, ref) => {
        const { children, className, ...restProps } = props

        const Comp = elem as React.ElementType

        return (
            <Comp ref={ref} className={cn(...styles, className)} {...restProps}>
                {children}
            </Comp>
        )
    }) as RefCmpWithReadonlyProps<T>

    PlainElement.displayName = 'PlainElement'

    return PlainElement
}

export const renderInnerElements = <T extends CmpElementsRecord>(
    elements: T,
    callback: (key: keyof T, value: T[keyof T]) => void,
) => {
    Object.entries(elements).map(([key, value]) => {
        if (isInnerElementKey(elements, key)) {
            callback(key, value as T[keyof T])
        }
    })
}

function isInnerElementKey<T extends CmpElementsRecord>(
    elements: T,
    key: unknown,
): key is keyof T {
    if (key !== null && typeof key === 'string') {
        return key in elements
    }

    return false
}
