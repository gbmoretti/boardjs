#libs/misc
import Module from './misc/module.coffee'
import Combokeys from 'combokeys'

#game
import Game from './game.coffee'
import Player from './player.coffee'
import Foe from './foe.coffee'
import Coord from './coord.coffee'

require("./style.css")

document.addEventListener 'DOMContentLoaded', ->

  game = new Game(10, 10)
  keyboard = new Combokeys(document)

  player = new Player(game)
  game.add_entity(player)

  foes = [
    {name: 'Scout', hp: 20, speed: 100, pos: new Coord(5,5)},
    {name: 'Tank', hp: 80, speed: 30, pos: new Coord(9,3)}
  ]

  for foe in foes
    game.add_entity(new Foe(game, foe.pos, foe))

  keyboard.bind 'up', ->
    player.moveUp()
    game.tick()

  keyboard.bind 'down', ->
    player.moveDown() if player
    game.tick()

  keyboard.bind 'left', ->
    player.moveLeft() if player
    game.tick()

  keyboard.bind 'right', ->
    player.moveRight() if player
    game.tick()

  keyboard.bind 'space', ->
    player.stationate() if player
    game.tick()

  game.init()
