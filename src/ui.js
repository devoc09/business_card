'use strict';
const path = require('path');
const React = require('react');
const {Box, Text} = require('ink');
const selectInput = require('ink-select-input').default;
const open = require('open');
const terminalImage = require('terminal-image');

const handleselect = item => {
    if (item.url){
        open(item.url);
    }

    if (item.action){
        item.action();
    }
};

const createItems = items => {
    for (const item of items) {
        item.key = item.url || item.label;
    }

    return items;
};

const items = createItems([
    {
        label: 'Website',
        url: 'https://devoc.ninja'
    },
    {
        label: 'Twitter',
        url: 'https://twitter.com/devoc_'
    },
    {
        label: 'GitHub',
        url: 'https://github.com/deovc09'
    },
    {
        label: '---------'
    },
    {
        label: 'Quit',
        action() {
            process.exit(); //eslint-disable-line
        }
    }
]);

module.exports = () => (
    <Box flexDirection="column">
        <Box marginBottom={1}>
            <Text>I'm a KIT student of web development.</Text>
        </Box>
        <selectInput items={items} onselect={handleSelect}/>
    </Box>
);
