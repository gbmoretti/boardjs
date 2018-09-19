class Grass
  constructor: () ->
    @color = '#43b659'
    @mov_mod = 1
    @passable = true

class Water
  constructor: () ->
    @color = '#000aff'
    @mov_mod = 1.5
    @passable = true

class Wall
  constructor: () ->
    @color = '#7a7a79'
    @mov_mod = 1
    @passable = false

export default {
  'g': Grass,
  'w': Wall,
  's': Water
}
