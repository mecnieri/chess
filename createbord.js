import { figures } from './figures.js'

const row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

let boxesArray = []

function createboard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const div = document.createElement('div')
      if ((i % 2 === 0 && j % 2 === 1) || (i % 2 === 1 && j % 2 === 0)) {
        div.classList.add('blackbox')
      }
      div.id = row[j] + (8 - i)
      boxesArray.push({ coordinate: row[i] + (j + 1), figure: '' })
      document.querySelector('section').appendChild(div)
    }
  }
}

function startingPosition() {
  insertFigureByCoordinate('A2', 'WPawn')
  insertFigureByCoordinate('B2', 'WPawn')
  insertFigureByCoordinate('C2', 'WPawn')
  insertFigureByCoordinate('D2', 'WPawn')
  insertFigureByCoordinate('E2', 'WPawn')
  insertFigureByCoordinate('F2', 'WPawn')
  insertFigureByCoordinate('G2', 'WPawn')
  insertFigureByCoordinate('H2', 'WPawn')
  insertFigureByCoordinate('A7', 'BPawn')
}

const findBoxByCoordinates = coordinate =>
  boxesArray.filter(el => el.coordinate === coordinate)

function insertFigureByCoordinate(coordinate, figure) {
  let box = findBoxByCoordinates(coordinate)
  box.figure = figure
  document.getElementById(coordinate).innerHTML = figures[figure]
}

export function createboardWithFigures() {
  createboard()
  startingPosition()
  console.log(boxesArray)
}
