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
//front end logic

$(document).ready(function() {
  $('.journal').submit(function(event) {
    event.preventDefault();
    var body = $('#body').val();
    var title = $('#title').val();
    var newEntry = new Entry();
    var newCount = newEntry.wordCount(body);
    $('#output').append(title + "<br>" + newCount + "<br>");
    // $('.journal').append(body);
  });
});
