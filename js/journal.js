//business logic
function Entry(entryLog) {
  this.log = entryLog;
}

Entry.prototype.wordCount = function(body) {
  var count = 0;
  for (var i = 0; i <= body.length; i++) {
    if (body.charAt(i) == " ") {
      count ++;
    }
  }
  return count + 1;
}

Entry.prototype.vowelCount = function(body) {
  var totalVowels = 0;
  var totalConsonants = 0;
  for (var i = 0; i < body.length; i++) {
    if (body.charAt(i).match(/[aeiou]/gi)) {
      totalVowels++;
    }
    else if (body.charAt(i).match(/[qwrtpsdfghjklzxcvbnmy]/gi)) {
      totalConsonants++;
    }
  }
  var output = [totalVowels, totalConsonants];
  return output;
}
//front end logic

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
