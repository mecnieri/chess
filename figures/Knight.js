import { knightDirections } from '../moving.js'

export default class Knight {
  constructor(icon, color) {
    this.icon = icon
    this.color = color
    this.value = 3
    this.directions = [knightDirections]
  }
}
