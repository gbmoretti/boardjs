#libs/misc
import Module from './misc/module.coffee'
import Combokeys from 'combokeys'

#game
import Game from './game.coffee'
import Player from './player.coffee'
import Foe from './foe.coffee'
import Coord from './coord.coffee'

document.addEventListener 'DOMContentLoaded', ->
  game = new Game(50, 50)
  keyboard = new Combokeys(document)

  player = new Player(game)
  game.add_entity(player)

  foes = [
    {hp: 20, speed: 100, pos: new Coord(49,43)},
    {hp: 80, speed: 30, pos: new Coord(49,33)}
  ]

  for foe in foes
    game.add_entity(new Foe(game, foe.pos, foe))

  keyboard.bind 'up', ->
    player.moveUp()
    game.tick()

  keyboard.bind 'down', ->
    player.moveDown()
    game.tick()

  keyboard.bind 'left', ->
    player.moveLeft()
    game.tick()

  keyboard.bind 'right', ->
    player.moveRight()
    game.tick()

  keyboard.bind 'space', ->
    player.stationate()
    game.tick()

  game.init()
