import Coord from './coord.coffee'

class MoveUpAction
  @COST = 100

  exec: (entity) ->
    entity.pos = entity.pos.add(new Coord(0, -1))

  can: (entity) ->
    entity.pos.y > 0


class MoveDownAction
  @COST = 100

  exec: (entity) ->
    entity.pos = entity.pos.add(new Coord(0, 1))

  can: (entity) ->
    entity.pos.y < (entity.game.maxY - 1)

class MoveRightAction
  @COST = 100

  exec: (entity) ->
    entity.pos = entity.pos.add(new Coord(1, 0))

  can: (entity) ->
    entity.pos.x < (entity.game.maxX - 1)

class MoveLeftAction
  @COST = 100

  exec: (entity) ->
    entity.pos = entity.pos.add(new Coord(-1, 0))

  can: (entity) ->
    entity.pos.x > 0

class StationateAction
  @COST = 0

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
