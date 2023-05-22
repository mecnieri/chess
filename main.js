import { createboardWithFigures } from './board.js'
import { boxesArray } from './board.js'

createboardWithFigures()
document.querySelector('section').addEventListener('click', getBoxId)

function getBoxId(e) {
  clearSelected()

  const id = e.target.id
  const div = document.getElementById(id)
  const figure = findFigure(id)

  if (div.children.length === 2) {
    div.classList.add('selectedBox')

    let possibles = figure.getPossibles(id)

    possibles.forEach(square => {
      if (square) {
        let div = document.getElementById(square)
        let circle = div.children[0]
        circle.style = 'display:block'
      }
    })
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
