import { Movements } from '../moving.js'

export default class Knight extends Movements {
  constructor(icon, color) {
    super()
    this.icon = icon
    this.color = color
    this.value = 3
    this.directions = [
      this.knightUpRight,
      this.knightUpLeft,
      this.knightRightUp,
      this.knightRightDown,
      this.knightDownRight,
      this.knightLeftUp,
      this.knightLeftDown,
      this.knightDownLeft,
    ]
  }
  getPossibles = id => {
    let possibles = []
    this.directions.forEach(direct => possibles.push(direct(id, this.color)))
    return possibles
  }
}
