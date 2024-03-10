import Link from 'next/link'

import { Button } from '@/components/ui'

import styles from './page.module.scss'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Button variant={'outline'} asChild>
                    <Link href={'/about'}>Read About</Link>
                </Button>
            </div>
        </main>
    )
}
