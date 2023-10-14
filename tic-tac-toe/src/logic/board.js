import { WINNER_COMBOS } from '../constans.js'

export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a] // x o u
    }
  }
  // si no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  // Revisamos si hay un empate
  return newBoard.every((square) => square !== null)
}
