/**
 * @description Game
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import React, {useState} from 'react'
import Board from './game/Board.jsx'

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const currentSquares = history[currentMove]

  const handleJump = (move) => {
    setCurrentMove(move)
  }

  const handlePlay = (newSquares) => {
    const newHistory = [...history.slice(0, currentMove + 1), newSquares]
    setHistory(newHistory)
    setCurrentMove(newHistory.length - 1)
  }

  const moves = history.map((squares, move) => {
    let description
    if (move > 0) {
      description = `Go to move #${move + 1}`
    } else {
      description = `Go to game start`
    }
    return (
      <li key={move}>
        <button onClick={() => handleJump(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <Board
        squares={currentSquares}
        onPlay={handlePlay}
        isFirstPlayerTurn={currentMove % 2 === 0}
      />
      <div className="game__info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}
