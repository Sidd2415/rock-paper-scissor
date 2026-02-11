let result = document.getElementById('result')
let leaderBoard = document.getElementById('leaderboard')

function compMove() {
    let CompMove = ['rock', 'paper', 'scisscor']
    let randomNo = Math.floor(Math.random() * 3) 
    
    return CompMove[randomNo]
}
let tie = 0
let win = 0
let lose = 0 


function playGame(move) {

    let Cmove = compMove()

    if (move === 'rock'){
        if(Cmove === 'rock'){
            tie++
            result.innerHTML = `YOUR MOVE ${move} <br> COMPUTER MOVE ${Cmove} <br> TIE`
        } else if (Cmove === 'paper') {
            lose++
            result.innerHTML = `YOUR MOVE ${move} <br>COMPUTER MOVE ${Cmove}<br> YOU LOSE`
        } else {
            win++
            result.innerHTML = `YOUR MOVE ${move}<br> COMPUTER MOVE ${Cmove} <br>YOU WIN`
        }
    }

    if (move === 'paper') {
        if (Cmove === 'paper') {
            tie++
            result.innerHTML = `YOUR MOVE ${move}<br> COMPUTER MOVE ${Cmove}<br> TIE`
        } else if (Cmove === 'rock') {
            win++
            result.innerHTML = `YOUR MOVE ${move}<br> COMPUTER MOVE ${Cmove} <br>YOU WIN`
        } else {
            lose++
            result.innerHTML = `YOUR MOVE ${move} <br>COMPUTER MOVE ${Cmove}<br>YOU LOSE`
        }
    }

    if (move === 'scissor') {
        if (Cmove === 'scissor') {
            tie++
            result.innerHTML= `YOUR MOVE ${move}<br> COMPUTER MOVE ${Cmove} <br> TIE`
        } else if (Cmove === 'rock') {
            lose++
            result.innerHTML = `YOUR MOVE ${move}<br> COMPUTER MOVE ${Cmove} <br>YOU LOSE`
        } else {
            win++
            result.innerHTML = `YOUR MOVE ${move} <br>COMPUTER MOVE ${Cmove} <br>YOU WIN`
        }
    }

    leaderBoard.innerHTML = `WIN - ${win} <br> LOSE - ${lose} <br> TIE - ${tie}`
}

function reset() {
    result.innerHTML = ``
    win = 0
    lose = 0
    tie = 0

    leaderBoard.innerHTML = `WIN - ${win} <br> LOSE - ${lose} <br> TIE - ${tie}`
}