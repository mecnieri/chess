import { createboardWithFigures } from './board.js'
import { boxesArray } from './board.js'
import { moveFigure } from './figures/figures.js'

createboardWithFigures()
document.querySelector('section').addEventListener('click', getBoxId)

let selected = {
  id: '',
  figure: '',
}
let possibles = []

function getBoxId(e) {
  clearSelected()

  const id = e.target.id
  const figure = findFigure(id)
  const div = document.getElementById(id)

  if (selected.figure === '') {
    selected = { id: id, figure: figure }
    if (div.children.length === 2) {
      div.classList.add('selectedBox')
      possibles = figure.getPossibles(id)
      possibles.forEach(square => {
        if (square) {
          let div = document.getElementById(square)
          let circle = div.children[0]
          circle.style = 'display:block'
        }
      })
    }
    return
  }

  if (possibles.includes(id)) {
    moveFigure(id, selected.id, selected.figure)
  }
  selected = {
    id: '',
    figure: '',
  }
}

function clearSelected() {
  document
    .querySelectorAll('span')
    .forEach(circle => (circle.style = 'display:none'))

  Array.from(document.querySelector('section').children).forEach(div =>
    div.classList.remove('selectedBox'),
  )
}

const findFigure = id => boxesArray.find(box => box.coordinate === id).figure
