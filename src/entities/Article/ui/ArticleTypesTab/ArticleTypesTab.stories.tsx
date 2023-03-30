import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleTypesTab } from './ArticleTypesTab';

export default {
    title: 'entities/Article/ArticleTypeTab',
    component: ArticleTypesTab,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTypesTab>;

const Template: ComponentStory<typeof ArticleTypesTab> = (args) => <ArticleTypesTab {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
