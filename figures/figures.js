import {
  findFigureInBoxesArray,
  insertFigureInBoxesArray,
  removeFigureInBoxesArray,
} from '../board.js'
import { startingFigures } from './startingPositions.js'

// export const startingFigures = [
//   { coordinate: 'E5', figure: figures.wRook() },
//   { coordinate: 'C2', figure: figures.wRook() },
//   { coordinate: 'H4', figure: figures.wQueen() },
//   { coordinate: 'B7', figure: figures.bBishop() },
//   { coordinate: 'E4', figure: figures.bKnight() },
//   { coordinate: 'B4', figure: figures.wKing() },
//   { coordinate: 'G2', figure: figures.wPawn() },
//   { coordinate: 'F2', figure: figures.wPawn() },
//   { coordinate: 'A7', figure: figures.bPawn() },
// ]

export const moveFigure = (to, from, figure) => {
  removeFigureByCoordinate(from)
  if (findFigureInBoxesArray(to).figure) {
    removeFigureByCoordinate(to)
    insertFigureByCoordinate(to, figure)
  } else {
    insertFigureByCoordinate(to, figure)
  }
}

export function insertFigureByCoordinate(coordinate, figure) {
  insertFigureInBoxesArray(coordinate, figure)
  insertFigureOnBoard(coordinate, figure)
}

function insertFigureOnBoard(coordinate, figure) {
  document.getElementById(coordinate).innerHTML += figure.icon
}
export function removeFigureByCoordinate(coordinate) {
  document.getElementById(coordinate).children[1].remove()
  removeFigureInBoxesArray(coordinate)
}

export function figuresStartingPosition() {
  for (let i = 0; i < startingFigures.length; i++) {
    insertFigureByCoordinate(
      startingFigures[i].coordinate,
      startingFigures[i].figure,
    )
  }
}
