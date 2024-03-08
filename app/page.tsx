import type { Variants } from 'framer-motion'

import { Typography } from '@/components/ui'
import { MButton } from '@/components/ui/motion'

import styles from './page.module.scss'

const buttonVariants: Variants = {
    hover: {
        scale: 1.1,
    },
}

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Typography.H2>Cyber-Treasure</Typography.H2>
                <MButton
                    variants={buttonVariants}
                    initial={false}
                    whileHover={'hover'}
                    variant={'outline'}
                >
                    Open App
                </MButton>
            </div>
        </main>
    )
}
