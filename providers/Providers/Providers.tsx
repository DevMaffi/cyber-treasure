'use client'

import React from 'react'

import { ThemeProvider } from '@/providers/ThemeProvider'

import { THEME_MODE } from '@/enums'

import { CommandCenterContextProvider } from '@/features/commandCenter'

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
            <CommandCenterContextProvider>
                {children}
            </CommandCenterContextProvider>
        </ThemeProvider>
    )
}
