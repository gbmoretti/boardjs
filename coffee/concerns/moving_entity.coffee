Coord = require('../coord.coffee')

MovingEntity =
  move_up: ->
    move = new Coord(0,-1)
    next = @pos.add(move)
    @pos = next unless next.y == 0

  move_down: ->
    move = new Coord(0,1)
    next = @pos.add(move)
    @pos = next unless next.y == 11

  move_right: ->
    move = new Coord(1,0)
    next = @pos.add(move)
    @pos = next unless next.x == 11

  move_left: ->
    move = new Coord(-1,0)
    next = @pos.add(move)
    @pos = next unless next.x == 0

module.exports = MovingEntity
