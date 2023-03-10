// Code your solutions in this file

function writeCards(nameArray, giftType) {
    let messageArray = [];

    for(let i = 0; i < nameArray.length; i++) {
        let messageString = `Thank you, ${nameArray[i]}, for the wonderful ${giftType} gift!`;
        messageArray.push(messageString);

    }
    
    return messageArray;
}


function countDown(numberIn) {
    let counter = Number(numberIn);
    
    while (counter >= 0) {
        console.log(counter);

        counter--;
    }
}