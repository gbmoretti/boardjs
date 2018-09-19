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
    for (let piece of this.pieces) {
      piece.clean();
    }
    this.pieces = new Array();
  }

  draw() {
    this.drawTiles();
    this.drawPieces();
  }

  createTiles() {
    for(let x = 0; x <= this.width; x++) {
      for(let y = 0; y <= this.height; y++) {
        const color = this.map.getTileColor(x,y);
        const tile = new Tile(x,y,this.size,this.paper,this,color,'#FFF');
        this.tiles.push(tile);
      }
    }
  }

  drawPieces() {
    this.pieces.map((piece) =>
      piece.draw());
  }

  drawTiles() {
    this.tiles.map((tile) =>
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
    for (let o of array) {
      if ((o.x === coord.x) && (o.y === coord.y)) {
        obj = o;
        break;
      }
    }
    return obj;
  }
}
