import Link from 'next/link'

import { Button, Typography } from '@/components/ui'

import styles from './page.module.scss'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Typography.H2>Cyber-Treasure</Typography.H2>
                <Button variant={'outline'} asChild>
                    <Link href={'/app'}>Open App</Link>
                </Button>
            </div>
        </main>
    )
}
