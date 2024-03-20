import { renderPlainElement as renderElement } from '@/lib/renderElement'

import type { SkeletonCmp } from '@/components/ui/Skeleton/variants'

import styles from './Skeleton.module.scss'

const Skeleton: SkeletonCmp = renderElement('div', styles.skeleton)
Skeleton.displayName = 'Skeleton'

export default Skeleton
