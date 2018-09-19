import Coord from './coord';

class Move {
  constructor(cost) {
    this.able = true;
    this.cost = cost
  }

  applyTerrainModifier(terrain) {
    if (!terrain.passable) { return this.able = false; }
  }
}

class MoveUpAction extends Move {
  constructor() {
    super(100);
    this.name = "Move Up";
  }

  exec(entity) {
    entity.pos = this.plan(entity);
  }

  plan(entity) {
    return entity.pos.add(new Coord(0, -1));
  }

  can(entity) {
    return (entity.pos.y > 0) && this.able;
  }
}

class MoveDownAction extends Move {
  constructor() {
    super(100);
    this.name = "Move Down";
  }

  exec(entity) {
    entity.pos = this.plan(entity);
  }

  plan(entity) {
    return entity.pos.add(new Coord(0, 1));
  }

  can(entity) {
    return (entity.pos.y < (entity.game.maxY - 1)) && this.able;
  }
}

class MoveRightAction extends Move {
  constructor() {
    super(100);
    this.name = "Move Right";
  }

  exec(entity) {
    entity.pos = this.plan(entity);
  }

  plan(entity) {
    return entity.pos.add(new Coord(1, 0));
  }

  can(entity) {
    return (entity.pos.x < (entity.game.maxX - 1)) && this.able;
  }
}

class MoveLeftAction extends Move {
  constructor() {
    super(100);
    this.name = "Move Left";
  }

  exec(entity) {
    entity.pos = this.plan(entity);
  }

  plan(entity) {
    return entity.pos.add(new Coord(-1, 0));
  }

  can(entity) {
    return (entity.pos.x > 0) && this.able;
  }
}

class StationateAction extends Move {
  constructor() {
    super(0);
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

export default ({
  moveUp: MoveUpAction,
  moveDown: MoveDownAction,
  moveRight: MoveRightAction,
  moveLeft: MoveLeftAction,
  stationate: StationateAction
});
