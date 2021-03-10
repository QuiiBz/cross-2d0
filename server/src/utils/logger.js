/* eslint-disable no-console */

// eslint-disable-next-line import/no-extraneous-dependencies
import chalk from 'chalk';

const log = (message, color) => {
    if (color in chalk) {
        console.log(chalk[color](message));
    } else {
        console.warn(`Color ${color} not found!`);
    }
};

export default log;
