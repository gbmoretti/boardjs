$(document).ready -> 
  tabuleiro = new Board(25,10)
  
  tabuleiro.onClick (data,piece) ->
    console.log piece
    
  p1 = tabuleiro.newPiece(1,1,"#E33")
  p2 = tabuleiro.newPiece(3,3,"#33E")
  
  tabuleiro.draw()
