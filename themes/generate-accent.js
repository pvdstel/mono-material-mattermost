#!/usr/bin/env node


// Parse arguments. Data arguments are non-option arguments
const args = process.argv.slice(2);
const dataArgs = [];
for (let i = 0; i < args.length; ++i) {
    const arg = args[i];
    if (!arg.startsWith('-')) dataArgs.push(arg);
}

if (dataArgs.length < 2) {
    console.log("At least two data arguments are required: a theme and the accent color.");
    process.exit(1);
}


// Define helper functions
const makeColorValue = (color) => color.startsWith('#') ? color : `#${color}`;


// Define what should be accented
const accented = [
    'sidebarTextActiveBorder',
    'sidebarTextActiveColor',
    'linkColor',
    'buttonBg',
    'mentionHighlightLink'
];


// Load the theme
const theme = require(`./${args[0]}`);


// Replace accented theme parts
const replaceAll = args.some(a => a === '-a' || a === '--all');
if (replaceAll) {
    for (let accent of accented) {
        theme[accent] = makeColorValue(dataArgs[1]);
    }
} else {
    const maxReplace = Math.min(accented.length, dataArgs.length - 1);
    for (let i = 0; i < maxReplace; ++i) {
        const accent = accented[i];
        const color = dataArgs[1 + i];
        if (color === '!' || color === 'skip') continue;

        theme[accent] = makeColorValue(color);
    }
}


// Prettify output if requested
const isPretty = args.some(a => a === '-p' || a === '--pretty');
if (isPretty) {
    console.log(JSON.stringify(theme, null, 4));
} else {
    console.log(JSON.stringify(theme));
}
