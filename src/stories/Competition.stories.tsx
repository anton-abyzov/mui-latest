import React from 'react';
import {Competition, CompetitionProps} from '../components/Competition';
import {Meta, Story} from "@storybook/react";

export default {
    title: 'Components/Competition',
    component: Competition,
} as Meta;

const Template: Story<CompetitionProps> = (args) => <Competition {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'Competition A',
};
