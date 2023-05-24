import {
  findFigureInBoxesArray,
  insertFigureInBoxesArray,
  removeFigureInBoxesArray,
} from '../board.js'
import { startingFigures } from './startingPositions.js'



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
