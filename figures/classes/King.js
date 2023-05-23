import { Movements } from '../moving.js'

export default class King extends Movements {
  constructor(icon, color) {
    super()
    this.icon = icon
    this.color = color
    this.directions = [
      this.kingUp,
      this.kingDown,
      this.kingRight,
      this.kingLeft,
      this.kingUpRight,
      this.kingUpLeft,
      this.kingDownRight,
      this.kingDownLeft,
    ]
  }
  getPossibles = id => {
    let possibles = []
    this.directions.forEach(direct => possibles.push(direct(id, this.color)))
    return possibles
  }
}
