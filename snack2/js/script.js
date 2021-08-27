var numeroUtente = parseInt(prompt("Inserisci un numero"));

while ( isNaN( numeroUtente ) ) {
    numeroUtente = parseInt(prompt("Attento! Inserisci un numero"))
}

if (numeroUtente %2 == 0) {
    console.log(numeroUtente)
} else {
    console.log(numeroUtente + 1)
}

