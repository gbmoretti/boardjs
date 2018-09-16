import lo from 'lodash'
import Terrains from './terrains.coffee'

export default class TerrainMap
  constructor: (customTerrains, @maxX, @maxY) ->
    @terrains = Array(@maxX).fill().map(() => Array(@maxY).fill())

    for xAxis in [0...@maxX]
      for yAxis in [0...@maxY]
        customTerrain = customTerrains[xAxis][yAxis] or 'g'
        @terrains[xAxis][yAxis] = new Terrains[customTerrain]

  get: (coord) ->
    @terrains[coord.x][coord.y]

  toTileMap: ->
    colorMapping = Array(@maxX).fill().map(() => Array(@maxY).fill())
    lo.forOwn(@terrains, (line, x) =>
      lo.forOwn(line, (tile, y) =>
        colorMapping[x][y] = @terrains[x][y].color
      )
    )

    colorMapping
