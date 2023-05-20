import { figures } from './figures.js'

let boxes = Array.from(document.querySelector('section').children)
let row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

let boxesArray = []

function coloringBoxes() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i % 2 === 0 && j % 2 === 1) || (i % 2 === 1 && j % 2 === 0)) {
        boxes[i * 8 + j].classList.add("blackbox");
      }
    }
  }
}

function addIdsAndPushBoxesArray() {
  for (let i = 0; i < 8; i++) {
    for (let j = 8; j >= 1; j--) {
      let box = boxes[i * 8 + j - 1];
      box.id = row[j - 1] + (8 - i);
      boxesArray.push({ coordinate: row[i] + (8 - j + 1), figure: "" });
    }
  }
}

function startingPosition() {
  insertFigureByCoordinate("A2", "WPawn");
  insertFigureByCoordinate("B2", "WPawn");
  insertFigureByCoordinate("C2", "WPawn");
  insertFigureByCoordinate("D2", "WPawn");
  insertFigureByCoordinate("E2", "WPawn");
  insertFigureByCoordinate("F2", "WPawn");
  insertFigureByCoordinate("G2", "WPawn");
  insertFigureByCoordinate("H2", "WPawn");
  insertFigureByCoordinate("A7", "BPawn");
  insertFigureByCoordinate("B7", "BPawn");
  insertFigureByCoordinate("C7", "BPawn");
  insertFigureByCoordinate("D7", "BPawn");
  insertFigureByCoordinate("E7", "BPawn");
  insertFigureByCoordinate("F7", "BPawn");
  insertFigureByCoordinate("G7", "BPawn");
  insertFigureByCoordinate("H7", "BPawn");
  insertFigureByCoordinate("D1", "WQueen");
  insertFigureByCoordinate("E1", "WKing");
  insertFigureByCoordinate("C1", "WBishop")
  insertFigureByCoordinate("F1", "WBishop")
  insertFigureByCoordinate("B1", "WKnight")
  insertFigureByCoordinate("G1", "WKnight")
  insertFigureByCoordinate("A1", "WRook")
  insertFigureByCoordinate("H1", "WRook")
  insertFigureByCoordinate("A8", "BRook")
  insertFigureByCoordinate("H8", "BRook")
  


}

const findBoxByCoordinates = (coordinate) =>
  boxesArray.filter((el) => el.coordinate === coordinate);

function insertFigureByCoordinate(coordinate, figure) {
  let box = findBoxByCoordinates(coordinate);
  box.figure = figure;
  document.getElementById(coordinate).innerHTML = figures[figure];
}

export function createboard() {
  coloringBoxes();
  addIdsAndPushBoxesArray();
  startingPosition();
}
