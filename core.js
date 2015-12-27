// Copyright © 2015 Michael Dobekidis
// Licensed under the terms of the MIT License
var reg = {};
var GameState = function (game) {};
var slider;
// Load images and sounds
GameState.prototype.preload = function () {
  this.load.image('bg', "assets/diary-book.png");
  this.load.audio('track', ['assets/pencilsketching.mp3']);
  //
  this.game.load.bitmapFont('chillerBlack','assets/chillerBlack/chillerBlack.png', 'assets/chillerBlack/chillerBlack.fnt');
};

// Setup the example
GameState.prototype.create = function () {
  // Set stage background to something sky colored
  this.game.stage.backgroundColor = 0xcdcdcd;
  this.add.image(150, 0, "bg");
  reg.track = _game.add.audio('track');

  ///////////////////////// TYPEWRITER ///////////////////////////////////////////////////////
  var typewriter = new Typewriter();
  typewriter.init(_game, {
    x: 200,
    y: 40,
    fontFamily: "chillerBlack",
    fontSize: 28,
    maxWidth: 300,
    sound: reg.track,
    text: "In the times before pyramids, parthenon, atlantis or civilization, an already ancient evil existed, with the rise of the humans it saw an opportunity, to convert the nations of man into an image of it self, after all they were seen as weak and fragile. And so it started almost five thousand years ago to convert humans into the monstrosity it was. Soon after, civilizations were erased from history and memory and an undead monstrous army emerged."
  });
  typewriter.start();

};



// The update() method is called every frame
GameState.prototype.update = function () {

};

var _game = new Phaser.Game(1024, 600, Phaser.CANVAS, 'game');
_game.state.add('game', GameState, true);