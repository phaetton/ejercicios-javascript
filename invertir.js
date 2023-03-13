/****
 * Data una cadena de texto, invertir los caracteres 
 * sin usar metodos propios del lenguaje
 * solo estructuras de control
 */

invertir("frase a invertir");
invertirof("segunda frase invertida");

function invertir(value){
    let invertida=""
    for (let i = value.length-1; i >=0; i--) {
        invertida += value[i];
        
    }
    console.log(invertida);
}

//otra forma
function invertirof(value){
    let invertida="";
    for (const palabra of value) {
        invertida = palabra + invertida;
    }
    console.log(invertida);
}