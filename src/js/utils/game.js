/**
 * @description Game utility
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export default class Game {
  /**
   * @type {Array}
   */
  static winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  /**
   * Process winner
   *
   * @param   {[string|null]} squares
   * @returns {string|null}
   */
  static processWinner(squares) {
    for (let i = 0; i < this.winStates.length; i++) {
      const [a, b, c] = this.winStates[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }

    return null
  }
}