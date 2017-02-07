Board = require('./boardjs/board.coffee')

class Game
  constructor: (@maxX, @maxY) ->
    @board = new Board(12,@maxY,@maxX)
    @entities = new Array

  init: ->
    @drawEntities()
    @board.draw()

  add_entity: (entity) ->
    @entities.push(entity)

  draw: ->
    @board.clean()
    @drawEntities()
    @board.drawPieces()

  drawEntities: ->
    for entity in @entities
      entity.draw()
      @board.newPiece(entity.pos.x,entity.pos.y,entity.color)

  tick: ->
    for entity in @entities
      entity.tick()
    @resolve()

  resolve: ->
    for entity in @entities
      action = entity.action
      action.exec(entity) if action.can(entity)

    @draw()

module.exports = Game
