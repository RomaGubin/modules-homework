const game = new Game();
game.start();

const { default: Game } = require('./game');
const { GameSavingData } = require('./game');
const { readGameSaving: loadGame } = require('./game');
const { writeGameSaving: saveGame } = require('./game');

console.log('app worked')