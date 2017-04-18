//
// CriticalReaction
// By AsciiFaceman / Activated Almond
//

// Game configuration
var gameConfig = {
  width: 800,
  height: 600,
  renderer: Phaser.AUTO,
  antialias: false,
  transparent: false,
  backgroundColor: '#0076a3',
  parent: 'phaser',
  //scaleMode: Phaser.ScaleManager.EXACT_FIT
}

var cursors;

// Create game object
var game = new Phaser.Game(gameConfg);

game.state.add('play', {
  preload: function() {

  },
  create: function () {
    // OK! Let's start the game!
    this.RunTime = this.game.time.events.loop(this.system.interval, this.GameLoop, this);
  },
  init: function() {
    // System Object
    this.system = {
      interval: 100,
      name: "CriticalReaction",
      version: 0.1,
      tag: function () {
        return (this.name + " v" + this.version);
      }
    }
  },
  render: function() {

  },
  GameLoop: function() {

  }
});

game.state.start('play');