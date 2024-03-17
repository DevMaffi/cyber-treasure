import { TypographyKbd } from '@/components/ui/Typography'

import { CommandCenter } from '@/features/commandCenter'

import styles from './page.module.scss'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <TypographyKbd>CTRL</TypographyKbd>&nbsp;
                <TypographyKbd>K</TypographyKbd>
                <CommandCenter />
            </div>
        </main>
    )
}
