import React from 'react'

import type { ClassValue } from 'clsx'

export type DefaultCmpMeta = {
    displayName?: string
}

export type RefCmpWithReadonlyProps<
    T extends React.ElementType,
    P = unknown,
> = React.ExoticComponent<Readonly<React.ComponentPropsWithRef<T> & P>> &
    DefaultCmpMeta

export type CmpElementsRecord = Record<string, React.ElementType>

export type CmpRefElements<T extends CmpElementsRecord> = {
    -readonly [P in keyof T]: RefCmpWithReadonlyProps<T[P]>
}

export type RefCmpWithElements<
    T extends React.ElementType,
    E extends CmpElementsRecord,
    P = unknown,
> = RefCmpWithReadonlyProps<T, P> & CmpRefElements<E>

export type CmpStylesRecord<T extends string> = Record<T, ClassValue>
