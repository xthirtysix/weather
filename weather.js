#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printError, printSuccess } from './services/log.service.js';

const initCli = () => {
    const args = getArgs(process.argv);

    if (args?.h) {
        printHelp();
    }

    if (args?.s) {
        printSuccess(args.s);
    }

    if (args?.t) {
        printSuccess(args.t);
    }
};

initCli();
