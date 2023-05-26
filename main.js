import { createboardWithFigures, findFigureInBoxesArray } from './board.js'
import {
  insertFigureByCoordinate,
  moveFigure,
  removeFigureByCoordinate,
} from './figures/figures.js'
import { figures } from './figures/startingPositions.js'

import {
  clearSelectedCircles,
  displayLabelForChoosingFigure,
} from './helpers/helpers.js'

createboardWithFigures()
document.querySelector('section').addEventListener('click', getBoxId)

let pawnFinishedSquare = ''

let selected = {
  id: '',
  figure: '',
}
let possibles = []

let whitesTurn = true

function getBoxId(e) {
  clearSelectedCircles()

  const id = e.target.id
  const figure = findFigureInBoxesArray(id)

  const div = document.getElementById(id)

  if (figure && selected.figure === '') {
    if (
      !(
        (figure.color === 'w' && whitesTurn) ||
        (figure.color === 'b' && !whitesTurn)
      )
    )
      return
  }

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
    // whitesTurn = !whitesTurn
    if (selected.figure.name === 'pawn') {
      selected.figure.firstMoveMade()
      if (id[1] === '8' || id[1] === '1') {
        pawnFinishedSquare = { id, color: selected.figure.color }
        displayLabelForChoosingFigure('block')
      }
    }
  }
  selected = {
    id: '',
    figure: '',
  }
}

document
  .querySelector('button')
  .addEventListener('click', turnPawnIntoOtherFigure)

function turnPawnIntoOtherFigure() {
  let selectedFig = document.querySelector('select').value
  let sel = figures[pawnFinishedSquare.color + selectedFig]()
  removeFigureByCoordinate(pawnFinishedSquare.id)
  insertFigureByCoordinate(pawnFinishedSquare.id, sel)
  displayLabelForChoosingFigure('none')
}
