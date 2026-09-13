
(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

var output = ""; // naya line

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
    output = output + "Good Bye " + names[i] + "\n"; // naya line
  } else {
    helloSpeaker.speak(names[i]);
    output = output + "Hello " + names[i] + "\n"; // naya line
  }
}

alert(output); // ye sabse important line
})();
