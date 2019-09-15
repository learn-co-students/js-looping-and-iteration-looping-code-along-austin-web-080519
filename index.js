// Code your solutions in this file

let cards = []


function writeCards(array, event) {
    for (let i = 0; i < array.length; i++) {
        let note = (`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
        console.log(note)
        cards.push(note)
    }
    return cards
}

function countdown(number) {
    let countdown = 0;
    while (countdown <= number) {
        console.log(number)
        number--
    }
}