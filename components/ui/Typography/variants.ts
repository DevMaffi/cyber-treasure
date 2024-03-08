import React from 'react'

import type { DefaultCmpMeta } from '@/types/globals'
import type { ValueOf } from '@/types/utils'

export const TEXT_TYPES = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    P: 'p',
    Blockquote: 'blockquote',
    Th: 'th',
    Td: 'td',
    List: 'ul',
    ListItem: 'li',
    InlineCode: 'code',
    Lead: 'p',
    Large: 'div',
    Small: 'small',
    Muted: 'p',
} as const

export type TextType = ValueOf<typeof TEXT_TYPES>

export type TypographyElements<T extends Record<string, TextType>> = {
    -readonly [P in keyof T]: React.ExoticComponent<
        Readonly<React.ComponentPropsWithRef<T[P]>>
    > &
        DefaultCmpMeta
}

export type TypographyProps = React.ComponentPropsWithRef<'div'>

export type TypographyCmp = React.ExoticComponent<Readonly<TypographyProps>> &
    TypographyElements<typeof TEXT_TYPES> &
    DefaultCmpMeta
