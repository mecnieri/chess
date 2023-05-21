import { figures } from "./figures.js";
import { startingFigures } from "./figures.js";

const row = ["A", "B", "C", "D", "E", "F", "G", "H"];

let boxesArray = [];

function createboard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const div = document.createElement("div");
      if ((i % 2 === 0 && j % 2 === 1) || (i % 2 === 1 && j % 2 === 0)) {
        div.classList.add("blackbox");
      }
      div.id = row[j] + (8 - i);
      boxesArray.push({ coordinate: row[i] + (j + 1), figure: "" });
      document.querySelector("section").appendChild(div);
    }
  }
}

function startingPosition() {
  for (let i = 0; i < startingFigures.length; i++) {
    insertFigureByCoordinate(
      startingFigures[i].coordinate,
      startingFigures[i].figure
    );
  }
}

const findBoxByCoordinates = (coordinate) =>
  boxesArray.filter((el) => el.coordinate === coordinate);

function insertFigureByCoordinate(coordinate, figure) {
  let box = findBoxByCoordinates(coordinate);
  box.figure = figure;
  document.getElementById(coordinate).innerHTML = figures[figure];
}

export function createboardWithFigures() {
  createboard();
  startingPosition();
  console.log(boxesArray);
}
