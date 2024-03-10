import type { CmpStylesRecord, RefCmpWithElements } from '@/types/components'

export const TEXT_TABLE_ELEMENTS = {
    Thead: 'thead',
    Tbody: 'tbody',
    Tr: 'tr',
} as const

export type TextTableCmp = RefCmpWithElements<
    'table',
    typeof TEXT_TABLE_ELEMENTS
>

export type TextTableStylesRecord = CmpStylesRecord<
    keyof typeof TEXT_TABLE_ELEMENTS
>
