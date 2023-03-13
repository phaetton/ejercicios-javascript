/**
 * Crear un cuadrado huevo con asteriscos
 * ej:
 * 
 * cuadrado(4)
 * 
 *   ****
 *   *  *
 *   *  *
 *   ****
 * 
 */
cuadrado(4);

function cuadrado(value) {
    for (let i = 0; i < value; i++) {
        let linea = "";
        for (let j = 0; j < value; j++) {
            if (i == 0 || i == value - 1) {
                linea += "*";
            } else {
                if (j == 0 || j == value - 1)
                    linea += "*";
                else
                    linea += " "
            }
        }
        console.log(linea);
    }
}