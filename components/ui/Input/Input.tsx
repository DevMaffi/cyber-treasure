import React from 'react'

import { cn } from '@/lib/utils'

import type { InputCmp } from '@/components/ui/Input/variants'

import styles from './Input.module.scss'

const Input: InputCmp = React.forwardRef((props, ref) => {
    const { className, type, ...restProps } = props

    return (
        <input
            ref={ref}
            className={cn(styles.input, className)}
            type={type}
            {...restProps}
        />
    )
})

Input.displayName = 'Input'

export default Input
