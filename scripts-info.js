#!/usr/bin/env node --harmony

const commands = Array.from(require('./commands.json'));

const scripts = commands.reduce((scripts, command) => {
	scripts[command.command] = `build-scripts ${command.command}`;
	return scripts;
}, {});

scripts['outdated'] = "npm outdated --depth 0";
scripts['shrinkwrap-dev'] = "npm shrinkwrap --dev";

console.log('Add scripts to your package.json file:');
console.log(JSON.stringify(scripts, null, 5));
