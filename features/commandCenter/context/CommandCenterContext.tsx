'use client'

import React, { useContext, useState } from 'react'

import type { CommandCenterContextProps } from '@/features/commandCenter/types'

const CommandCenterContext =
    React.createContext<CommandCenterContextProps | null>(null)

type CommandCenterContextProviderProps = Readonly<{
    children: React.ReactNode
}>

export default function CommandCenterContextProvider(
    props: CommandCenterContextProviderProps,
) {
    const { children } = props

    const [open, setOpen] = useState(false)

    return (
        <CommandCenterContext.Provider
            value={{
                open,
                setOpen,
            }}
        >
            {children}
        </CommandCenterContext.Provider>
    )
}

export function useCommandCenterContext() {
    const context = useContext(CommandCenterContext)

    if (!context) {
        throw new Error(
            'useCommandCenterContext must be used within a CommandCenterContextProvider',
        )
    }

    return context
}
