import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Flex.module.scss';

export type FlexDirection = 'row' | 'column';
export type FlexAlign = 'center' | 'start' | 'end';
export type FlexJustify = 'center' | 'start' | 'end' | 'between';
export type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
    center: cls.justifyCenter,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    end: cls.alignEnd,
    center: cls.alignCenter,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};
export interface FlexProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        align = 'center',
        justify = 'start',
        direction = 'row',
        gap,
        max,
        children,
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div
            className={classNames(cls.Flex, mods, classes)}
        >
            {children}
        </div>
    );
};
