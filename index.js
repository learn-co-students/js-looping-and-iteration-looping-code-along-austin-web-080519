function writeCards(name, string) {
    let array = []
    for (let i=0; i < name.length; i++) {
        array.push(`Thank you, ${name[i]}, for the wonderful ${string} gift!`)
    } 
        return array
    }


// writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countdown(number){
    let i = number
    while (i >= 0){
        console.log(i)
        i--
    }
}


// countdown(11)
