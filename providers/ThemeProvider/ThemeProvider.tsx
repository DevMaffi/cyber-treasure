'use client'

import type { ThemeProviderProps } from 'next-themes/dist/types'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export default function ThemeProvider(props: Readonly<ThemeProviderProps>) {
    const { children, ...restProps } = props

    return <NextThemesProvider {...restProps}>{children}</NextThemesProvider>
}
