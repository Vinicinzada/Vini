class Accordion {
  constructor(accordionListQuestions) {
    this.accordionListQuestions = document.querySelectorAll(accordionListQuestions);
    this.activeItemClass = "active";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeItemClass);
    item.nextElementSibling.classList.toggle(this.activeItemClass);
  }

  addAccordionEvent() {
    this.accordionListQuestions.forEach((question) => {
      question.addEventListener("click", () => this.toggleAccordion(question));
    });
  }

  init() {
    if (this.accordionListQuestions.length) {
      this.addAccordionEvent();
    }
    return this;
  }
}

const accordion = new Accordion(".faq-question");
accordion.init();

//CRONOMETRO
var cronometroRodando = false;
var intervaloCronometro;

function iniciarCronometro() {
  var tempoRestante = 300; // 5 minutos em segundos
  var cronometroElement = document.getElementById("cronometro");

  // Função para atualizar o cronômetro a cada segundo
  intervaloCronometro = setInterval(function () {
    var minutos = Math.floor(tempoRestante / 60);
    var segundos = tempoRestante % 60;

    cronometroElement.innerHTML = `${minutos.toString().padStart(2, '0')}:${segundos.toString()
      .padStart(2, '0')}`;

    tempoRestante--;

    // Quando o tempo acabar, limpar o intervalo e exibir uma mensagem
    if (tempoRestante < 0) {
      clearInterval(intervaloCronometro);
      cronometroElement.innerHTML = "Tempo encerrado!";
    }
  }, 1000); // Atualizar a cada segundo
  return intervaloCronometro;
  function reiniciarPagina() {
    location.reload();
  }
}
function startStopCronometro() {
  if (cronometroRodando) {
    clearInterval(intervaloCronometro);
    document.getElementById("startStopBtn").innerHTML = "Iniciar";
  } else {
    intervaloCronometro = iniciarCronometro();
    document.getElementById("startStopBtn").innerHTML = "Parar";
  }
  cronometroRodando = !cronometroRodando;
}
const questions = [
  { question: '1- EU SOU O ULTIMO MES DO ANO MENOS 2?', answer: '10' },
  { question: '2- O QUE TEM NO FINAL DE TODA CHUVA?', answer: 'A' }
];
let currentQuestionIndex = 0;
const questionText = document.getElementById('question-text');
const answerInput = document.getElementById('answer-input');
const resultMessage = document.getElementById('result-message');
const questionContainer = document.getElementById('question-container');
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  answerInput.value = ''; // Limpa o campo de resposta
}
function checkAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const currentQuestion = questions[currentQuestionIndex];
  if (userAnswer === currentQuestion.answer.toLowerCase()) {
    resultMessage.textContent = 'Resposta correta! Avance para a próxima pergunta.';
    resultMessage.style.color = 'green';
    displayQuestion();
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      setTimeout(() => {
        resultMessage.textContent = '';
        resultMessage.style.color = '';
      }, 1000); // 3 segundos de atraso
    }
  } else {
    resultMessage.textContent = 'Resposta incorreta. Tente novamente.';
    resultMessage.style.color = 'red';
    setTimeout(() => {
      resultMessage.textContent = '';
      resultMessage.style.color = '';
    }, 1000); // 3 segundos de atraso
  }

  if (currentQuestionIndex < questions.length) {
    // Avance para a próxima pergunta
    displayQuestion();
  } else {
    // Exibir uma mensagem de conclusão do questionário
    questionContainer.innerHTML = ''; // Remove o conteúdo das perguntas
    resultMessage.textContent = 'Parabéns! Você concluiu os enigmas e agora pode desativar a bomba.';

    resultMessage.style.color = 'blue';
    clearInterval(intervaloCronometro); // Parar o cronômetro quando o questionário for concluído
  }
}

displayQuestion();





// Toggle between hiding and showing blog replies/comments
document.getElementById("myBtn").click();
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function likeFunction(x) {
  x.style.fontWeight = "bold";
  x.innerHTML = "✓ Liked";
}

