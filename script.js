//creat gameboard module
let playerX = 'X'
let playerO = 'O'

const gameBoard = (function(){
   let board = Array.from(Array(9).keys())
   let div = document.createElement('div');


})()

let board = Array.from(Array(9).keys())
// let div = document.getElementsByClassName('cell')[0]
console.log(board)

let cells = Array.from(document.getElementsByClassName('cell'))

function turn(){
    cells.forEach(cell=>{
       cell.addEventListener('click', function(){
           cell.innerHTML = playerX
       })
       console.log(cell.id)

    })
}
turn()