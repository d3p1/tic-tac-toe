/**
 * @description Square
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import React from 'react'

export default function Square({value, onSquareClick}) {
  return (<button className='board__square' onClick={onSquareClick}>{value}</button>)
}