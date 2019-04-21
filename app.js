// requer o pacote "readline-sync"
// tal pacote serve pra ler entrada do usuário
var readlineSync = require('readline-sync');

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
var x = 0;
var checker;
var rand = 0;
var zeroCheck;
var ctr = 0;
var processCurrent = 0;
var processOver = [5];
var processOrder = [5];
var avgWait = 0;
var sum = 0;
var processTimeSum = [5];
var totalProcTime = 0;

// FUNCTIONS

// return true if in range, otherwise false
function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

// MAIN CODE

for (i = 0; i < 15; i++) {
  tickets[i] = i + 1;
}

// Gera a prioridade do processo
for (i = 0; i < process.length; i++) {
  processPriority[i] = parseInt(readlineSync.question("Prioridade do processo " + processIdentifier[i] + ": "));
}

console.clear();

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

// Completa 15 tickets em caso de ter menos
var ticketSumCheck = 0;

for (i = 0; i < 5; i++) {
  ticketSumCheck += ticketAmount[i];
}

if (ticketSumCheck === 15) {
  //console.log("15 certinho");
} else {
  //console.log("Não deu 15!!!");
  ticketAmount[4] += 15 - ticketSumCheck;
}

// Gera o tempo dos processos
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

// Sorteio dos processos
checker = null;
i = 0;

while (i < 5) {
  zeroCheck = Math.floor(Math.random() * (16));
  
  if (zeroCheck > 0) {
    rand = zeroCheck;

  for (j = 0; j < ticketsA.length; j++) {
    if (rand === ticketsA[j]) {
      checker = true;
      processCurrent = process[0];
      break;
    }
  }
  
  for (j = 0; j < ticketsB.length; j++) {
    if (rand === ticketsB[j]) {
      checker = true;
      processCurrent = process[1];
      break;
    }
  }
  
  for (j = 0; j < ticketsC.length; j++) {
    if (rand === ticketsC[j]) {
      checker = true;
      processCurrent = process[2];
      break;
    }
  }
  
  for (j = 0; j < ticketsD.length; j++) {
    if (rand === ticketsD[j]) {
      checker = true;
      processCurrent = process[3];
      break;
    }
  }
  
  for (j = 0; j < ticketsE.length; j++) {
    if (rand === ticketsE[j]) {
      checker = true;
      processCurrent = process[4];
      break;
    }
  }
  
  if (checker) {
    for (j = 0; j < processOver.length; j++) {
      if (processCurrent != processOver[j]) {
        checker = true;
      } else {
        checker = false;
        break;
      }
    }
  }
  
    if (checker) {
      processOver[i] = processCurrent;
      //console.log(rand, processCurrent);
      i++;
      checker = null;
    }
  }
}


// Mostra o resultado final
console.log("O 'I' T P B");
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

console.log("\nSorteio", processOver);

// Tempo de processamento e espera
// Tempo de espera pra iniciar
for (i = 0; i < 5; i++) {
  
  if (i === 0) {
    processTimeSum[i] = 0;
    sum += processTime[processOver[i] - 1];
  } else {
    processTimeSum[i] = sum;
    sum += processTime[processOver[i] - 1];
  }
  
}

for (i = 0; i < 5; i++) {
  avgWait += processTimeSum[i];
}

console.log('\nTempo médio de espera:\n'
+ processIdentifier[processOver[0] - 1] + ' = ' + processTimeSum[0] +', '
+ processIdentifier[processOver[1] - 1] + ' = ' + processTimeSum[1] +', '
+ processIdentifier[processOver[2] - 1] + ' = ' + processTimeSum[2] +', '
+ processIdentifier[processOver[3] - 1] + ' = ' + processTimeSum[3] +', '
+ processIdentifier[processOver[4] - 1] + ' = ' + processTimeSum[4]
+ '\n=> ' + avgWait + '/5 = ' + avgWait/5);

// Tempo de espera pra iniciar
console.log('Tempo de espera para iniciar');
console.log( processIdentifier[processOver[0] - 1] + ' = ' + processTimeSum[0] +', '
+ processIdentifier[processOver[1] - 1] + ' = ' + processTimeSum[1] +', '
+ processIdentifier[processOver[2] - 1] + ' = ' + processTimeSum[2] +', '
+ processIdentifier[processOver[3] - 1] + ' = ' + processTimeSum[3] +', '
+ processIdentifier[processOver[4] - 1] + ' = ' + processTimeSum[4]);

// Tempo de processamento de cada processo
console.log('Tempo de proc. de cada processo:\nA = '+ processTime[0]
+ ', B = ' + processTime[1]
+ ', C = ' + processTime[2]
+ ', D = ' + processTime[3]
+ ', E = ' + processTime[4]);

// Tempo total de processamento
for (i = 0; i < 5; i++) {
  totalProcTime += processTime[i];
}

console.log('Tempo total de processamento:\n=> ' + totalProcTime);
console.log("Tempo de espera pra finalizar:\nA = 0, B = 0, C = 0, D = 0, E = 0,");

console.log("\n20% de chance de um processo ser sorteado");
console.log("A = " + Math.round(ticketAmount[0]/15 * 100) + "%, "
+ "B = " + Math.round(ticketAmount[1]/15 * 100) + "%, "
+ "C = " + Math.round(ticketAmount[2]/15 * 100) + "%, "
+ "D = " + Math.round(ticketAmount[3]/15 * 100) + "%, "
+ "E = " + Math.round(ticketAmount[4]/15 * 100) + "%");