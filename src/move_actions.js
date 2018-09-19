import Coord from './coord'

class Move
  constructor: ->
    @able = true

  applyTerrainModifier: (terrain) ->
    @able = false unless terrain.passable

class MoveUpAction extends Move
  @COST = 100

  constructor: ->
    super()
    @name = "Move Up"

  exec: (entity) ->
    entity.pos = @plan(entity)

  plan: (entity) ->
    entity.pos.add(new Coord(0, -1))

  can: (entity) ->
    entity.pos.y > 0 && @able


class MoveDownAction extends Move
  @COST = 100

  constructor: ->
    super()
    @name = "Move Down"

  exec: (entity) ->
    entity.pos = @plan(entity)

  plan: (entity) ->
    entity.pos.add(new Coord(0, 1))

  can: (entity) ->
    entity.pos.y < (entity.game.maxY - 1) && @able


class MoveRightAction extends Move
  @COST = 100

  constructor: ->
    super()
    @name = "Move Right"

  exec: (entity) ->
    entity.pos = @plan(entity)

  plan: (entity) ->
    entity.pos.add(new Coord(1, 0))

  can: (entity) ->
    entity.pos.x < (entity.game.maxX - 1) && @able


class MoveLeftAction extends Move
  @COST = 100

  constructor: ->
    super()
    @name = "Move Left"

  exec: (entity) ->
    entity.pos = @plan(entity)

  plan: (entity) ->
    entity.pos.add(new Coord(-1, 0))

  can: (entity) ->
    entity.pos.x > 0 && @able


class StationateAction extends Move
  @COST = 0

  constructor: ->
    super()
    @name = "Stationate"

  exec: (entity) ->

  can: (entity) ->
    true

  plan: (entity) ->
    entity.pos

  applyTerrainModifier: () ->

export default {
  moveUp: MoveUpAction,
  moveDown: MoveDownAction,
  moveRight: MoveRightAction,
  moveLeft: MoveLeftAction,
  stationate: StationateAction
}
