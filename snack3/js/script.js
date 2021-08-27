var nomi = ["Mario", "Giuseppe", "Angelo"];
var cognomi = ["Rossi", "Verdi", "Bianchi"];

for ( var i = 0; i < nomi.length; i++) {

    var randomNomi = Math.floor(Math.random() * nomi.length);

    var randomCognomi = Math.floor(Math.random() * cognomi.length);

    
    console.log(nomi[randomNomi ] + cognomi[randomCognomi]);

}