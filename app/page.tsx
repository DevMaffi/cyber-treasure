import { TypographyKbd, TypographyMuted } from '@/components/ui/Typography'

import { CommandCenter } from '@/features/commandCenter'

import styles from './page.module.scss'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <TypographyMuted>
                    Press&nbsp;
                    <TypographyKbd>
                        <span>⌘</span>K
                    </TypographyKbd>
                </TypographyMuted>
                <CommandCenter />
            </div>
        </main>
    )
}
