// check next square:
//  is there friend piece ?
//  is there enemy piece ?

export class Movements {
  constructor() {
    this.row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    this.direction = this.direction.bind(this)
  }

  checkNextRecursivly = (currentPosition, func, color) => {
    let possibles = []
    const checkNext = (currentPosition, func, color) => {
      let nextSquare = func(currentPosition, color)
      if (this.isOnBoard(nextSquare, this.row)) {
        possibles.push(nextSquare)
        checkNext(nextSquare, func, color)
      }
    }
    checkNext(currentPosition, func, color)
    return possibles
  }

  direction = (startingPosition, dir, color) => {
    return this.checkNextRecursivly(startingPosition, dir, color)
  }

  knightDirections(startingPosition, figure) {
    return [
      knightUpRight(startingPosition, figure),
      knightUpLeft(startingPosition, figure),
      knightRightUp(startingPosition, figure),
      knightRightDown(startingPosition, figure),
      knightDownRight(startingPosition, figure),
      knightLeftUp(startingPosition, figure),
      knightLeftDown(startingPosition, figure),
      knightDownLeft(startingPosition, figure),
    ]
  }
  knightUpRight(startingPosition, figure) {
    let nextSquare = up(up(right(startingPosition, figure), figure), figure)
    if (isOnBoard(nextSquare)) {
      return nextSquare
    }
  }
  knightUpLeft(startingPosition, figure) {
    let nextSquare = up(up(left(startingPosition, figure), figure), figure)
    if (isOnBoard(nextSquare)) {
      return nextSquare
    }
  }
  knightRightUp(startingPosition, figure) {
    let nextSquare = right(right(up(startingPosition, figure), figure), figure)
    if (isOnBoard(nextSquare)) {
      return nextSquare
    }
  }
  knightRightDown(startingPosition, figure) {
    let nextSquare = right(
      right(down(startingPosition, figure), figure),
      figure,
    )
    if (isOnBoard(nextSquare)) {
      return nextSquare
    }
  }
  knightDownRight(startingPosition, figure) {
    let nextSquare = down(down(right(startingPosition, figure), figure), figure)
    if (isOnBoard(nextSquare)) {
      return nextSquare
    }
  }
  knightDownLeft(startingPosition, figure) {
    let nextSquare = down(down(left(startingPosition, figure), figure), figure)
    if (isOnBoard(nextSquare)) {
      return nextSquare
    }
  }
  knightLeftUp(startingPosition, figure) {
    let nextSquare = left(left(up(startingPosition, figure), figure), figure)
    if (isOnBoard(nextSquare)) {
      return nextSquare
    }
  }
  knightLeftDown(startingPosition, figure) {
    let nextSquare = left(left(down(startingPosition, figure), figure), figure)
    if (isOnBoard(nextSquare)) {
      return nextSquare
    }
  }

  up = (currentPosition, figure) => {
    return (
      currentPosition[0] + (+currentPosition[1] + (figure[0] === 'w' ? 1 : -1))
    )
  }
  down = (currentPosition, figure) => {
    return (
      currentPosition[0] + (+currentPosition[1] + (figure[0] === 'w' ? -1 : 1))
    )
  }
  left = currentPosition => {
    let left = this.row[this.row.findIndex(el => el === currentPosition[0]) - 1]
    return left + currentPosition[1]
  }
  right = currentPosition => {
    let right =
      this.row[this.row.findIndex(el => el === currentPosition[0]) + 1]
    return right + currentPosition[1]
  }
  upRight = (currentPosition, figure) => {
    return this.up(this.right(currentPosition, figure), figure)
  }

  upLeft = (currentPosition, figure) => {
    return this.up(this.left(currentPosition, figure), figure)
  }

  downRight = (currentPosition, figure) => {
    return this.down(this.right(currentPosition, figure), figure)
  }

  downLeft = (currentPosition, figure) => {
    return this.down(this.left(currentPosition, figure), figure)
  }

  isOnBoard = nextSquare => {
    return (
      this.row.includes(nextSquare[0]) &&
      nextSquare[1] >= 1 &&
      nextSquare[1] <= 8
    )
  }
}
// is friend on way
// is enemy on way
