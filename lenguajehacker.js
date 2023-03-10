/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */
abecedario = {
    "A": "4",
    "B": "I3",
    "C": "[",
    "D": "|)",
    "E": "3",
    "F": "|=",
    "G": "&",
    "H": "#",
    "I": "1",
    "J": ",_|",
    "K": ">|",
    "L": "1",
    "M": "JVI",
    "N": "^/",
    "O": "0",
    "P": "|*",
    "Q": "(_,)",
    "R": "I2",
    "S": "5",
    "T": "7",
    "U": "(_)",
    "V": "|/",
    "W": "\/\/",
    "X": "><",
    "Y": "j",
    "Z": "2",
    "1": "L",
    "2": "R",
    "3": "E",
    "4": "A",
    "5": "S",
    "6": "b",
    "7": "T",
    "8": "B",
    "9": "g",
    "0": "o",
    " ": " ",
}

function lenguajehacker(cadena) {
    let cut = cadena.split('').map(function (x) {
        return abecedario[x.toUpperCase()];
    }).join('');
    return(cut);
}

var texto = "";
process.stdout.write("escribe un texto a traducir a lenguaje hacker:-");
process.stdin.on('data', function (data) {
    texto = data.toString();
    process.stdout.write(lenguajehacker(texto))
    process.exit();
})