'use client'

import React from 'react'

import { Slot } from '@radix-ui/react-slot'

import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

import type { ButtonCmp } from '@/components/ui/Button/variants'

import styles from './Button.module.scss'

export const buttonVariants = cva(styles.btn, {
    variants: {
        variant: {
            default: styles.btnDefaultVariant,
            destructive: styles.btnDestructiveVariant,
            outline: styles.btnOutlineVariant,
            secondary: styles.btnSecondaryVariant,
            ghost: styles.btnGhostVariant,
            link: styles.btnLinkVariant,
        },

        size: {
            default: styles.btnDefaultSize,
            sm: styles.btnSmSize,
            lg: styles.btnLgSize,
            icon: styles.btnIconSize,
        },
    },

    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
})

const Button: ButtonCmp<VariantProps<typeof buttonVariants>> = React.forwardRef(
    (props, ref) => {
        const {
            className,
            variant,
            size,
            asChild = false,
            ...restProps
        } = props

        const Comp = asChild ? Slot : 'button'

        return (
            <Comp
                ref={ref}
                className={cn(
                    buttonVariants({
                        variant,
                        size,
                        className,
                    }),
                )}
                {...restProps}
            />
        )
    },
)

Button.displayName = 'Button'

export default Button
