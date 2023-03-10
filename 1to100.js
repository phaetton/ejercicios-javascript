/***
 * Crear una función que imprima los números del 1 al 100 consecutivos
 * si el número es multiplo de 3 escribir fizz
 * si el número es multiplo de 5 escribir buzz
 * si el número es multiplo de 3 y 5 escribir fizzbuzz
 */
fizzbuzz();

function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            if (i % 5 == 0) {
                console.log("fizzbuzz");
            } else {
                console.log("fizz");
            }
        }

        else if (i % 5 == 0) {
            if (i % 3 == 0) {
                console.log("fizzbuzz");
            } else {
                console.log("buzz");
            }
        } else {
            console.log(i);
        }
    }
}