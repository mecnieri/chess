let boxes = Array.from(document.querySelector("section").children);
let row = ["A", "B", "C", "D", "E", "F", "G", "H"];

let boxesArray = [];
let figures = {
  BPawn: '<i class="fa-solid fa-chess-pawn"></i>',
  WPawn: '<i class="fa-sharp fa-regular fa-chess-pawn"></i>',
  BRook: '<i class="fa-solid fa-chess-rook"></i>',
  WRook: '<i class="fa-light fa-chess-rook"></i>',
  BKnight: '<i class="fa-solid fa-chess-knight"></i>',
  WKnight: '<i class="fa-regular fa-chess-knight"></i>',
  BBishop: '<i class="fa-solid fa-chess-bishop"></i>',
  WBishop: '<i class="fa-light fa-chess-bishop"></i>',
  BQueen: '<i class="fa-solid fa-chess-queen"></i>',
  WQueen: '<i class="fa-regular fa-chess-queen"></i>',
  BKing: '<i class="fa-solid fa-chess-king"></i>',
  WKing: '<i class="fa-light fa-chess-king"></i>',
};

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

document.addEventListener("click", getBoxId);

function getBoxId(e) {
  console.log(e.target.id);
}
