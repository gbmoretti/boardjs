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
    @name = attrs.name or 'Unknow'
    @actionPoints = 0
    @action = new MoveActions.stationate()

  tick: ->
    @actionPoints += @speed
    @actionPoints = 100 if @actionPoints > 100

    possibleMoves = []
    for move in @moves
      possibleMoves.push(move) if move.COST <= @actionPoints

    randAction = possibleMoves[Math.floor(Math.random()*possibleMoves.length)]

    @action = new randAction()
    @actionPoints -= randAction.COST

  draw: ->
