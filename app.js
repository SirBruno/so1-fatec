// requer o pacote "readline-sync"
// tal pacote serve pra ler entrada do usuário
var readlineSync = require('readline-sync');
 
/*
// Ler entrada do usuário
var nome = readlineSync.question('Qual o seu nome? ');
// mostrar resultado
console.log('Oi ' + nome + '!');

var comida = readlineSync.question('Qual sua comida favorita? ');
console.log('Oh, ' + nome + ' ama ' + comida + '!');

console.log("qqr coisa!!!");
*/

var process = [1, 2, 3, 4, 5];
var processIdentifier = ['A', 'B', 'C', 'D', 'E'];
var processTime = [];
var processPriority = [5];
var ticketAmount = [5];
var tickets = [];
var ticketsA = [];
var ticketsB = [];
var ticketsC = [];
var ticketsD = [];
var ticketsE = [];
var ticketCurrent;
var ticketsPicked = [15];
var i;
var j;
var checker;
var rand = 0;
var zeroCheck;
var ctr = 0;

// FUNCTIONS

// return true if in range, otherwise false
function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

//console.log(inRange(5, 1, 5)); //true

// MAIN CODE

for (i = 0; i < 15; i++) {
  tickets[i] = i + 1;
}

// Gera a prioridade do processo

for (var i = 0; i < process.length; i++) {
    processPriority[i] = parseInt(readlineSync.question("Prioridade do processo " + processIdentifier[i] + ": "));
}

// Gera a quantidade de bilhetes por processo

checker = null;
i = 0;
ctr = 4;

while (i < 5) {
  zeroCheck = Math.floor(Math.random() * (16 - ctr));
  
  if (zeroCheck > 0) {
    rand = zeroCheck;
    
    ticketAmount[i] = rand;
    ctr--;
    ctr = ctr + rand;
    i++;
    
  }
  
}

//var random = Math.floor(Math.random() * 10);

// Gera o tempo do processo

for (var i = 0; i < process.length; i++) {
  processTime[i] = parseInt(readlineSync.question("Tempo do processo " + processIdentifier[i] + ": "));
}

console.clear();

// Parte que distribui os tickets

checker = null;
i = 0;

while (i < ticketAmount[0]) {
  zeroCheck = Math.floor(Math.random() * (16));
  
  if (zeroCheck > 0) {
    rand = zeroCheck;

  for (j = 0; j < ticketAmount[0]; j++) {
    if (rand != ticketsPicked[j]) {
      checker = true;
    } else {
      checker = false;
      break;
    }
  }
  
    if (checker) {
      ticketsPicked[i] = zeroCheck;
      ticketsA[i] = rand;
      i++;
    }
  }
}

checker = null;
i = 0;

while (i < ticketAmount[1]) {
  zeroCheck = Math.floor(Math.random() * (16));
  
  if (zeroCheck > 0) {
    rand = zeroCheck;

  for (j = 0; j < 15; j++) {
    if (rand != ticketsPicked[j]) {
      checker = true;
    } else {
      checker = false;
      break;
    }
  }
  
    if (checker) {
      ticketsPicked[i + ticketAmount[0]] = zeroCheck;
      ticketsB[i] = rand;
      i++;
    }
  }
}

checker = null;
i = 0;

while (i < ticketAmount[2]) {
  zeroCheck = Math.floor(Math.random() * (16));
  
  if (zeroCheck > 0) {
    rand = zeroCheck;

  for (j = 0; j < 15; j++) {
    if (rand != ticketsPicked[j]) {
      checker = true;
    } else {
      checker = false;
      break;
    }
  }
  
    if (checker) {
      ticketsPicked[i + ticketAmount[0] + ticketAmount[1]] = zeroCheck;
      ticketsC[i] = rand;
      i++;
    }
  }
}

checker = null;
i = 0;

while (i < ticketAmount[3]) {
  zeroCheck = Math.floor(Math.random() * (16));
  
  if (zeroCheck > 0) {
    rand = zeroCheck;

  for (j = 0; j < 15; j++) {
    if (rand != ticketsPicked[j]) {
      checker = true;
    } else {
      checker = false;
      break;
    }
  }
  
    if (checker) {
      ticketsPicked[i + ticketAmount[0] + ticketAmount[1] + ticketAmount[2]] = zeroCheck;
      ticketsD[i] = rand;
      i++;
    }
  }
}

checker = null;
i = 0;

while (i < ticketAmount[4]) {
  zeroCheck = Math.floor(Math.random() * (16));
  
  if (zeroCheck > 0) {
    rand = zeroCheck;

  for (j = 0; j < 15; j++) {
    if (rand != ticketsPicked[j]) {
      checker = true;
    } else {
      checker = false;
      break;
    }
  }
  
    if (checker) {
      ticketsPicked[i + ticketAmount[0] + ticketAmount[1] + ticketAmount[2] + ticketAmount[3]] = zeroCheck;
      ticketsE[i] = rand;
      i++;
    }
  }
}

// Tempo de Processamento


// Mostra o resultado final
for (i = 0; i < process.length; i++) {
  if (i === 0) {
    ticketCurrent = ticketsA;
  } else if (i === 1) {
    ticketCurrent = ticketsB;
  } else if (i === 2) {
    ticketCurrent = ticketsC;
  } else if (i === 3) {
    ticketCurrent = ticketsD;
  } else {
    ticketCurrent = ticketsE;
  }
  
  console.log(process[i],
  processIdentifier[i],
  processTime[i],
  processPriority[i],
  ticketAmount[i],
  ticketCurrent);
}