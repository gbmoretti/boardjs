/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import Coord from './coord';

class Move {
  constructor() {
    this.able = true;
  }

  applyTerrainModifier(terrain) {
    if (!terrain.passable) { return this.able = false; }
  }
}

class MoveUpAction extends Move {
  static initClass() {
    this.COST = 100;
  }

  constructor() {
    super();
    this.name = "Move Up";
  }

  exec(entity) {
    return entity.pos = this.plan(entity);
  }

  plan(entity) {
    return entity.pos.add(new Coord(0, -1));
  }

  can(entity) {
    return (entity.pos.y > 0) && this.able;
  }
}
MoveUpAction.initClass();


class MoveDownAction extends Move {
  static initClass() {
    this.COST = 100;
  }

  constructor() {
    super();
    this.name = "Move Down";
  }

  exec(entity) {
    return entity.pos = this.plan(entity);
  }

  plan(entity) {
    return entity.pos.add(new Coord(0, 1));
  }

  can(entity) {
    return (entity.pos.y < (entity.game.maxY - 1)) && this.able;
  }
}
MoveDownAction.initClass();


class MoveRightAction extends Move {
  static initClass() {
    this.COST = 100;
  }

  constructor() {
    super();
    this.name = "Move Right";
  }

  exec(entity) {
    return entity.pos = this.plan(entity);
  }

  plan(entity) {
    return entity.pos.add(new Coord(1, 0));
  }

  can(entity) {
    return (entity.pos.x < (entity.game.maxX - 1)) && this.able;
  }
}
MoveRightAction.initClass();


class MoveLeftAction extends Move {
  static initClass() {
    this.COST = 100;
  }

  constructor() {
    super();
    this.name = "Move Left";
  }

  exec(entity) {
    return entity.pos = this.plan(entity);
  }

  plan(entity) {
    return entity.pos.add(new Coord(-1, 0));
  }

  can(entity) {
    return (entity.pos.x > 0) && this.able;
  }
}
MoveLeftAction.initClass();


class StationateAction extends Move {
  static initClass() {
    this.COST = 0;
  }

  constructor() {
    super();
    this.name = "Stationate";
  }

  exec(entity) {}

  can(entity) {
    return true;
  }

  plan(entity) {
    return entity.pos;
  }

  applyTerrainModifier() {}
}
StationateAction.initClass();

export default ({
  moveUp: MoveUpAction,
  moveDown: MoveDownAction,
  moveRight: MoveRightAction,
  moveLeft: MoveLeftAction,
  stationate: StationateAction
});
