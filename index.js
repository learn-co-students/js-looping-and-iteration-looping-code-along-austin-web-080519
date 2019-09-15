// Code your solutions in this file

cards = []


function writeCards(array, event) {
    for (let i = 0; i < array.length; i++) {
        note = (`Thank you, ${array[i]}, for this wonderful ${event} gift!`)
        console.log(note)
        cards.push(note)
    }
    return cards
}