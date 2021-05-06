// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



var randomArr = [];
var arrUserNum = [];

while (randomArr.length < 5) {
    var numRandom = getRndInteger(1, 100);
    if (!randomArr.includes(numRandom) ) {
        randomArr.push(numRandom);
    }
}
alert(randomArr);

//impostare timer di 30 secondi 
setTimeout( userNumber, 3000 );

console.log('array pc: ', randomArr);
console.log('array user: ', arrUserNum);

//compare arrays






// -----------FUNCTION-----------
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function userNumber() {
    
    while (arrUserNum.length < 5) {
        var insertNum = parseInt(prompt('inserisci 5 num'))
        if (!arrUserNum.includes(insertNum) && !isNaN(insertNum) && insertNum > 1 && insertNum < 100) {
            arrUserNum.push(insertNum);
        }
    }
    return arrUserNum;
}

function checkArrays(arr1, arr2) {
    var test = arr1.includes(arr2);
    return test;
}

