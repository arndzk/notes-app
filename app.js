const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

const log = console.log;

// log(getNotes());
// log(chalk.green.bold.inverse('Success!'));

yargs
  .command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string',
      },
      body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string',
      },
    },
    handler: (argv) => {
      log(`Title: ${argv.title}`);
      log(`Body: ${argv.body}`);
    },
  })
  .command({
    command: 'remove',
    describe: 'Removes selected note',
    handler: () => {
      console.log('Removing note...');
    },
  })
  .command({
    command: 'list',
    describe: 'Lists all notes',
    handler: () => {
      console.log('Listing notes...');
    },
  })
  .command({
    command: 'read',
    describe: 'Reads selected note',
    handler: () => {
      console.log('Reading note...');
    },
  }).argv;

// const command = process.argv[2];

// if (command === 'add') {
//   log('Adding note...');
// } else if (command === 'remove') {
//   log('Removing note...');
// } else {
//   log(chalk.yellowBright.bold('Command not supported!'));
// }
