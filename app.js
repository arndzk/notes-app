const yargs = require('yargs');
const notes = require('./notes');

const log = console.log;

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
      notes.addNote(argv.title, argv.body);
    },
  })
  .command({
    command: 'remove',
    describe: 'Removes selected note',
    builder: {
      title: {
        describe: 'Title of note to be deleted',
        demandOption: true,
        type: 'string',
      },
    },
    handler: (argv) => {
      notes.removeNote(argv.title);
    },
  })
  .command({
    command: 'list',
    describe: 'Lists all notes',
    handler: () => {
      notes.listNotes();
    },
  })
  .command({
    command: 'read',
    describe: 'Reads selected note',
    builder: {
      title: {
        describe: 'Title of note to be read',
        demandOption: true,
        type: 'string',
      },
    },
    handler: (argv) => {
      notes.readNote(argv.title);
    },
  }).argv;
