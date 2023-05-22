import { Movements } from '../moving.js'

export default class Rook extends Movements {
  constructor(icon, color) {
    super()
    this.icon = icon
    this.color = color
    this.value = 5
    this.directions = [this.up, this.down, this.right, this.left]
  }
  getPossibles = id => {
    let possibles = []
    this.directions.forEach(direct =>
      possibles.push(...this.checkNextRecursivly(id, direct, this.color)),
    )
    return possibles
  }
}
