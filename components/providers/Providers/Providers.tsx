'use client'

import React from 'react'

import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { ShortcutsProvider } from '@/components/providers/ShortcutsProvider'

import { THEME_MODE } from '@/enums'

type ProvidersProps = Readonly<{
    children: React.ReactNode
}>

export default function Providers(props: ProvidersProps) {
    const { children } = props

    return (
        <ThemeProvider
            attribute={'class'}
            defaultTheme={THEME_MODE.System}
            enableSystem
            disableTransitionOnChange
        >
            <ShortcutsProvider>{children}</ShortcutsProvider>
        </ThemeProvider>
    )
}
