console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title: title,
    body: body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);  
  } catch (e) {

  }

  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var getAll = () => {
  console.log('Getting all notes');
};

var removeNote = (title) => {
  console.log('Removing note', title);
}

var getNote = (title) => {
  console.log('Getting note', title);
}

module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote
};