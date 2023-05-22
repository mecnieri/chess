import { figuresStartingPosition } from './figures/figures.js'

const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export let boxesArray = []

function createboard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const div = document.createElement('div')
      const circle = document.createElement('span')

      if ((i % 2 === 0 && j % 2 === 1) || (i % 2 === 1 && j % 2 === 0)) {
        div.classList.add('blackbox')
      }
      div.id = rows[j] + (8 - i)
      boxesArray.push({ coordinate: rows[i] + (j + 1), figure: '' })
      div.appendChild(circle)
      document.querySelector('section').appendChild(div)
    }
  }
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
