import { insertFigureInBoxesArray, removeFigureInBoxesArray } from '../board.js'
import Queen from './classes/Queen.js'
import Rook from './classes/Rook.js'
import Bishop from './classes/Bishop.js'
import Knight from './classes/Knight.js'
import King from './classes/King.js'
import { icons } from './icons.js'

export const figures = {
  wKing: new King(icons.WKingIcon, 'w'),
  wQueen: new Queen(icons.WQueenIcon, 'w'),
  wRook: new Rook(icons.WRookIcon, 'w'),
  bBishop: new Bishop(icons.BBishopIcon, 'b'),
  bKnight: new Knight(icons.BKnightIcon, 'b'),
}

export const startingFigures = [
  { coordinate: 'E5', figure: figures.wRook },
  { coordinate: 'C2', figure: figures.wRook },
  { coordinate: 'H4', figure: figures.wQueen },
  { coordinate: 'B7', figure: figures.bBishop },
  { coordinate: 'E4', figure: figures.bKnight },
  { coordinate: 'B4', figure: figures.wKing },
]

export const moveFigure = (to, from, figure) => {
  insertFigureByCoordinate(to, figure)
  removeFigureByCoordinate(from, figure)
}

function insertFigureByCoordinate(coordinate, figure) {
  insertFigureInBoxesArray(coordinate, figure)
  insertFigureOnBoard(coordinate, figure)
}

function insertFigureOnBoard(coordinate, figure) {
  document.getElementById(coordinate).innerHTML += figure.icon
}
function removeFigureByCoordinate(coordinate) {
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
