import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from './DropDown';

export default {
    title: 'shared/DropDown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Dropdown>;

// @ts-ignore
const Template: ComponentStory<typeof Listbox> = (args) => <Dropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    trigger: 'test',
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
    trigger: 'test',
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
    trigger: 'test',
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
    trigger: 'test',
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
    trigger: 'test',
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
