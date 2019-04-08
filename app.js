console.log("Isso é um teste...");

// requer o pacote "readline-sync"
// tal pacote serve pra ler entrada do usuário
var readlineSync = require('readline-sync');
 
// Ler entrada do usuário
var nome = readlineSync.question('Qual o seu nome? ');
// mostrar resultado
console.log('Oi ' + nome + '!');

var comida = readlineSync.question('Qual sua comida favorita? ');
console.log('Oh, ' + nome + ' ama ' + comida + '!');

console.log("qqr coisa!!!");