Piece = require './piece.coffee'
Tile = require './tile.coffee'
Raphael = require 'raphael-browserify'

class Board
  constructor: (@size,@width,@height = null) ->
    @height = @heigth || @width
    @paper = Raphael(1, 1, 800, 600)
    @pecas = new Array()
    @tiles = new Array()
    @drawBorder()

  clean: ->
    for peca in @pecas
      peca.element.remove()

  draw: ->
    @drawTiles()
    @drawPieces()

  onClick: (callback) ->
    @clickCallback = callback

  clickTrigger: (id,coord) ->
    peca = @searchPiece(coord)
    @clickCallback.call(@,coord,peca) unless @clickCallback is undefined

  drawBorder: ->
    for x in [1..@width]
      for y in [1..@height]
        tile = new Tile(x,y,@size,@paper,'#3D3','#000')
        @tiles.push tile

  drawPieces: ->
    for peca in @pecas
      peca.draw()


  drawTiles: ->
    for tile in @tiles
      tile.draw()

  newPiece: (x,y,cor) ->
    if @width >= x && @height
      console.log(@paper)
      peca = new Piece(x,y,cor,@paper,@searchTile(x,y))
      @pecas.push peca

      peca.draw()
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
