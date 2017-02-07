Coord = require('../coord.coffee')
MoveActions = require('../move_actions')

MovingEntity =
  moveUp: ->
    @action = new MoveActions.up()

  moveDown: ->
    @action = new MoveActions.down()

  moveRight: ->
    @action = new MoveActions.right()

  moveLeft: ->
    @action = new MoveActions.left()

module.exports = MovingEntity
