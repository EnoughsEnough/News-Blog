import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ListBox>;

// @ts-ignore
const Template: ComponentStory<typeof Listbox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    defaultValue: 'test',
    items: [
        {
            content: 'dsodkasdas', value: '123',
        },
        {
            content: 'gfds', value: '1234',
        },
        {
            content: '324fr', value: '1235',
        },
    ],
};

export const topLeft = Template.bind({});
topLeft.args = {
    direction: 'top left',
    defaultValue: 'test',
    items: [
        {
            content: 'dsodkasdas', value: '123',
        },
        {
            content: 'gfds', value: '1234',
        },
        {
            content: '324fr', value: '1235',
        },
    ],
};

export const topRight = Template.bind({});
topRight.args = {
    direction: 'top right',
    defaultValue: 'test',
    items: [
        {
            content: 'dsodkasdas', value: '123',
        },
        {
            content: 'gfds', value: '1234',
        },
        {
            content: '324fr', value: '1235',
        },
    ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    direction: 'bottom right',
    defaultValue: 'test',
    items: [
        {
            content: 'dsodkasdas', value: '123',
        },
        {
            content: 'gfds', value: '1234',
        },
        {
            content: '324fr', value: '1235',
        },
    ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    direction: 'bottom left',
    defaultValue: 'test',
    items: [
        {
            content: 'dsodkasdas', value: '123',
        },
        {
            content: 'gfds', value: '1234',
        },
        {
            content: '324fr', value: '1235',
        },
    ],
};
