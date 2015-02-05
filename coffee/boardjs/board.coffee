Piece = require './piece.coffee'
Tile = require './tile.coffee'
Raphael = require 'raphael-browserify'

class Board
  constructor: (@size,@width,@height = null) ->
    @height = @heigth || @width
    @paper = Raphael(1, 1, 800, 600)
    @pieces = new Array()
    @tiles = new Array()
    @createTiles()

  clean: ->
    @pieces = new Array()

  draw: ->
    @drawTiles()
    @drawPieces()

  onClick: (callback) ->
    @clickCallback = callback

  click: (event,source) ->
    data = {event: event, source: source}
    @clickCallback.call(@,data) unless @clickCallback is undefined

  createTiles: ->
    for x in [1..@width]
      for y in [1..@height]
        tile = new Tile(x,y,@size,@paper,@,'#fcef5e','#000')
        @tiles.push tile

  drawPieces: ->
    for peca in @pieces
      peca.draw()


  drawTiles: ->
    for tile in @tiles
      tile.draw()

  newPiece: (x,y,cor) ->
    if @width >= x && @height
      tile = @searchTile({x: x, y: y})
      peca = new Piece(x,y,cor,@paper,tile)
      @pieces.push peca

      #peca.draw()
      return peca

  searchPiece: (coord) ->
    @searchByCoord(coord,@pieces)

  searchTile: (coord) ->
    @searchByCoord(coord,@tiles)

  searchByCoord: (coord,array) ->
    obj = null
    for o in array
      if o.x == coord.x && o.y == coord.y
        obj = o
        break
    obj

module.exports = Board
