(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

exports.journalModule = Entry; 

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
