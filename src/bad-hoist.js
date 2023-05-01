const debugFunc = () => {
  time = 'today';
  console.log('Hello ' + name + ", are you feeling " + mood + ' ' + time + '?');
  var name = 'Zo';
  var mood = 'happy';

  console.log("Oh no, I'm sorry you're feeling " + mood + ' ' + time + '.');
  mood = 'sad';
};

debugFunc();

module.exports = {
  debugFunc,
};
