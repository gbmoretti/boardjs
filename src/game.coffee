import lo from 'lodash'
import Board from './boardjs/board.coffee'
import InfoBoard from './info_board.coffee'
import Terrains from './terrains.coffee'

export default class Game
  constructor: (@maxX, @maxY, customTerrains) ->
    @terrains = {}
    for x in [0..@maxX]
      @terrains[x] = {}
      for y in [0..@maxY]
        if customTerrains[x]? and customTerrains[x][y]?
          @terrains[x][y] = new Terrains[customTerrains[x][y]]
        else
          @terrains[x][y] = new Terrains['g']

    colorMapping = {}
    lo.forOwn(customTerrains, (line, x) =>
      lo.forOwn(line, (tile, y) =>
        colorMapping[x] ?= {}
        colorMapping[x][y] = @terrains[x][y].color
      )
    )

    @board = new Board(12,@maxY,@maxX,{
      default: new Terrains['g']().color,
      customs: colorMapping
    })

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
        console.log(futureCoord)
        terrain = @terrains[futureCoord.x][futureCoord.y]
        action.applyTerrainModifier(terrain) if terrain?
        action.exec(entity) if action.can(entity)

    @draw()

  updateInfoBoard: ->
    infoBoard = new InfoBoard(@entities)
    infoBoard.draw()
