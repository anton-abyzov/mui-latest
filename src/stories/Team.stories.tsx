// src/components/Team.stories.tsx
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import Team, { TeamProps } from '../components/Team';
import {Meta, Story} from "@storybook/react";

export default {
    title: 'Example/Team',
    component: Team,
} as Meta;

const Template: Story<TeamProps> = (args) => (
    // <ThemeProvider theme={theme}>
        <Team {...args} />
    // </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
    name: 'Team A',
    image: 'https://via.placeholder.com/100',
};
