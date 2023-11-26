import * as gameExports from "./game";

const { 
  Game, 
  GameSavingData, 
  readGameSaving: loadGame, 
  writeGameSaving: saveGame 
} = gameExports;

const game = new Game();
game.start();

console.log('app worked');