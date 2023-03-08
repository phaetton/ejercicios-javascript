/****
 * 
 * Dada una cadena de texto comprobar si es un palindromo o no
 * los palindromos son palabras que se leen igual aun estando invertidas
 * ej: ana, bob, otto, allivessevilla
 * 
 * palindromo("otto");      //true
 * palindromo("rafael")     //false
 * 
*/

function palindromo(value) {
    let invertir = value
                    .split('')
                    .reverse()
                    .join('');
   return invertir === value ? `La palabra "${value}" es palindromo` :`La palabra "${value}" no es palindromo`
}

console.log(palindromo("otto"));      //true
console.log(palindromo("rafael"));    //false