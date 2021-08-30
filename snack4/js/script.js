var numeri = [1, 2, 3, 4, 5, 6, 7];

var somma = 0;

for (var i = 0; i < numeri.length; i++ ) {
    if ( i %2 == 1) {
        somma = somma + numeri [i];
    }
}

console.log(somma);