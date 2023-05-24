import Queen from './classes/Queen.js'
import Rook from './classes/Rook.js'
import Bishop from './classes/Bishop.js'
import Knight from './classes/Knight.js'
import King from './classes/King.js'
import Pawn from './classes/Pawn.js'
import { icons } from './icons.js'

export const figures = {
  wKing: () => new King(icons.WKingIcon, 'w'),
  bKing: () => new King(icons.BKingIcon, 'b'),
  wQueen: () => new Queen(icons.WQueenIcon, 'w'),
  bQueen: () => new Queen(icons.BQueenIcon, 'b'),
  wBishop: () => new Bishop(icons.WBishopIcon, 'w'),
  bBishop: () => new Bishop(icons.BBishopIcon, 'b'),
  wKnight: () => new Knight(icons.WKnightIcon, 'w'),
  bKnight: () => new Knight(icons.BKnightIcon, 'b'),
  wRook: () => new Rook(icons.WRookIcon, 'w'),
  bRook: () => new Rook(icons.BRookIcon, 'b'),
  wPawn: () => new Pawn(icons.WPawnIcon, 'w'),
  bPawn: () => new Pawn(icons.BPawnIcon, 'b'),
}

export const startingFigures = [
  { coordinate: 'A1', figure: figures.wRook() },
  { coordinate: 'B1', figure: figures.wKnight() },
  { coordinate: 'C1', figure: figures.wBishop() },
  { coordinate: 'D1', figure: figures.wQueen() },
  { coordinate: 'E1', figure: figures.wKing() },
  { coordinate: 'F1', figure: figures.wBishop() },
  { coordinate: 'G1', figure: figures.wKnight() },
  { coordinate: 'H1', figure: figures.wRook() },

  { coordinate: 'A2', figure: figures.wPawn() },
  { coordinate: 'B2', figure: figures.wPawn() },
  { coordinate: 'C2', figure: figures.wPawn() },
  { coordinate: 'D2', figure: figures.wPawn() },
  { coordinate: 'E2', figure: figures.wPawn() },
  { coordinate: 'F2', figure: figures.wPawn() },
  { coordinate: 'G2', figure: figures.wPawn() },
  { coordinate: 'H2', figure: figures.wPawn() },

  { coordinate: 'A7', figure: figures.bPawn() },
  { coordinate: 'B7', figure: figures.bPawn() },
  { coordinate: 'C7', figure: figures.bPawn() },
  { coordinate: 'D7', figure: figures.bPawn() },
  { coordinate: 'E7', figure: figures.bPawn() },
  { coordinate: 'F7', figure: figures.bPawn() },
  { coordinate: 'G7', figure: figures.bPawn() },
  { coordinate: 'H7', figure: figures.bPawn() },

  { coordinate: 'A8', figure: figures.bRook() },
  { coordinate: 'B8', figure: figures.bKnight() },
  { coordinate: 'C8', figure: figures.bBishop() },
  { coordinate: 'D8', figure: figures.bQueen() },
  { coordinate: 'E8', figure: figures.bKing() },
  { coordinate: 'F8', figure: figures.bBishop() },
  { coordinate: 'G8', figure: figures.bKnight() },
  { coordinate: 'H8', figure: figures.bRook() },
]

// export const startingFigures = [
//   { coordinate: 'E5', figure: figures.wRook() },
//   { coordinate: 'C2', figure: figures.wRook() },
//   { coordinate: 'H4', figure: figures.wQueen() },
//   { coordinate: 'B7', figure: figures.bBishop() },
//   { coordinate: 'E4', figure: figures.bKnight() },
//   { coordinate: 'B4', figure: figures.wKing() },
//   { coordinate: 'G2', figure: figures.wPawn() },
//   { coordinate: 'F7', figure: figures.wPawn() },
//   { coordinate: 'A7', figure: figures.bPawn() },
// ]
