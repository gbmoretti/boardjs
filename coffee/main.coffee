#libs/misc
$ = require 'jquery-browserify'
Module = require './misc/module.coffee'
Combokeys = require 'combokeys'

#game
Game = require './game.coffee'
Player = require './player.coffee'
Foe = require './foe.coffee'

$(document).ready ->
  game = new Game(50, 50)
  keyboard = new Combokeys(document)
  player = new Player(game)
  game.add_entity(player)
  game.add_entity(new Foe(game))


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

  game.init()
