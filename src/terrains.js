class Grass {
  constructor() {
    this.color = '#43b659';
    this.mov_mod = 1;
    this.passable = true;
  }
}

class Water {
  constructor() {
    this.color = '#000aff';
    this.mov_mod = 1.5;
    this.passable = true;
  }
}

class Wall {
  constructor() {
    this.color = '#7a7a79';
    this.mov_mod = 1;
    this.passable = false;
  }
}

export default ({
  'g': Grass,
  'w': Wall,
  's': Water
});
