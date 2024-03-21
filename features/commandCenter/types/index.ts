import React from 'react'

export type CommandCenterContextProps = Readonly<{
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}>
