import Pieces from "./Pieces.js";

export default class Square{
  constructor({rank, file, isBlack, index, board}){
    this.rank = rank;
    this.file = file;
    this.index = index;
    this.board = board;
    
    this.element = document.createElement('div');
    this.element.classList.add('square');
    if(isBlack){
      this.element.classList.add('black')
    }
    this.element.textContent = `${file}${rank}`
    this.element.setAttribute('data-rank', rank);
    this.element.setAttribute('data-file', file);
    this.update()
  }
  update(){
    const current = this.board.getSquare(this.index);
    if(current) {
      const imageUrl = Pieces[`${current.color}${current.type}`]
      if(imageUrl){
        const image = document.createElement('img');
        image.src = imageUrl;
        this.element.textContent = '';
        this.element.append(image);
      }else{
      this.element.textContent = current.type
      }
    }
    if(!current) this.element.textContent = '';

    if(this.rank === 1 || this.rank === 8){
      const label = document.createElement('span');
      label.classList.add('label');
      if(this.rank === 8){
        label.classList.add('top');
      }
      label.textContent = this.file;
      this.element.append(label);
    }
  }
}