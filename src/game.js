import Board from './boardjs/board';
import InfoBoard from './info_board';
import Terrains from './terrains';
import TerrainMap from './terrain_map';

export default class Game {
  constructor(maxX, maxY, customTerrains) {
    this.maxX = maxX;
    this.maxY = maxY;
    this.terrains = new TerrainMap(customTerrains, this.maxX, this.maxY);
    this.board = new Board(12,this.maxY,this.maxX,this.terrains.toTileMap());
    this.entities = new Array;
  }

  init() {
    this.drawEntities();
    this.board.draw();
    this.updateInfoBoard();
  }

  add_entity(entity) {
    this.entities.push(entity);
  }

  draw() {
    this.board.clean();
    this.drawEntities();
    this.board.drawPieces();
  }

  drawEntities() {
    for (let entity of this.entities) {
      entity.draw();
      this.board.newPiece(entity.pos.x,entity.pos.y,entity.color);
    }
  }

  tick() {
    for (let entity of this.entities) {
      entity.tick();
    }
    this.resolve();
    this.updateInfoBoard();
  }

  resolve() {
    for (let entity of this.entities) {
      const { action } = entity;
      if (action.can(entity)) {
        const futureCoord = action.plan(entity);
        const terrain = this.terrains.get(futureCoord);
        if (terrain != null) { action.applyTerrainModifier(terrain); }
        if (action.can(entity)) { action.exec(entity); }
      }
    }

    this.draw();
  }

  updateInfoBoard() {
    const infoBoard = new InfoBoard(this.entities);
    infoBoard.draw();
  }
}
