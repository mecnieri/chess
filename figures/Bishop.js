import {
  upLeftDirection,
  upRightDirection,
  downRightDirection,
  downLeftDirection,
} from '../moving.js'

export default class Bishop {
  constructor(icon, color) {
    this.icon = icon
    this.color = color
    this.value = 3
    this.directions = [
      upLeftDirection,
      upRightDirection,
      downRightDirection,
      downLeftDirection,
    ]
  }
}
