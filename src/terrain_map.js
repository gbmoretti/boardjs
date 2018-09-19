import lo from 'lodash';
import Terrains from './terrains';

export default class TerrainMap {
  constructor(customTerrains, maxX, maxY) {
    this.maxX = maxX;
    this.maxY = maxY;
    this.terrains = Array(this.maxX).fill().map(() => Array(this.maxY).fill());

    for (let xAxis = 0, end = this.maxX, asc = 0 <= end; asc ? xAxis < end : xAxis > end; asc ? xAxis++ : xAxis--) {
      for (let yAxis = 0, end1 = this.maxY, asc1 = 0 <= end1; asc1 ? yAxis < end1 : yAxis > end1; asc1 ? yAxis++ : yAxis--) {
        const customTerrain = customTerrains[xAxis][yAxis] || 'g';
        this.terrains[xAxis][yAxis] = new (Terrains[customTerrain]);
      }
    }
  }

  get(coord) {
    return this.terrains[coord.x][coord.y];
  }

  toTileMap() {
    const colorMapping = Array(this.maxX).fill().map(() => Array(this.maxY).fill());
    lo.forOwn(this.terrains, (line, x) => {
      return lo.forOwn(line, (tile, y) => {
        return colorMapping[x][y] = this.terrains[x][y].color;
      });
    });

    return colorMapping;
  }
}
