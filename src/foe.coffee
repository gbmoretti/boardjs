import MoveActions from './move_actions.coffee'

export default class Foe
  constructor: (@game, @pos, attrs) ->
    @color = '#3E3'
    @moves = [
      MoveActions.moveUp,
      MoveActions.moveDown,
      MoveActions.moveRight,
      MoveActions.moveLeft,
      MoveActions.stationate
    ]
    @hp = attrs.hp or 10
    @speed = attrs.speed or 50
    @actionPoints = 0

  tick: ->
    @actionPoints += @speed

    possibleMoves = []
    for move in @moves
      possibleMoves.push(move) if move.COST <= @actionPoints

    randAction = possibleMoves[Math.floor(Math.random()*possibleMoves.length)]

    @action = new randAction()
    @actionPoints -= randAction.COST

  draw: ->
