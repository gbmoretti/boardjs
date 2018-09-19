// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import MoveActions from './move_actions';

export default class Foe {
  constructor(game, pos, attrs) {
    this.game = game;
    this.pos = pos;
    this.color = '#3E3';
    this.moves = [
      MoveActions.moveUp,
      MoveActions.moveDown,
      MoveActions.moveRight,
      MoveActions.moveLeft,
      MoveActions.stationate
    ];
    this.hp = attrs.hp || 10;
    this.speed = attrs.speed || 50;
    this.name = attrs.name || 'Unknow';
    this.actionPoints = 0;
    this.action = new MoveActions.stationate();
  }

  tick() {
    this.actionPoints += this.speed;
    if (this.actionPoints > 100) { this.actionPoints = 100; }

    const possibleMoves = [];
    for (let move of Array.from(this.moves)) {
      if (move.COST <= this.actionPoints) { possibleMoves.push(move); }
    }

    const randAction = possibleMoves[Math.floor(Math.random()*possibleMoves.length)];

    this.action = new randAction();
    return this.actionPoints -= randAction.COST;
  }

  draw() {}
}
