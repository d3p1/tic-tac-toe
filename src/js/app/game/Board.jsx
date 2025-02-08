/**
 * @description Board
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import Square from './board/Square.jsx'

export default function Board() {
  return (<div className='board'>
    <div className='board__row'>
      <Square />
      <Square />
      <Square />
    </div>

    <div className='board__row'>
      <Square />
      <Square />
      <Square />
    </div>

    <div className='board__row'>
      <Square />
      <Square />
      <Square />
    </div>
  </div>)
}