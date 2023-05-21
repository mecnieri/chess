import { insertFigureInBoxesArray } from './board.js'
import Queen from './figureClasses/Queen.js'
import Rook from './figureClasses/Rook.js'
import Bishop from './figureClasses/Bishop.js'

export const icons = {
  WPawnIcon: '<i class="fa-sharp fa-regular fa-chess-pawn"></i>',
  BPawnIcon: '<i class="fa-solid fa-chess-pawn"></i>',
  WPawnIcon: '<i class="fa-sharp fa-regular fa-chess-pawn"></i>',
  BRookIcon: '<i class="fa-solid fa-chess-rook"></i>',
  WRookIcon: '<i class="fa-regular fa-chess-rook"></i>',
  BKnightIcon: '<i class="fa-solid fa-chess-knight"></i>',
  WKnightIcon: '<i class="fa-regular fa-chess-knight"></i>',
  BBishopIcon: '<i class="fa-solid fa-chess-bishop"></i>',
  WBishopIcon: '<i class="fa-regular fa-chess-bishop"></i>',
  BQueenIcon: '<i class="fa-solid fa-chess-queen"></i>',
  WQueenIcon: '<i class="fa-regular fa-chess-queen"></i>',
  BKingIcon: '<i class="fa-solid fa-chess-king"></i>',
  WKingIcon: '<i class="fa-regular fa-chess-king"></i>',
}

export const figures = {
  wQueen: new Queen(icons.WQueenIcon, 'w'),
  wRook: new Rook(icons.WRookIcon, 'w'),
  bBishop: new Bishop(icons.BBishopIcon, 'b'),
}

// export const startingFigures = [
//   { coordinate: 'A2', figure: 'WPawn' },
//   { coordinate: 'B2', figure: 'WPawn' },
//   { coordinate: 'C2', figure: 'WPawn' },
//   { coordinate: 'D2', figure: 'WPawn' },
//   { coordinate: 'E2', figure: 'WPawn' },
//   { coordinate: 'F2', figure: 'WPawn' },
//   { coordinate: 'G2', figure: 'WPawn' },
//   { coordinate: 'H2', figure: 'WPawn' },
//   { coordinate: 'A7', figure: 'BPawn' },
//   { coordinate: 'B7', figure: 'BPawn' },
//   { coordinate: 'C7', figure: 'BPawn' },
//   { coordinate: 'D7', figure: 'BPawn' },
//   { coordinate: 'E7', figure: 'BPawn' },
//   { coordinate: 'F7', figure: 'BPawn' },
//   { coordinate: 'G7', figure: 'BPawn' },
//   { coordinate: 'H7', figure: 'BPawn' },

//   { coordinate: 'A1', figure: 'WRook' },
//   { coordinate: 'H1', figure: 'WRook' },
//   { coordinate: 'B1', figure: 'WKnight' },
//   { coordinate: 'G1', figure: 'WKnight' },
//   { coordinate: 'C1', figure: 'WBishop' },
//   { coordinate: 'F1', figure: 'WBishop' },
//   { coordinate: 'D1', figure: 'WQueen' },
//   { coordinate: 'E1', figure: 'WKing' },

//   { coordinate: 'A8', figure: 'BRook' },
//   { coordinate: 'H8', figure: 'BRook' },
//   { coordinate: 'B8', figure: 'BKnight' },
//   { coordinate: 'G8', figure: 'BKnight' },
//   { coordinate: 'C8', figure: 'BBishop' },
//   { coordinate: 'F8', figure: 'BBishop' },
//   { coordinate: 'D8', figure: 'BQueen' },
//   { coordinate: 'E8', figure: 'BKing' },
// ]

export const startingFigures = [
  { coordinate: 'E5', figure: figures.wRook },
  { coordinate: 'C2', figure: figures.wRook },
  { coordinate: 'H4', figure: figures.wQueen },
  { coordinate: 'B7', figure: figures.bBishop },
]

function insertFigureByCoordinate(coordinate, figure) {
  insertFigureInBoxesArray(coordinate, figure)
  insertFigureOnBoard(coordinate, figure)
}

function insertFigureOnBoard(coordinate, figure) {
  console.log(figure)
  document.getElementById(coordinate).innerHTML += figure.icon
}

export function figuresStartingPosition() {
  for (let i = 0; i < startingFigures.length; i++) {
    insertFigureByCoordinate(
      startingFigures[i].coordinate,
      startingFigures[i].figure,
    )
  }
}
