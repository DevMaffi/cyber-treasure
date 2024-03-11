import {
    renderInnerElements,
    renderRefPlainElement as renderRefElement,
} from '@/lib/renderElement'

import type {
    TypographyCmp,
    TypographyStylesRecord,
} from '@/components/ui/Typography/variants'
import { TYPOGRAPHY_ELEMENTS } from '@/components/ui/Typography/variants'

import styles from './Typography.module.scss'

const Typography = renderRefElement('div', styles.flow) as TypographyCmp

const typographyStyles: TypographyStylesRecord = {
    H1: styles.heading1,
    H2: styles.heading2,
    H3: styles.heading3,
    H4: styles.heading4,
    P: styles.paragraph,
    Blockquote: styles.blockquote,
    Th: styles.th,
    Td: styles.td,
    List: styles.list,
    ListItem: styles.listItem,
    InlineCode: styles.inlineCode,
    Lead: styles.lead,
    Large: styles.large,
    Small: styles.small,
    Muted: styles.muted,
}

renderInnerElements(TYPOGRAPHY_ELEMENTS, (key, value) => {
    Typography[key] = renderRefElement(value, typographyStyles[key])
    Typography[key].displayName = `Typography${key}`
})

Typography.displayName = 'Typography'

export default Typography
