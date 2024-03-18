'use client'

import React from 'react'

import { useRootShortcuts } from '@/hooks'

type ShortcutsProviderProps = Readonly<{
    children: React.ReactNode
}>

export default function ShortcutsProvider(props: ShortcutsProviderProps) {
    const { children } = props

    useRootShortcuts()

    return children
}
