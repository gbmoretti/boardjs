Module = require('./misc/module.coffee')
MovingEntity = require('./concerns/moving_entity.coffee')
Drawable = require('./concerns/drawable.coffee')
Tickable = require('./concerns/tickable.coffee')
Coord = require('./coord.coffee')

class Player extends Module
  @include MovingEntity
  @include Drawable
  @include Tickable

  constructor: (@game) ->
    @pos = new Coord(1,1)
    @color = '#E33'
    @action = null

module.exports = Player
