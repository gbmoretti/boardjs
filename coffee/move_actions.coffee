Coord = require('./coord')

class MoveUpAction
  exec: (entity) ->
    entity.pos = entity.pos.add(new Coord(0, -1))

  can: (entity) ->
    entity.pos.y > 0

class MoveDownAction
  exec: (entity) ->
    entity.pos = entity.pos.add(new Coord(0, 1))

  can: (entity) ->
    entity.pos.y < (entity.game.maxY - 1)

class MoveRightAction
  exec: (entity) ->
    entity.pos = entity.pos.add(new Coord(1, 0))

  can: (entity) ->
    entity.pos.x < (entity.game.maxX - 1)

class MoveLeftAction
  exec: (entity) ->
    entity.pos = entity.pos.add(new Coord(-1, 0))

  can: (entity) ->
    entity.pos.x > 0

module.exports = {
  up: MoveUpAction
  down: MoveDownAction
  left: MoveLeftAction
  right: MoveRightAction
}
