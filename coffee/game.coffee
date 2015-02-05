Board = require('./boardjs/board.coffee')

class Game
  constructor: ->
    @board = new Board(25,10)
    @entities = new Array

  add_entity: (entity) ->
    @entities.push(entity)

  draw: ->
    @board.clean()
    for entity in @entities
      entity.draw()
      @board.newPiece(entity.pos.x,entity.pos.y,entity.color)
    @board.draw()

  tick: ->
    for entity in @entities
      entity.tick()
    @draw()

module.exports = Game
