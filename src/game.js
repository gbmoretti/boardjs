import Board from './boardjs/board.coffee'
import InfoBoard from './info_board.coffee'
import Terrains from './terrains.coffee'
import TerrainMap from './terrain_map.coffee'

export default class Game
  constructor: (@maxX, @maxY, customTerrains) ->
    @terrains = new TerrainMap(customTerrains, @maxX, @maxY)
    @board = new Board(12,@maxY,@maxX,@terrains.toTileMap())
    @entities = new Array

  init: ->
    @drawEntities()
    @board.draw()
    @updateInfoBoard()

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
    @updateInfoBoard()

  resolve: ->
    for entity in @entities
      action = entity.action
      if action.can(entity)
        futureCoord = action.plan(entity)
        terrain = @terrains.get(futureCoord)
        action.applyTerrainModifier(terrain) if terrain?
        action.exec(entity) if action.can(entity)

    @draw()

  updateInfoBoard: ->
    infoBoard = new InfoBoard(@entities)
    infoBoard.draw()
