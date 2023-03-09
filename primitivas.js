var root
var primero = 20
var segundo = primero
primero = 25

var v1 = segundo / 0
var v2 = "42"
var v3 = v2 + primero

var logado = Symbol("logado")
var user = {
  name: "Horacio",
  logado: true,
}

console.log(segundo);   //20
console.log(primero);   //25
console.log(v1);        //infinity
console.log(v2);        //42
console.log(v3);        //4225
console.log(user.logado); //true