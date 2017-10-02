import Piece from './piece.coffee'
import Tile from './tile.coffee'
import Raphael from 'raphael'

export default class Board
  constructor: (@size,@width,@height = null) ->
    @height = @height || @width

    paper_width = (@width * @size) + @width
    paper_height = (@height * @size) + @height

    @paper = Raphael(1, 1, paper_width, paper_height)
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
        tile = new Tile(x,y,@size,@paper,@,'#fcef5e','#FFF')
        @tiles.push tile

  drawPieces: ->
    for peca in @pieces
      peca.draw()

  drawTiles: ->
    for tile in @tiles
      tile.draw()

  newPiece: (x,y,cor) ->
    if @width >= x && @height >= y
      tile = @searchTile({x: x, y: y})
      piece = new Piece(x,y,cor,@paper,tile,@size * 0.3)
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
