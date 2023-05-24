import { findFigureInBoxesArray } from '../board.js'

export class Movements {
  constructor() {
    this.row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    this.direction = this.direction.bind(this)
    this.possibles = []
  }

  checkNextRecursivly = (currentPosition, func, color) => {
    this.possibles = []

    this.checkNext(currentPosition, func, color)
    return this.possibles
  }

  checkNext = (currentPosition, func, color) => {
    let nextSquare = func(currentPosition, color)
    if (!this.isOnBoard(nextSquare, this.row)) return
    let isF = this.isFigureOnWay(nextSquare, color)
    if (isF === 'friend') return
    if (isF === 'enemy') return this.possibles.push(nextSquare)
    if (!isF) {
      this.possibles.push(nextSquare)
      this.checkNext(nextSquare, func, color)
    }
  }

  direction = (startingPosition, dir, color) =>
    this.checkNextRecursivly(startingPosition, dir, color)

  isFigureOnWay = (square, color) => {
    let fig = findFigureInBoxesArray(square).figure
    if (fig) return fig.color === color ? 'friend' : 'enemy'
  }

  knightUpRight = (startingPosition, figure) => {
    let nextSquare = this.up(
      this.up(this.right(startingPosition, figure), figure),
      figure,
    )

    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    return nextSquare
  }
  knightUpLeft = (startingPosition, figure) => {
    let nextSquare = this.up(
      this.up(this.left(startingPosition, figure), figure),
      figure,
    )

    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    return nextSquare
  }
  knightRightUp = (startingPosition, figure) => {
    let nextSquare = this.right(
      this.right(this.up(startingPosition, figure), figure),
      figure,
    )

    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    return nextSquare
  }
  knightRightDown = (startingPosition, figure) => {
    let nextSquare = this.right(
      this.right(this.down(startingPosition, figure), figure),
      figure,
    )

    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    return nextSquare
  }
  knightDownRight = (startingPosition, figure) => {
    let nextSquare = this.down(
      this.down(this.right(startingPosition, figure), figure),
      figure,
    )

    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    return nextSquare
  }
  knightDownLeft = (startingPosition, figure) => {
    let nextSquare = this.down(
      this.down(this.left(startingPosition, figure), figure),
      figure,
    )

    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    return nextSquare
  }
  knightLeftUp = (startingPosition, figure) => {
    let nextSquare = this.left(
      this.left(this.up(startingPosition, figure), figure),
      figure,
    )

    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    return nextSquare
  }
  knightLeftDown = (startingPosition, figure) => {
    let nextSquare = this.left(
      this.left(this.down(startingPosition, figure), figure),
      figure,
    )

    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    return nextSquare
  }

  kingUp = (startingPosition, figure) => {
    let nextSquare = this.up(startingPosition, figure)
    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    return nextSquare
  }
  kingDown = (startingPosition, figure) => {
    let nextSquare = this.down(startingPosition, figure)
    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    return nextSquare
  }
  kingLeft = (startingPosition, figure) => {
    let nextSquare = this.left(startingPosition, figure)
    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    return nextSquare
  }
  kingRight = (startingPosition, figure) => {
    let nextSquare = this.right(startingPosition, figure)
    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    return nextSquare
  }
  kingUpRight = (startingPosition, figure) => {
    let nextSquare = this.up(this.right(startingPosition, figure), figure)
    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    return nextSquare
  }
  kingUpLeft = (startingPosition, figure) => {
    let nextSquare = this.up(this.left(startingPosition, figure), figure)
    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    return nextSquare
  }
  kingDownRight = (startingPosition, figure) => {
    let nextSquare = this.down(this.right(startingPosition, figure), figure)
    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    return nextSquare
  }
  kingDownLeft = (startingPosition, figure) => {
    let nextSquare = this.down(this.left(startingPosition, figure), figure)
    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    return nextSquare
  }
  pawnUp = (startingPosition, figure) => {
    let nextSquare = this.up(startingPosition, figure)
    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    if (isF === 'enemy') return
    return nextSquare
  }
  pawnDoubleUp = (startingPosition, figure) => {
    let nextSquare = this.up(this.up(startingPosition, figure), figure)
    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    if (isF === 'enemy') return
    return nextSquare
  }
  pawnDoubleUp = (startingPosition, figure) => {
    let nextSquare = this.up(this.up(startingPosition, figure), figure)
    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    if (isF === 'enemy') return
    return nextSquare
  }
  pawnKillsUpRight = (startingPosition, figure) => {
    let nextSquare = this.up(this.right(startingPosition, figure), figure)
    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)

    if (isF === 'friend') return
    if (isF === 'enemy') return nextSquare
  }
  pawnKillsUpLeft = (startingPosition, figure) => {
    let nextSquare = this.up(this.left(startingPosition, figure), figure)
    if (!this.isOnBoard(nextSquare)) return
    let isF = this.isFigureOnWay(nextSquare, figure)
    if (isF === 'friend') return
    if (isF === 'enemy') return nextSquare
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
