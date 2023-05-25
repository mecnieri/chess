import { figuresStartingPosition } from './figures/figures.js'

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export let boxesArray = []

function createboard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const div = document.createElement('div')
      const circle = document.createElement('span')

      if ((i % 2 === 0 && j % 2 === 1) || (i % 2 === 1 && j % 2 === 0)) {
        div.classList.add('blackbox')
      }
      div.id = columns[j] + (8 - i)
      boxesArray.push({ coordinate: columns[i] + (j + 1), figure: '' })
      div.appendChild(circle)
      document.querySelector('section').appendChild(div)
    }
  }
}

export const findFigureInBoxesArray = coordinate =>
  boxesArray.find(el => el.coordinate === coordinate).figure

export const removeFigureInBoxesArray = coordinate => {
  boxesArray.map(el => (el.coordinate === coordinate ? (el.figure = '') : el))
}
export const insertFigureInBoxesArray = (coordinate, figure) => {
  boxesArray.map(el =>
    el.coordinate === coordinate ? (el.figure = figure) : el,
  )
}

export function createboardWithFigures() {
  createboard()
  figuresStartingPosition()
}
