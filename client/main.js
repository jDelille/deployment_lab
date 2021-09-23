console.log('connected')

let cookie = document.querySelector('.cookie');
let displayScore = document.querySelector('.display-score');

let score = 0;

cookie.addEventListener('click', () => {
    console.log('cookie clicked');
    let updateScore = score++

    if (updateScore > 20) {
        updateScore = score+=10000
    } else if (updateScore > 12000) {
        updateScore = score+=400000
    }

   

    displayScore.innerHTML = 
        `<p class="score"> ${updateScore} </p>`
        
    
})

