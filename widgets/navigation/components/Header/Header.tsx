import React from 'react'

import Link from 'next/link'

import dynamic from 'next/dynamic'

import { PuzzlePieceIcon } from '@heroicons/react/24/solid'

import { CommandCenter } from '@/features/commandCenter'

import styles from './Header.module.scss'

const ThemeToggleBtn = dynamic(
    () => import('@/features/theme/components/ThemeToggleBtn/ThemeToggleBtn'),
    {
        loading: () => <p>Loading...</p>,
        ssr: false,
    },
)

export default function Header() {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <Link href={'/'}>
                    <PuzzlePieceIcon className={styles.logo} />
                </Link>
                <ThemeToggleBtn />
            </header>
            <CommandCenter />
        </React.Fragment>
    )
}
