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
      this.knightDownLeft,
      this.knightLeftUp,
      this.knightLeftDown,
    ]
  }
  getPossibles = id => {
    let possibles = []
    console.log(possibles)
    this.directions.forEach(direct => possibles.push(direct(id, this.color)))
    console.log(possibles)
    return possibles
  }
}
