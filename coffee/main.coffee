#libs/misc
$ = require 'jquery-browserify'
Module = require './misc/module.coffee'
Combokeys = require 'combokeys'

#boardjs
Board = require './boardjs/board.coffee'

#game
Coord = require './coord.coffee'
Game = require './game.coffee'
Player = require './player.coffee'
Foe = require './foe.coffee'

$(document).ready ->
  game = new Game()
  keyboard = new Combokeys(document)
  player = new Player()
  game.add_entity(player)
  game.add_entity(new Foe())


  keyboard.bind 'up', ->
    player.move_up()
    game.tick()

  keyboard.bind 'down', ->
    player.move_down()
    game.tick()

  keyboard.bind 'left', ->
    player.move_left()
    game.tick()

  keyboard.bind 'right', ->
    player.move_right()
    game.tick()

  game.draw()

