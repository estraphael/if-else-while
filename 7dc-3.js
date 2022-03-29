var question1 = parseInt(prompt("Digite o número correspondente: Você quer seguir a área de front(1) ou back-end?(2)"));

if(question1 == 1) {
  var answer1 = parseInt(prompt("Front? Legal! Você pretende aprender React(1) ou Vue(2)?"))
    if(answer1 == 1) {
      alert("Aí sim! Continue no caminho certo e aprenda React!")
    } else {
        alert("Boa! Mantenha-se focado e irá aprender Vue!")
    }
} else {
  var answer2 = parseInt(prompt("Back? Legal! Você pretende aprender C#(1) ou Java?(2)"))
    if(answer2 == 1) {
      alert("Haha! Continue assim e logo aprenderá C#!")
    }   else {
          alert("Continue estudando e logo estará fera em Java!")
    }
}

var question2 = parseInt(prompt("Depois de tanto estudo, você pretende seguir se especializando na área escolhida(1) ou pretende se tornar um Fullstack?(2)"));

if(question2 == 1) {
  alert("Poder dizer que é especialista em algo é um feito incrível!")
} else {
  alert("Um profissional Fullstack é indispensável para as empresas atuais! Continue assim!")
}

var question3 = prompt("Quais tecnologias você gostaria de se especializar ou conhecer?");
var question4 = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Responda 'ok' para inserir  outra!");

while(question4 == "ok") {
  var outraTecnologia = prompt("Legal! Qual outra?")
  alert("Aí sim! " + outraTecnologia + " É realmente muito legal!")
  question4 = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Responda 'ok' para inserir  outra!");