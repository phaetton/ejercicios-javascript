/******
 * Dada una palabra buscarla en una frase y devolver cuantas veces aparece en ella
 * la frase y la palabra debe ser parametros de la function
 * 
 * ej:
 * coincidencia("la palabra aparece, en esta oración. colocando , elementos!!.", "PALABRA") //devuelve 1;
 * coincidencia("esta es una frase con texto", "PALABRA")        //devuelve 0;
 * 
 */

function coincidencia(frase, palabra) {
    let expresion = /[!¡"#$%&/()=?¿,.-]/gi;
    let Apalabra = palabra.toLowerCase();
    let Afrase = frase.toLowerCase().replace(expresion, '');
    console.log(Afrase);
    if (Afrase.includes(Apalabra)) {
        let recortadas = Afrase.split(' ');
        let mapa={}
        for (const record of recortadas) {
            if(mapa[record]){
                mapa[record]++;
            }else{
                mapa[record]=1;
            }
        }
        return mapa[Apalabra];
    } else {
        return 0;
    }
}

console.log(coincidencia("la palabra aparece, en esta oración. colocando , elementos palabra PalAbra!!.", "PALABRA")); //devuelve 1;
console.log(coincidencia("esta es una frase con texto", "PALABRA"));     //devuelve 0;