// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import Coord from './coord';
import MoveActions from './move_actions.coffee';

export default class Player {
  constructor(game) {
    this.game = game;
    this.pos = new Coord(1,1);
    this.color = '#E33';
    this.action = null;
    this.name = "Player";
    this.hp = 100;
  }

  draw() {}

  tick() {}

  moveUp() {
    return this.action = new MoveActions.moveUp();
  }

  moveDown() {
    return this.action = new MoveActions.moveDown();
  }

  moveRight() {
    return this.action = new MoveActions.moveRight();
  }

  moveLeft() {
    return this.action = new MoveActions.moveLeft();
  }

  stationate() {
    return this.action = new MoveActions.stationate();
  }
}
