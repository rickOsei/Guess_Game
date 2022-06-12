let randomNumber = Math.floor((Math.random() * 50) + 1)



let output = document.getElementById('output')

let btn = document.getElementById('btn');

let body = document.querySelector('body')

let container = document.querySelector('.container')

console.log(randomNumber)


btn.addEventListener('click', (e) => {
    let input = document.querySelector('#input')
    let inputVal = input.value
    if (inputVal == randomNumber) {
        output.innerHTML = 'Well Done! 🍾'
        container.classList.add('newBg')

    } else if (inputVal > randomNumber && inputVal < 50) {
        output.innerHTML = 'Your guess is too high'
    } else if (inputVal >= 50) {
        output.innerHTML = 'Number should not exceed 50'
    } else if (inputVal < randomNumber && inputVal > 1) {
        output.innerHTML = 'Your guess is too low'
    } else if (inputVal < 1) {
        output.innerHTML = 'Number should be 1 or more'
    } else if (isNaN(inputVal)) {
        output.innerHTML = 'Try writing a number'
    } else{
        output.innerHTML = "Enter something please!"
    }

})


// function compareNum() {
//     if (inputVal === randomNumber) {
//         output.innerHTML = 'Well Done!'
//     } else if (inputVal > randomNumber && inputVal < 50) {
//         output.innerHTML = 'Your guess is too high'
//     } else if (input > randomNumber && inputVal > 50) {
//         output.innerHTML = 'Number should not exceed 50'
//     } else if (inputVal < randomNumber && inputVal > 1) {
//         output.innerHTML = 'Your guess is too low'
//     } else if (input < randomNumber && inputVal < 1) {
//         output.innerHTML = 'Number should be 1 or more'
//     } else if (isNaN(inputVal)) {
//         output.innerHTML = 'Try writing a number'
//     } 
// }


function refresh() {
    window.location.reload();
}

