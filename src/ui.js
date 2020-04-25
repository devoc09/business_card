'use strict';
const path = require('path');
const React = require('react');
const {Box, Text} = require('ink');
const SelectInput = require('ink-select-input').default;
const open = require('open');
const terminalImage = require('terminal-image');

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
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
		url: 'https://github.com/devoc09'
	},
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: '---------'
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line
		}
	}
]);

module.exports = () => (
	<Box flexDirection="column">
		<Box marginBottom={1}>
			<Text>I am KIT student of web development.</Text>
		</Box>
		<SelectInput items={items} onSelect={handleSelect}/>
	</Box>
);
