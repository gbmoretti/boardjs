import Coord from './coord.coffee'

class MoveUpAction
  @COST = 100

  constructor: ->
    @name = "Move Up"
    @able = true

  exec: (entity) ->
    entity.pos = @plan(entity)

  plan: (entity) ->
    entity.pos.add(new Coord(0, -1))

  can: (entity) ->
    entity.pos.y > 0 && @able

  applyTerrainModifier: (terrain) ->
    @able = false unless terrain.passable

class MoveDownAction
  @COST = 100

  constructor: ->
    @name = "Move Down"
    @able = true

  exec: (entity) ->
    entity.pos = @plan(entity)

  plan: (entity) ->
    entity.pos.add(new Coord(0, 1))

  can: (entity) ->
    entity.pos.y < (entity.game.maxY - 1) && @able

  applyTerrainModifier: (terrain) ->
    @able = false unless terrain.passable

class MoveRightAction
  @COST = 100

  constructor: ->
    @name = "Move Right"
    @able = true

  exec: (entity) ->
    entity.pos = @plan(entity)

  plan: (entity) ->
    entity.pos.add(new Coord(1, 0))

  can: (entity) ->
    entity.pos.x < (entity.game.maxX - 1) && @able

  applyTerrainModifier: (terrain) ->
    @able = false unless terrain.passable

class MoveLeftAction
  @COST = 100

  constructor: ->
    @name = "Move Left"
    @able = true

  exec: (entity) ->
    entity.pos = @plan(entity)

  plan: (entity) ->
    entity.pos.add(new Coord(-1, 0))

  can: (entity) ->
    entity.pos.x > 0 && @able

  applyTerrainModifier: (terrain) ->
    @able = false unless terrain.passable

class StationateAction
  @COST = 0

  constructor: ->
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
