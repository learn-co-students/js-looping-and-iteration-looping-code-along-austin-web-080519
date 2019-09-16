// Code your solutions in this file
const people = ["Ada", "Brendan", "Ali"]
const bday = "birthday"
let messages = []

function writeCards(people, bday) {
    for (let i = 0; i < people.length; i++) {
        messages.push(`Thank you, ${people[i]}, for the wonderful ${bday} gift!`);
    }

    return messages;
}


function countdown(number) {
    while (number >= 0) {
    console.log(number--);
    }
}
