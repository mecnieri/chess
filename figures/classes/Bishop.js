import { Movements } from '../moving.js'

export default class Bishop extends Movements {
  constructor(icon, color) {
    super()
    this.icon = icon
    this.color = color
    this.value = 3
    this.directions = [this.upRight, this.upLeft, this.downRight, this.downLeft]
  }
  getPossibles = id => {
    let possibles = []
    this.directions.forEach(direct =>
      possibles.push(...this.direction(id, direct, this.color)),
    )
    return possibles
  }
}
