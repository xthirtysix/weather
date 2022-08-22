import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(`${chalk.bgRed(chalk.black(' ERROR '))} ${error}`);
};

const printSuccess = (message) => {
    console.log(`${chalk.bgGreen(chalk.black(' SUCCESS '))} ${message}`);
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(chalk.black(' HELP '))}
         Without parameters - weather output
         -s [CITY] - to set city
         -t [API_KEY] - to set token`,
    );
};

export { printError, printSuccess, printHelp };
