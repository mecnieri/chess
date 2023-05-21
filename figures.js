import { insertFigureInBoxesArray } from './board.js'

export const figures = {
  WPawn: '<i class="fa-sharp fa-regular fa-chess-pawn"></i>',
  BPawn: '<i class="fa-solid fa-chess-pawn"></i>',
  WPawn: '<i class="fa-sharp fa-regular fa-chess-pawn"></i>',
  BRook: '<i class="fa-solid fa-chess-rook"></i>',
  WRook: '<i class="fa-regular fa-chess-rook"></i>',
  BKnight: '<i class="fa-solid fa-chess-knight"></i>',
  WKnight: '<i class="fa-regular fa-chess-knight"></i>',
  BBishop: '<i class="fa-solid fa-chess-bishop"></i>',
  WBishop: '<i class="fa-regular fa-chess-bishop"></i>',
  BQueen: '<i class="fa-solid fa-chess-queen"></i>',
  WQueen: '<i class="fa-regular fa-chess-queen"></i>',
  BKing: '<i class="fa-solid fa-chess-king"></i>',
  WKing: '<i class="fa-regular fa-chess-king"></i>',
}

export const startingFigures = [
  { coordinate: 'A2', figure: 'WPawn' },
  { coordinate: 'B2', figure: 'WPawn' },
  { coordinate: 'C2', figure: 'WPawn' },
  { coordinate: 'D2', figure: 'WPawn' },
  { coordinate: 'E2', figure: 'WPawn' },
  { coordinate: 'F2', figure: 'WPawn' },
  { coordinate: 'G2', figure: 'WPawn' },
  { coordinate: 'H2', figure: 'WPawn' },
  { coordinate: 'A7', figure: 'BPawn' },
  { coordinate: 'B7', figure: 'BPawn' },
  { coordinate: 'C7', figure: 'BPawn' },
  { coordinate: 'D7', figure: 'BPawn' },
  { coordinate: 'E7', figure: 'BPawn' },
  { coordinate: 'F7', figure: 'BPawn' },
  { coordinate: 'G7', figure: 'BPawn' },
  { coordinate: 'H7', figure: 'BPawn' },

  { coordinate: 'A1', figure: 'WRook' },
  { coordinate: 'H1', figure: 'WRook' },
  { coordinate: 'B1', figure: 'WKnight' },
  { coordinate: 'G1', figure: 'WKnight' },
  { coordinate: 'C1', figure: 'WBishop' },
  { coordinate: 'F1', figure: 'WBishop' },
  { coordinate: 'D1', figure: 'WQueen' },
  { coordinate: 'E1', figure: 'WKing' },

  { coordinate: 'A8', figure: 'BRook' },
  { coordinate: 'H8', figure: 'BRook' },
  { coordinate: 'B8', figure: 'BKnight' },
  { coordinate: 'G8', figure: 'BKnight' },
  { coordinate: 'C8', figure: 'BBishop' },
  { coordinate: 'F8', figure: 'BBishop' },
  { coordinate: 'D8', figure: 'BQueen' },
  { coordinate: 'E8', figure: 'BKing' },
]

function insertFigureByCoordinate(coordinate, figure) {
  insertFigureInBoxesArray(coordinate, figure)
  insertFigureOnBoard(coordinate, figure)
}

function insertFigureOnBoard(coordinate, figure) {
  document.getElementById(coordinate).innerHTML = figures[figure]
}

export function figuresStartingPosition() {
  for (let i = 0; i < startingFigures.length; i++) {
    insertFigureByCoordinate(
      startingFigures[i].coordinate,
      startingFigures[i].figure,
    )
  }
}