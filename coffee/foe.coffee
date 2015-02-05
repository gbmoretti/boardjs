Module = require('./misc/module.coffee')
MovingEntity = require('./concerns/moving_entity.coffee')
Drawable = require('./concerns/drawable.coffee')
Coord = require('./coord.coffee')

class Foe extends Module
  @include MovingEntity
  @include Drawable

  constructor: ->
    @pos = new Coord(10,10)
    @color = '#3E3'
    @moves = ['move_up', 'move_down', 'move_left', 'move_right']

  tick: ->
    rand_action = @moves[Math.floor(Math.random()*@moves.length)]
    console.log rand_action
    @[rand_action]()

module.exports = Foe
