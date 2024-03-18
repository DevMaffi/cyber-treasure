'use client'

import React from 'react'

import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { ShortcutsProvider } from '@/components/providers/ShortcutsProvider'

type ProvidersProps = Readonly<{
    children: React.ReactNode
}>

export default function Providers(props: ProvidersProps) {
    const { children } = props

    return (
        <ThemeProvider
            attribute={'class'}
            defaultTheme={'system'}
            enableSystem
            disableTransitionOnChange
        >
            <ShortcutsProvider>{children}</ShortcutsProvider>
        </ThemeProvider>
    )
}
