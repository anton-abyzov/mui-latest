const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-create-react-app',
        '@storybook/addon-mdx-gfm',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: true,
    },
    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            'next/image': path.resolve(__dirname, './mocks/nextImageMock.js'),
            'next/link': path.resolve(__dirname, './mocks/nextLinkMock.js'),
            'next/router': path.resolve(__dirname, './mocks/nextRouterMock.js'),
            'react-i18next': path.resolve(__dirname, './mocks/reactI18nextMock.js'),
            'react-datepicker': path.resolve(__dirname, './mocks/reactDatepickerMock.js'),
        };
        return config;
    },
};
