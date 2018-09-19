// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import Board from './boardjs/board.coffee';
import InfoBoard from './info_board.coffee';
import Terrains from './terrains.coffee';
import TerrainMap from './terrain_map.coffee';

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
    return this.updateInfoBoard();
  }

  add_entity(entity) {
    return this.entities.push(entity);
  }

  draw() {
    this.board.clean();
    this.drawEntities();
    return this.board.drawPieces();
  }

  drawEntities() {
    return (() => {
      const result = [];
      for (let entity of Array.from(this.entities)) {
        entity.draw();
        result.push(this.board.newPiece(entity.pos.x,entity.pos.y,entity.color));
      }
      return result;
    })();
  }

  tick() {
    for (let entity of Array.from(this.entities)) {
      entity.tick();
    }
    this.resolve();
    return this.updateInfoBoard();
  }

  resolve() {
    for (let entity of Array.from(this.entities)) {
      const { action } = entity;
      if (action.can(entity)) {
        const futureCoord = action.plan(entity);
        const terrain = this.terrains.get(futureCoord);
        if (terrain != null) { action.applyTerrainModifier(terrain); }
        if (action.can(entity)) { action.exec(entity); }
      }
    }

    return this.draw();
  }

  updateInfoBoard() {
    const infoBoard = new InfoBoard(this.entities);
    return infoBoard.draw();
  }
}
