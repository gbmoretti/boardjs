import Piece from './piece.coffee'
import Tile from './tile.coffee'
import Raphael from 'raphael'

class ColorMapping
  constructor: (@defaultColor, @others) ->

  getTileColor: (x,y) ->
    if @others[x]? and @others[x][y]?
      return @others[x][y]

    return @defaultColor


export default class Board
  constructor: (@size,@width,@height = null, tileMap) ->
    @height = @height || @width

    @map = new ColorMapping('#2b2b2b', tileMap);

    paper_width = (@width * @size) + @width
    paper_height = (@height * @size) + @height

    @paper = Raphael(document.getElementById("canvas"), paper_width, paper_height)
    @pieces = new Array()
    @tiles = new Array()
    @createTiles()

  clean: ->
    for piece in @pieces
      piece.clean()
    @pieces = new Array()

  draw: ->
    @drawTiles()
    @drawPieces()

  createTiles: ->
    for x in [0..@width]
      for y in [0..@height]
        color = @map.getTileColor(x,y)
        tile = new Tile(x,y,@size,@paper,@,color,'#FFF')
        @tiles.push tile

  drawPieces: ->
    for piece in @pieces
      piece.draw()

  drawTiles: ->
    for tile in @tiles
      tile.draw()

  newPiece: (x,y,color) ->
    if @width >= x && @height >= y
      piece = new Piece(x,y,color,@paper,@size * 0.3)
      @pieces.push piece

      return piece

  searchTile: (coord) ->
    @searchByCoord(coord,@tiles)

  searchByCoord: (coord,array) ->
    obj = null
    for o in array
      if o.x == coord.x && o.y == coord.y
        obj = o
        break
    obj
