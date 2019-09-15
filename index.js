// Code your solutions in this file
function writeCards(names) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
      console.log(messages);
  }
  return messages;
}

function countdown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i--);
    }
}