import {
    renderInnerElements,
    renderRefPlainElement as renderRefElement,
} from '@/lib/renderElement'

import type {
    TextTableCmp,
    TextTableStylesRecord,
} from '@/components/ui/TextTable/variants'
import { TEXT_TABLE_ELEMENTS } from '@/components/ui/TextTable/variants'

import styles from './TextTable.module.scss'

const TextTable = renderRefElement('table', styles.textTable) as TextTableCmp

const textTableStyles: TextTableStylesRecord = {
    Thead: undefined,
    Tbody: undefined,
    Tr: styles.tr,
}

renderInnerElements(TEXT_TABLE_ELEMENTS, (key, value) => {
    TextTable[key] = renderRefElement(value, textTableStyles[key])
    TextTable[key].displayName = `TextTable${key}`
})

TextTable.displayName = 'TextTable'

export default TextTable
