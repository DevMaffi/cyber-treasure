import React from 'react'

import { cn } from '@/lib/utils'

import type { TypographyCmp } from '@/components/ui/Typography/variants'
import { TEXT_TYPES } from '@/components/ui/Typography/variants'

import styles from './Typography.module.scss'

const Typography = React.forwardRef((props, ref) => {
    const { children, className, ...restProps } = props

    return (
        <div ref={ref} className={cn(className)} {...restProps}>
            {children}
        </div>
    )
}) as TypographyCmp

Typography.H1 = React.forwardRef((props, ref) => {
    const { children, className, ...restProps } = props

    const Comp = TEXT_TYPES.H1

    return (
        <Comp
            ref={ref}
            className={cn(styles.heading1, className)}
            {...restProps}
        >
            {children}
        </Comp>
    )
})
Typography.H1.displayName = 'TypographyH1'

Typography.H2 = React.forwardRef((props, ref) => {
    const { children, className, ...restProps } = props

    const Comp = TEXT_TYPES.H2

    return (
        <Comp
            ref={ref}
            className={cn(styles.heading2, className)}
            {...restProps}
        >
            {children}
        </Comp>
    )
})
Typography.H2.displayName = 'TypographyH2'

Typography.H3 = React.forwardRef((props, ref) => {
    const { children, className, ...restProps } = props

    const Comp = TEXT_TYPES.H3

    return (
        <Comp
            ref={ref}
            className={cn(styles.heading3, className)}
            {...restProps}
        >
            {children}
        </Comp>
    )
})
Typography.H3.displayName = 'TypographyH3'

Typography.H4 = React.forwardRef((props, ref) => {
    const { children, className, ...restProps } = props

    const Comp = TEXT_TYPES.H4

    return (
        <Comp
            ref={ref}
            className={cn(styles.heading4, className)}
            {...restProps}
        >
            {children}
        </Comp>
    )
})
Typography.H4.displayName = 'TypographyH4'

Typography.P = React.forwardRef((props, ref) => {
    const { children, className, ...restProps } = props

    const Comp = TEXT_TYPES.P

    return (
        <Comp
            ref={ref}
            className={cn(styles.paragraph, className)}
            {...restProps}
        >
            {children}
        </Comp>
    )
})
Typography.P.displayName = 'TypographyP'

Typography.Blockquote = React.forwardRef((props, ref) => {
    const { children, className, ...restProps } = props

    const Comp = TEXT_TYPES.Blockquote

    return (
        <Comp
            ref={ref}
            className={cn(styles.blockquote, className)}
            {...restProps}
        >
            {children}
        </Comp>
    )
})
Typography.Blockquote.displayName = 'TypographyBlockquote'

Typography.Th = React.forwardRef((props, ref) => {
    const { children, className, ...restProps } = props

    const Comp = TEXT_TYPES.Th

    return (
        <Comp ref={ref} className={cn(styles.th, className)} {...restProps}>
            {children}
        </Comp>
    )
})
Typography.Th.displayName = 'TypographyTh'

Typography.Td = React.forwardRef((props, ref) => {
    const { children, className, ...restProps } = props

    const Comp = TEXT_TYPES.Td

    return (
        <Comp ref={ref} className={cn(styles.td, className)} {...restProps}>
            {children}
        </Comp>
    )
})
Typography.Td.displayName = 'TypographyTd'

Typography.List = React.forwardRef((props, ref) => {
    const { children, className, ...restProps } = props

    const Comp = TEXT_TYPES.List

    return (
        <Comp ref={ref} className={cn(styles.list, className)} {...restProps}>
            {children}
        </Comp>
    )
})
Typography.List.displayName = 'TypographyList'

Typography.ListItem = React.forwardRef((props, ref) => {
    const { children, className, ...restProps } = props

    const Comp = TEXT_TYPES.ListItem

    return (
        <Comp
            ref={ref}
            className={cn(styles.listItem, className)}
            {...restProps}
        >
            {children}
        </Comp>
    )
})
Typography.ListItem.displayName = 'TypographyListItem'

Typography.InlineCode = React.forwardRef((props, ref) => {
    const { children, className, ...restProps } = props

    const Comp = TEXT_TYPES.InlineCode

    return (
        <Comp
            ref={ref}
            className={cn(styles.inlineCode, className)}
            {...restProps}
        >
            {children}
        </Comp>
    )
})
Typography.InlineCode.displayName = 'TypographyInlineCode'

Typography.Lead = React.forwardRef((props, ref) => {
    const { children, className, ...restProps } = props

    const Comp = TEXT_TYPES.Lead

    return (
        <Comp ref={ref} className={cn(styles.lead, className)} {...restProps}>
            {children}
        </Comp>
    )
})
Typography.Lead.displayName = 'TypographyLead'

Typography.Large = React.forwardRef((props, ref) => {
    const { children, className, ...restProps } = props

    const Comp = TEXT_TYPES.Large

    return (
        <Comp ref={ref} className={cn(styles.large, className)} {...restProps}>
            {children}
        </Comp>
    )
})
Typography.Large.displayName = 'TypographyLarge'

Typography.Small = React.forwardRef((props, ref) => {
    const { children, className, ...restProps } = props

    const Comp = TEXT_TYPES.Small

    return (
        <Comp ref={ref} className={cn(styles.small, className)} {...restProps}>
            {children}
        </Comp>
    )
})
Typography.Small.displayName = 'TypographySmall'

Typography.Muted = React.forwardRef((props, ref) => {
    const { children, className, ...restProps } = props

    const Comp = TEXT_TYPES.Muted

    return (
        <Comp ref={ref} className={cn(styles.muted, className)} {...restProps}>
            {children}
        </Comp>
    )
})
Typography.Muted.displayName = 'TypographyMuted'

Typography.displayName = 'Typography'

export default Typography
