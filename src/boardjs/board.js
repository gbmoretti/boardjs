// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS202: Simplify dynamic range loops
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import Piece from './piece';
import Tile from './tile';
import Raphael from 'raphael';

class ColorMapping {
  constructor(defaultColor, others) {
    this.defaultColor = defaultColor;
    this.others = others;
  }

  getTileColor(x,y) {
    if ((this.others[x] != null) && (this.others[x][y] != null)) {
      return this.others[x][y];
    }

    return this.defaultColor;
  }
}


export default class Board {
  constructor(size,width,height = null, tileMap) {
    this.size = size;
    this.width = width;
    this.height = height;
    this.height = this.height || this.width;

    this.map = new ColorMapping('#2b2b2b', tileMap);

    const paper_width = (this.width * this.size) + this.width;
    const paper_height = (this.height * this.size) + this.height;

    this.paper = Raphael(document.getElementById("canvas"), paper_width, paper_height);
    this.pieces = new Array();
    this.tiles = new Array();
    this.createTiles();
  }

  clean() {
    for (let piece of Array.from(this.pieces)) {
      piece.clean();
    }
    return this.pieces = new Array();
  }

  draw() {
    this.drawTiles();
    return this.drawPieces();
  }

  createTiles() {
    return __range__(0, this.width, true).map((x) =>
      (() => {
        const result = [];
        for (let y = 0, end = this.height, asc = 0 <= end; asc ? y <= end : y >= end; asc ? y++ : y--) {
          const color = this.map.getTileColor(x,y);
          const tile = new Tile(x,y,this.size,this.paper,this,color,'#FFF');
          result.push(this.tiles.push(tile));
        }
        return result;
      })());
  }

  drawPieces() {
    return Array.from(this.pieces).map((piece) =>
      piece.draw());
  }

  drawTiles() {
    return Array.from(this.tiles).map((tile) =>
      tile.draw());
  }

  newPiece(x,y,color) {
    if ((this.width >= x) && (this.height >= y)) {
      const piece = new Piece(x,y,color,this.paper,this.size * 0.3);
      this.pieces.push(piece);

      return piece;
    }
  }

  searchTile(coord) {
    return this.searchByCoord(coord,this.tiles);
  }

  searchByCoord(coord,array) {
    let obj = null;
    for (let o of Array.from(array)) {
      if ((o.x === coord.x) && (o.y === coord.y)) {
        obj = o;
        break;
      }
    }
    return obj;
  }
}

function __range__(left, right, inclusive) {
  let range = [];
  let ascending = left < right;
  let end = !inclusive ? right : ascending ? right + 1 : right - 1;
  for (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
    range.push(i);
  }
  return range;
}
