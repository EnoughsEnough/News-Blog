import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    tabs: [
        {
            value: '1',
            content: '2',
        },
        {
            value: '2',
            content: '3',
        },
        {
            value: '3',
            content: '4',
        },
        {
            value: '4',
            content: '5',
        },
    ],
    value: '2',
    onTabClick: action('onTabClick'),
};
