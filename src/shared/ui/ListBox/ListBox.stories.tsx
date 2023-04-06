import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ListBox>;

// @ts-ignore
const Template: ComponentStory<typeof Listbox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
