import { TypographyKbd } from '@/components/ui/Typography'

import styles from './page.module.scss'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.shortcut}>
                    <TypographyKbd>CTRL</TypographyKbd>&nbsp;
                    <TypographyKbd>K</TypographyKbd>
                </div>
            </div>
        </main>
    )
}
