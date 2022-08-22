#!/usr/bin/env node
import { getArgs } from './helpers/args.js';

const initCli = () => {
    const args = getArgs(process.argv);

    if (args?.h) {
        console.log('help command');
    }

    if (args?.s) {
        console.log('set city command');
    }

    if (args?.t) {
        console.log('set token command');
    }
};

initCli();
