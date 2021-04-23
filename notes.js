const fs = require('fs');
const chalk = require('chalk');

const log = console.log;

const getNotes = () => {
  return 'Your notes...';
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => {
    return note.title === title;
  });
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    log(chalk.green.bold.inverse('New note added!'));
  } else {
    log(chalk.red.bold.inverse('Note title taken!'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => {
    return note.title !== title;
  });
  if (updatedNotes.length < notes.length) {
    saveNotes(updatedNotes);
    log(chalk.green.bold.inverse('Note removed!'));
  } else {
    log(chalk.red.bold.inverse('No such note found!'));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  log(chalk.white.bold.inverse('Your notes:'));
  notes.forEach((note) => {
    log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => {
    return note.title === title;
  });
  if (noteToRead) {
    log(chalk.white.bold(noteToRead.title));
    log(noteToRead.body);
  } else {
    log(chalk.red.bold.inverse('No such note found!'));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
