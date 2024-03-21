import React from 'react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from '@/providers'

import { RootShortcuts } from '@/components'

import { cn } from '@/lib/utils'

import { Header } from '@/widgets/navigation'

import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Cyber-Treasure · Unleash the Gamer Within',
}

type RootLayoutProps = Readonly<{
    children: React.ReactNode
}>

export default function RootLayout(props: RootLayoutProps) {
    const { children } = props

    return (
        <html lang={'en'} suppressHydrationWarning>
            <body className={cn(inter.className)}>
                <Providers>
                    <RootShortcuts />
                    <Header />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
