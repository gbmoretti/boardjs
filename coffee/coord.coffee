class Coord
  constructor: (@x,@y) ->

  add: (other) ->
    new Coord(@x + other.x, @y + other.y)

module.exports = Coord
