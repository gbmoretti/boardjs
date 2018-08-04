import lo from 'lodash'
import Board from './boardjs/board.coffee'
import InfoBoard from './info_board.coffee'

TERRAIN_COLOR = {
  'g': '#43b659',
  'w': '#7a7a79',
  's': '#000aff'
}

export default class Game
  constructor: (@maxX, @maxY, tiles) ->
    colorMapping = {}
    lo.forOwn(tiles, (line, x) ->
      lo.forOwn(line, (tile, y) ->
        colorMapping[x] ?= {}
        colorMapping[x][y] = TERRAIN_COLOR[tile]
      )
    )

    @board = new Board(12,@maxY,@maxX,{
      default: TERRAIN_COLOR['g'],
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
      action.exec(entity) if action.can(entity)

    @draw()

  updateInfoBoard: ->
    infoBoard = new InfoBoard(@entities)
    infoBoard.draw()
