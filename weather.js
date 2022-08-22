#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { saveKeyValue } from './services/storage.service.js';
import { printHelp, printError, printSuccess } from './services/log.service.js';

const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token);
        printSuccess('Token saved!');
    } catch (error) {
        printError(error.message);
    }
};

const initCli = () => {
    const args = getArgs(process.argv);

    if (args?.h) {
        printHelp();
    }

    if (args?.s) {
        saveKeyValue('city', args.s);
        printSuccess(args.s);
    }

    if (args?.t) {
        return saveToken(args.t);
    }
};

initCli();
