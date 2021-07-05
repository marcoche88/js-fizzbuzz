/*
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

var number = 0;
var result;

for (var i = 0; i < 100; i ++) {
    
    number = i + 1;
    
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
        result += " FizzBuzz";
    } else if (number % 3 === 0) {
        console.log("Fizz");
        result += " Fizz";
    } else if (number % 5 === 0) {
        console.log("Buzz");
        result += " Buzz";
    } else {
        console.log(number);
        result += " " + number.toString();
    }
}

document.write(result);