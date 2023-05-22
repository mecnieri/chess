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


  knightUpRight = (startingPosition, figure) => {
    console.log(this)
    let nextSquare = this.up(
      this.up(this.right(startingPosition, figure), figure),
      figure,
    )
    if (this.isOnBoard(nextSquare)) {
      return nextSquare
    }
  }
  knightUpLeft = (startingPosition, figure) => {
    let nextSquare = this.up(
      this.up(this.left(startingPosition, figure), figure),
      figure,
    )
    if (this.isOnBoard(nextSquare)) {
      console.log(nextSquare)
      return nextSquare
    }
  }
  knightRightUp = (startingPosition, figure) => {
    let nextSquare = this.right(
      this.right(this.up(startingPosition, figure), figure),
      figure,
    )
    if (this.isOnBoard(nextSquare)) {
      return nextSquare
    }
  }
  knightRightDown = (startingPosition, figure) => {
    let nextSquare = this.right(
      this.right(this.down(startingPosition, figure), figure),
      figure,
    )
    if (this.isOnBoard(nextSquare)) {
      return nextSquare
    }
  }
  knightDownRight = (startingPosition, figure) => {
    let nextSquare = this.down(
      this.down(this.right(startingPosition, figure), figure),
      figure,
    )
    if (this.isOnBoard(nextSquare)) {
      return nextSquare
    }
  }
  knightDownLeft = (startingPosition, figure) => {
    let nextSquare = this.down(
      this.down(this.left(startingPosition, figure), figure),
      figure,
    )
    if (this.isOnBoard(nextSquare)) {
      return nextSquare
    }
  }
  knightLeftUp = (startingPosition, figure) => {
    let nextSquare = this.left(
      this.left(this.up(startingPosition, figure), figure),
      figure,
    )
    if (this.isOnBoard(nextSquare)) {
      return nextSquare
    }
  }
  knightLeftDown = (startingPosition, figure) => {
    let nextSquare = this.left(
      this.left(this.down(startingPosition, figure), figure),
      figure,
    )
    if (this.isOnBoard(nextSquare)) {
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
    console.log(currentPosition)
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
