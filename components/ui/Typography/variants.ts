import type { CmpStylesRecord, RefCmpWithRefElements } from '@/types/components'

export const TYPOGRAPHY_ELEMENTS = {
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

export type TypographyCmp = RefCmpWithRefElements<
    'div',
    typeof TYPOGRAPHY_ELEMENTS
>

export type TypographyStylesRecord = CmpStylesRecord<
    keyof typeof TYPOGRAPHY_ELEMENTS
>
