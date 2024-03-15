import {
    Typography,
    TypographyInlineCode,
    TypographySmall,
} from '@/components/ui/Typography'

import { CommandCenter } from '@/features/commandCenter'

import styles from './page.module.scss'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Typography>
                    <TypographySmall>Press</TypographySmall>&nbsp;
                    <TypographyInlineCode>CTRL</TypographyInlineCode>&nbsp;
                    <TypographyInlineCode>K</TypographyInlineCode>
                </Typography>
                <CommandCenter />
            </div>
        </main>
    )
}
