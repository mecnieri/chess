import { Movements } from '../moving.js'

export default class Knight extends Movements {
  constructor(icon, color) {
    super()
    this.icon = icon
    this.color = color
    this.value = 3
    this.directions = [this.knightDirections]
  }
}
