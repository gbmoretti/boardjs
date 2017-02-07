Module = require('./misc/module.coffee')
MovingEntity = require('./concerns/moving_entity.coffee')
Drawable = require('./concerns/drawable.coffee')
Coord = require('./coord.coffee')

class Foe extends Module
  @include MovingEntity
  @include Drawable

  constructor: (@game) ->
    @pos = new Coord(2,2)
    @color = '#3E3'
    @moves = ['moveUp', 'moveDown', 'moveLeft', 'moveRight']

  tick: ->
    randAction = @moves[Math.floor(Math.random()*@moves.length)]
    @[randAction]()

module.exports = Foe
