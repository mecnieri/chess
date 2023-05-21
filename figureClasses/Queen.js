import {
  downDirection,
  leftDirection,
  rightDirection,
  upDirection,
  upLeftDirection,
  upRightDirection,
  downRightDirection,
  downLeftDirection,
} from '../moving.js'

export default class Queen {
  constructor(icon, color) {
    this.icon = icon
    this.color = color
    this.value = 9
    this.directions = [
      downDirection,
      leftDirection,
      rightDirection,
      upDirection,
      upLeftDirection,
      upRightDirection,
      downRightDirection,
      downLeftDirection,
    ]
  }
}
