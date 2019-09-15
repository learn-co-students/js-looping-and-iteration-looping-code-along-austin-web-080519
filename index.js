// Code your solutions in this file

function writeCards(array, event) {
    let allMessages = []
    for (let i = 0; i<array.length; i++) {
        let message = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
        allMessages.push(message)
    }
    return allMessages
}       

function countdown(int) {
    while (int >= 0) {
        console.log(int);
        int--
    }
}