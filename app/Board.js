import Square from "./Square.js";
import { Chess } from 'https://cdn.skypack.dev/chess.js';

const files =  ['A', 'B', "C", "D", "E", "F", "J", "H"]

export default class Board{
  constructor({selector, size}){
    this.size = size;
    this.cells = []
    this.element = document.querySelector(selector);
    this.element.classList.add("board");
    this.init();
  }
  init(){
    if(this.size){
      this.element.style.width = this.size;
      this.element.style.height = this.size;
    }else{
      this.element.style.width = '90vmin';
      this.element.style.height = '90vmin';
    }
    this.chess = new Chess();
    this.board = this.chess.board().flat();
    this.cells = Array.from({length:64},(_,index) => {
      const rank = 8 - Math.floor(index/8);
      const fileNum = index % 8;
      const file = files[fileNum];
      const isBlack = !(rank%2 === fileNum%2);
      const cell =  new Square({rank, file, isBlack, index, board: this});
      this.element.appendChild(cell.element);
      return cell;
    })
  }
  getSquare(index){
    return this.board[index];
  }
}