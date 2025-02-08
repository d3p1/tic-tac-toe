/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import React, {StrictMode} from 'react'
import {createRoot, Root} from 'react-dom/client'
import Game from './app/Game.jsx'
import '../css/styles.css'

export default class App {
  /**
   * @type {Root}
   */
  root

  /**
   * @type {string}
   */
  rootId

  /**
   * Constructor
   *
   * @param {string} rootId
   */
  constructor(rootId = 'root') {
    this.rootId = rootId
    this.root = createRoot(document.getElementById(rootId))
  }

  /**
   * Init
   *
   * @returns {void}
   */
  init() {
    this.root.render(<StrictMode><Game/></StrictMode>)
  }
}