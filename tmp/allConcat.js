//front end logic

var Entry = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('.journal').submit(function(event) {
    event.preventDefault();
    var body = $('#body').val();
    var title = $('#title').val();
    var newEntry = new Entry();
    var newCount = newEntry.wordCount(body);
    var vowelNumbers = newEntry.vowelCount(body);
    $('#output').append(title + "<br>" + newCount + "<br>" + vowelNumbers[0] + "<br>" + vowelNumbers[1]);
    // $('.journal').append(body);
  });
});
