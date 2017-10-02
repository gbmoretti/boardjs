import Coord from './coord.coffee'
import MoveActions from './move_actions.coffee'

export default class Player
  constructor: (@game) ->
    @pos = new Coord(1,1)
    @color = '#E33'
    @action = null

  draw: ->

  tick: ->

  moveUp: ->
    @action = new MoveActions.moveUp()

  moveDown: ->
    @action = new MoveActions.moveDown()

  moveRight: ->
    @action = new MoveActions.moveRight()

  moveLeft: ->
    @action = new MoveActions.moveLeft()

  stationate: ->
    @action = new MoveActions.stationate()
