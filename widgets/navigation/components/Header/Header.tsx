import React from 'react'

import Link from 'next/link'

import dynamic from 'next/dynamic'

import { PuzzlePieceIcon } from '@heroicons/react/24/solid'

import { Skeleton } from '@/components/ui/Skeleton'

import { CommandCenter, CommandSearchTrigger } from '@/features/commandCenter'

import styles from './Header.module.scss'

const ThemeToggleBtn = dynamic(
    () => import('@/features/theme/components/ThemeToggleBtn/ThemeToggleBtn'),
    {
        loading: () => <Skeleton className={styles.themeBtnSkeleton} />,
        ssr: false,
    },
)

export default function Header() {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <div className={styles.group}>
                    <Link href={'/'}>
                        <PuzzlePieceIcon className={styles.logo} />
                    </Link>
                    <CommandSearchTrigger />
                </div>
                <ThemeToggleBtn />
            </header>
            <CommandCenter />
        </React.Fragment>
    )
}
