
var email = ['giacomo.1936@gmail.com', 'giacomo.ur88@gmail.com', 'giacomo.ur1936@gmail.com'];

var elementArray = prompt ("qual è la tua mail")
console.log("la tua mail è " + elementArray);

var email_trovata = false;

for (var i = 0; i < email.length; i++) {

    var email_corrente = email[i]

    if (elementArray == email_corrente) {
        var email_trovata = true;
    }
}

if (email_trovata == true) {
    console.log("ci sei");
} else {
    console.log("non ci sei");
}
