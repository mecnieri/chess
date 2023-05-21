import {
  downDirection,
  leftDirection,
  rightDirection,
  upDirection,
} from '../moving.js'

export default class Rook {
  constructor(icon, color) {
    this.icon = icon
    this.color = color
    this.value = 5
    this.directions = [
      downDirection,
      leftDirection,
      rightDirection,
      upDirection,
    ]
  }
}
