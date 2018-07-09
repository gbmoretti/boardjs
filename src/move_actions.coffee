import Coord from './coord.coffee'

class MoveUpAction
  @COST = 100

  constructor: ->
    @name = "Move Up"

  exec: (entity) ->
    entity.pos = plan(entity)

  plan: (entity) ->
    entity.pos.add(new Coord(0, -1))

  can: (entity) ->
    entity.pos.y > 0


class MoveDownAction
  @COST = 100

  constructor: ->
    @name = "Move Down"

  exec: (entity) ->
    entity.pos = entity.pos.add(new Coord(0, 1))

  can: (entity) ->
    entity.pos.y < (entity.game.maxY - 1)

class MoveRightAction
  @COST = 100

  constructor: ->
    @name = "Move Right"

  exec: (entity) ->
    entity.pos = entity.pos.add(new Coord(1, 0))

  can: (entity) ->
    entity.pos.x < (entity.game.maxX - 1)

class MoveLeftAction
  @COST = 100

  constructor: ->
    @name = "Move Left"

  exec: (entity) ->
    entity.pos = entity.pos.add(new Coord(-1, 0))

  can: (entity) ->
    entity.pos.x > 0

class StationateAction
  @COST = 0

  constructor: ->
    @name = "Stationate"

  exec: (entity) ->

  can: (entity) ->
    true

export default {
  moveUp: MoveUpAction,
  moveDown: MoveDownAction,
  moveRight: MoveRightAction,
  moveLeft: MoveLeftAction,
  stationate: StationateAction
}
