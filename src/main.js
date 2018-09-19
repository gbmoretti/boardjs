/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
//libs/misc
import Module from './misc/module.coffee';
import Combokeys from 'combokeys';

//game
import Game from './game.coffee';
import Player from './player.coffee';
import Foe from './foe.coffee';
import Coord from './coord';

require("./style.css");

const stringMapToTiles = function(string) {
  // console.log(string)
  const tiles = {};
  const lines = string.split('\n');
  for (let y = 0; y < lines.length; y++) {
    const line = lines[y];
    const columns = line.split('');
    for (let x = 0; x < columns.length; x++) {
      const tile = columns[x];
      if (tile !== '-') {
        if (tiles[x] == null) { tiles[x] = {}; }
        tiles[x][y] = tile;
      }
    }
  }

  return tiles;
};

document.addEventListener('DOMContentLoaded', function() {

  const map = `\
gggwgggssg
gggwgggssg
gggwggssgg
gggggggssg
ggwggggssg
ggwgggggss
ggggggggss
gggwgggssg
gggwggssgg
gggwgggssg\
`;
  const tiles = stringMapToTiles(map);

  const game = new Game(10, 10, tiles);
  const keyboard = new Combokeys(document);

  const player = new Player(game);
  game.add_entity(player);

  const foes = [
    {name: 'Scout', hp: 20, speed: 100, pos: new Coord(5,5)},
    {name: 'Tank', hp: 80, speed: 30, pos: new Coord(9,3)}
  ];

  for (let foe of Array.from(foes)) {
    game.add_entity(new Foe(game, foe.pos, foe));
  }

  keyboard.bind('up', function() {
    player.moveUp();
    return game.tick();
  });

  keyboard.bind('down', function() {
    if (player) { player.moveDown(); }
    return game.tick();
  });

  keyboard.bind('left', function() {
    if (player) { player.moveLeft(); }
    return game.tick();
  });

  keyboard.bind('right', function() {
    if (player) { player.moveRight(); }
    return game.tick();
  });

  keyboard.bind('space', function() {
    if (player) { player.stationate(); }
    return game.tick();
  });

  return game.init();
});
