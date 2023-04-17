const quizContainer = document.getElementById('quiz-container');
const timerContainer = document.getElementById('timer-container');
const timerElement = document.getElementById('timer');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nameInput = document.getElementById('name-input');
const numberInput = document.getElementById('number-input');
const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreChart = document.getElementById('score-chart');
const scoreText = document.getElementById('score-text');


let time = 120; // Time in seconds
const timer = setInterval(function() {
  time--;
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
  if (time <= 0) {
    clearInterval(timer);
    alert('Time is up!');
  }
}, 1000);










let shuffledQuestions, currentQuestionIndex, timerInterval, score;

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
currentQuestionIndex++;
setNextQuestion();
});

function startQuiz() {
score = 0;
startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainer.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }
  
  function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('answer-button');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  }
  
  function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide');
    } else {
      startButton.innerText = 'Restart';
      startButton.classList.remove('hide');
    }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add('correct');
    } else {
      element.classList.add('wrong');
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
  }
  
  const questions = [  {    question: 'What is a cache?',    answers: [      { text: 'A cache is a small amount of fast memory used to store frequently accessed data or instructions in order to improve system performance.', correct: true },      { text: 'A cache is a large amount of fast memory used to store frequently accessed data or instructions in order to slow system performance.', correct: false }    ]
    },
    {
      question: ' What is the capital of Australia?',
      answers: [
        { text: 'Canberra', correct: true },
        { text: 'Limi', correct: false },
        { text: 'Nepto', correct: false},
        { text: 'Freetown', correct: false}
      ]
    },
    {
      question: ' What is the name of the world largest ocean?',
      answers: [
        { text: 'Red Sea', correct: false },
        { text: 'Atilantic Ocean', correct: false },
        { text: 'Atantic Ocean', correct: false },
        { text: 'Pacific Ocean', correct: true }
      ]
    },


{
      question: ' Who is the author of the Harry Potter series?',
      answers: [
       { text: 'Terry Woods', correct: false },
        { text: 'Adam Smith', correct: false },
        { text: 'J.K. Rowling', correct: true },
        { text: 'Loe Mathio', correct: false }
      ]
    },

{
      question: ' What is the chemical symbol for gold?',
      answers: [
       { text: 'Gu', correct: false },
        { text: 'Au', correct: true},
        { text: 'Mu', correct: false},
        { text: 'Al', correct: false }
      ]
    },


{
      question: ' What is an API?',
      answers: [
       { text: 'An API (Application Programming Interface) is a set of protocols, routines, and tools for building software applications', correct: false },
        { text: 'An API (Application Programming Interface) is a set of protocols, routines, and tools for building software applications', correct: true},
        { text: 'An API (Application Programming Interface) is a set of protocols, routines, and tools for building hardware applications', correct: false},
        { text: 'An API (Application Process Interface) is a set of protocols, routines, and tools for building software applications', correct: false }
      ]
    },


{
      question: ' What is the difference between a compiler and an interpreter?',
      answers: [
       { text: 'A compiler translates source code into machine code before execution, while an interpreter directly executes the source code line by line.', correct: true},
        { text: 'A compiler translates source code into human language before execution, while an interpreter directly executes the source code line by line.', correct: false},
        { text: 'A compiler translates source code into machine code before execution, while an interpreter indirectly executes the source code line by line.', correct: false},
        { text: 'None', correct: false }
      ]
    },


{
      question: ' What is the difference between a linked list and an array?',
      answers: [
       { text: 'An array is a contiguous block of computers that stores a fixed number of elements, while a linked list is a dynamic data structure where each element points to the next element in the list.', correct: false },
        { text: 'An array is a contiguous block of memory that stores a fixed nature of elements, while a linked list is a dynamic data structure where each element points to the next element in the list.', correct: false },
        { text: 'An array is a contiguous block of memory that stores a fixed number of elements, while a linked list is a dynamic data structure where each element points to the next element in the list. ', correct: true },
        { text: 'An array is a contiguous block of memory that stores a dynamic number of elements, while a linked list is a fixed data structure where each element points to the next element in the list.', correct: false }
      ]
    },


{
      question: ' What is the purpose of a mutex?',
      answers: [
       { text: 'A mutex is a synchronization primitive used to ensure that only one thread can access a shared resource at a time.', correct: true },
        { text: 'A mutex is a synchronization primitive used to ensure that  only two threads can access a shared resource at a time.', correct: false},
        { text: 'A mutex is a synchronization primitive used to ensure that multiple threads can access a shared resource at a time.', correct: false},
        { text: 'A mutex is a synchronization primitive used to ensure that threads can not access a shared resource at a time.', correct: false }
      ]
    },


{
      question: ' What is the difference between a stack and a queue?',
      answers: [
       { text: 'A stack is a Last-In-First-In (LIFI) data structure, while a queue is a First-In-First-Out (FIFO) data structure.', correct: false },
        { text: 'A stack is a Last-In-First-Out (LIFO) data structure, while a queue is a First-In-First-Out (FIFO) data structure.', correct: true},
        { text: 'A stack is a Last-In-First-Out (LIFO) data structure, while a queue is a First-In-Last-Out (FILO) data structure.', correct: false},
        { text: 'A stack is a Last-In-First-Out (LIFO) data structure, while a queue is a First-Out-First-Out (FOFO) data structure.', correct: false }
      ]
    },

{
      question: ' What is a network protocol?',
      answers: [
       { text: 'A network protocol is a set of rules and standards that define how data is transmitted over a nodes.', correct: false },
        { text: 'A network protocol is a set of rules and standards that define how data is transmitted over a network.', correct: true},
        { text: 'A network protocol is a set of rules and standards that define how machine is transmitted over a network.', correct: false},
        { text: 'A network protocol is a set of data that define how data is transmitted over a network.', correct: false }
      ]
    },


  ];
