#!/usr/bin/env node
'use strict';
const path = require('path');
const meow = require('meow');
const termImg = require('term-img');
const terminalImage = require('terminal-image');
const importJsx = require('import-jsx');
const React = require('react');
const {render} = require('ink');

const ui = importJsx('./ui');

meow(`
    Usage
        $ devoc
`);

const fallback = async () => {
  const image = await terminalImage.file(path.join(__dirname, 'devoc.PNG'));
  console.log(image);
};

termImg(path.join(__dirname, 'devoc_card.PNG'), {fallback});

render(React.createElement(ui));
