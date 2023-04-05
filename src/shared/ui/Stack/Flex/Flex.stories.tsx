import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
        </>
    ),
};

export const RowGap = Template.bind({});
RowGap.args = {
    gap: '16',
    children: (
        <>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
        </>
    ),
};

export const RowAlignEnd = Template.bind({});
RowAlignEnd.args = {
    align: 'end',
    children: (
        <>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
        </>
    ),
};

export const RowJustify = Template.bind({});
RowAlignEnd.args = {
    align: 'end',
    children: (
        <>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
        </>
    ),
};

export const ColumnGap = Template.bind({});
ColumnGap.args = {
    direction: 'column',
    gap: '16',
    children: (
        <>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
        </>
    ),
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    direction: 'column',
    align: 'end',
    children: (
        <>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
        </>
    ),
};

export const ColumnJustifyBetween = Template.bind({});
ColumnJustifyBetween.args = {
    direction: 'column',
    justify: 'between',
    children: (
        <>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
        </>
    ),
};
