
var email = ['giacomo.1936@gmail.com', 'giacomo.ur88@gmail.com', 'giacomo.ur1936@gmail.com'];

var elementArray = prompt ("qual è la tua mail")

for (var i = 0; i < email.length; i++) {

    var email = email[i]

    if (elementArray == email) {
        console.log("email corretta");
    }
}

if (elementArray != email) {
    console.log("email non corretta");
}
