import { Movements } from '../moving.js'

export default class Queen extends Movements {
  constructor(icon, color) {
    super()
    this.icon = icon
    this.color = color
    this.value = 9
    this.directions = [
      this.up,
      this.down,
      this.right,
      this.left,
      this.upRight,
      this.upLeft,
      this.downRight,
      this.downLeft,
    ]
  }
  getPossibles = id => {
    let possibles = []
    this.directions.forEach(direct =>
      possibles.push(...this.direction(id, direct, this.color)),
    )
    return possibles
  }
}
