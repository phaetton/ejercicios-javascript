/*
 * Llamar a una API es una de las tareas más comunes en programación.
 *
 * Implementa una llamada HTTP a una API (la que tú quieras) y muestra su
 * resultado a través de la terminal. Por ejemplo: Pokémon, Marvel...
 *
 * Aquí tienes un listado de posibles APIs: 
 * https://github.com/public-apis/public-apis
 */

function porId(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(Response => Response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}
porId(25)

function porUrl(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}
porUrl('https://pokeapi.co/api/v2/pokemon');