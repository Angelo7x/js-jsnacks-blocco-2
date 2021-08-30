// creo array

var primoArr = [1, 2, 3, 4, 5];
var secondoArr = [6, 7];

// controllo lugnhezza dei due array

// if ( primoArr.lenght < secondoArr.lenght ) {
    
//     while ( primoArr.lenght < secondoArr.lenght) {
//         primoArr.push(Math.floor(Math.random() * 100));
//     }
// } else if ( secondoArr.lenght > primoArr.lenght) {

//     while ( secondoArr.lenght < primoArr.lenght) {
//         secondoArr.push(Math.floor(Math.random() * 100));
//     }
// } else {
//     alert("gli array hanno la stessa lunghezza");
// }




while ( primoArr.lenght < secondoArr.lenght) {
    primoArr.push(Math.floor(Math.random() * 100));
}

while ( secondoArr.lenght < primoArr.lenght) {
    secondoArr.push(Math.floor(Math.random() * 100));
}

if ( primoArr.lenght == secondoArr.lenght ) {
    alert("Gli array hanno la stessa lunghezza");
}

console.log (primoArr);
console.log (secondoArr);