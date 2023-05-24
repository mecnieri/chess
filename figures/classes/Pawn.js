import { Movements } from '../moving.js'

export default class Pawn extends Movements {
  constructor(icon, color) {
    super()
    this.icon = icon
    this.color = color
    this.directionsFirst = [
      this.pawnUp,
      this.pawnDoubleUp,
      this.pawnKillsUpRight,
      this.pawnKillsUpLeft,
    ]
    this.directionsNotFirst = [
      this.pawnUp,
      this.pawnKillsUpRight,
      this.pawnKillsUpLeft,
    ]
    this.isItFirstMove = true
    this.name = 'pawn'
  }
  firstMoveMade = () => (this.isItFirstMove = false)
  getPossibles = id => {
    let possibles = []
    if (this.isItFirstMove) {
      this.directionsFirst.forEach(direct =>
        possibles.push(direct(id, this.color)),
      )
    } else {
      this.directionsNotFirst.forEach(direct =>
        possibles.push(direct(id, this.color)),
      )
    }
    return possibles
  }
}
