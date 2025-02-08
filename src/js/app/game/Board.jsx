/**
 * @description Board
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import React, {useState} from 'react'
import GameUtility from '../../utils/game.js'
import Square from './board/Square.jsx'

const FIRST_PLAYER = 'X'
const SECOND_PLAYER = 'O'

export default function Board({squares, onPlay, isFirstPlayerTurn}) {
  let status
  const winner = GameUtility.processWinner(squares)
  if (winner) {
    status = `Winner: ${winner}`
  }
  else {
    status = `Next player: ${isFirstPlayerTurn ? FIRST_PLAYER : SECOND_PLAYER}`
  }

  const handleClick = (i) => {
    if (squares[i] || winner) {
      return
    }

    const newSquares = squares.slice()

    if (isFirstPlayerTurn) {
      newSquares[i] = FIRST_PLAYER
    }
    else {
      newSquares[i] = SECOND_PLAYER
    }

    onPlay(newSquares)
  }

  return (<div className='board'>
    <div className='board__status'>{status}</div>

    <div className='board__row'>
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>

    <div className='board__row'>
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>

    <div className='board__row'>
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
  </div>)
}