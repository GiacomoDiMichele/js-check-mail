//creo l'array con le email corrette
var email = ['giacomo.1936@gmail.com', 'giacomo.ur88@gmail.com', 'giacomo.ur1936@gmail.com'];

//domando all'utente la mail corrente
var elementArray = prompt ("qual è la tua mail")
console.log("la tua mail è " + elementArray);

//imposto una variabile sentinella
var email_trovata = false;

//imposto un ciclo for per verificare se l'email è presente in una delle tante mail inserite
for (var i = 0; i < email.length; i++) {

    var email_corrente = email[i]

    if (elementArray == email_corrente) {
        var email_trovata = true;
        //ho trovato la mail corretta, cambio il valore della variabile in true
    }
}


if (email_trovata == true) {
    //se ho trovato la mail stampo "ci sei"
    console.log("ci sei");
} else {
    //se non ho tro
    console.log("non ci sei");
}
