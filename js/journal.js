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
};

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
};

exports.journalModule = Entry;
