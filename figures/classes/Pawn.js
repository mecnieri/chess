import { Movements } from '../moving.js'

export default class Pawn extends Movements {
  constructor(icon, color) {
    super()
    this.name = 'pawn'
    this.icon = icon
    this.color = color
    this.isItFirstMove = true
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
