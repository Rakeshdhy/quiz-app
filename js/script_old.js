  // step 1 same method question one array object
const questions = [
  {
    question: "Which is largest animal in the world",
    answers: [
      { text: "shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ]
  },
  // step 2 question two array object
  {
    question: "Which is smallest country in the world",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Russia", correct: false },
      { text: "India", correct: false },
      { text: "Australia", correct: false },
    ]
  },
  // step 3 question three array object
  {
    question: "Which is largest desert in the world",
    answers: [
      { text: "Sahara Desert", correct: false},
      { text: "Australian Desert", correct: false },
      { text: "Antarctic Desert", correct: true },
      { text: "Arabian Desert", correct: false },
    ]
  },
  // step 4 question four array object
  {
    question: "Which is smallest continent in the world",
    answers: [
      { text: "Australia", correct: false },
      { text: "Africa ", correct:false },
      { text: "Asia", correct: false },
      { text: "Oceania", correct: true },
    ]

  }
];


//step 2 after create 3 variebles as i added id in html  
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");


// step 3
/* 
now whenever we will start quiz and give the ans. 
question number their score will be changing 
so we will create a variable to store the question index 0, 1,2,3 and score 

હવે જ્યારે પણ અમે ક્વિઝ શરૂ કરીશું અને જવાબો આપીશું
પ્રશ્ન નંબર અને તેમનો સ્કોર બદલાશે
તેથી અમે પ્રશ્ન અનુક્રમણિકા અને સ્કોર સંગ્રહિત કરવા માટે એક ચલ બનાવીશું
*/

let currentQuestionIndex = 0; // index start 0
let score = 0;

// step 4
// add one fuction 
/* 
here I have added one function start quiz so when we will start the quiz 
it should reset the current question 
index 0 and score 0 when we'll start the quiz
here we are adding inner HTML next
because at the end we will change the
text to the restart or replay 
so when we will start the quiz again the button
should be next

અહીં મેં એક ફંક્શન સ્ટાર્ટ ક્વિઝ ઉમેર્યું છે જેથી આપણે ક્વિઝ ક્યારે શરૂ કરીશું
તે વર્તમાન પ્રશ્ન રીસેટ જોઈએ
જ્યારે અમે ક્વિઝ શરૂ કરીશું ત્યારે અનુક્રમણિકા 0 અને સ્કોર 0
અહીં આપણે આગળ આંતરિક HTML ઉમેરી રહ્યા છીએ
કારણ કે અંતે આપણે બદલીશું
પુનઃપ્રારંભ અથવા ફરીથી ચલાવવા માટે ટેક્સ્ટ
તેથી જ્યારે આપણે ફરીથી ક્વિઝ શરૂ કરીશું ત્યારે બટન
આગળ હોવું જોઈએ
*/


// function start Quiz

function startQuiz(){
    currentQuestionIndex = 0;// reset the current question index 0
    score = 0; // score 0 when will start 

    // set the text next for the next button then only it will
    // call the another function so question that will display the questions
    nextButton.innerHTML = "Next";
    showquestion();  // use for another question display 

}


//step 5 showquestion
/* 
create function 
question that will display the questions
*/

function showquestion(){

   // step 6 reset the previous question and answer 
    // but pendding define this go to next step 
    resetState();   
    // end of step 6

    // show question display
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // then current wil be anser set below code 4 answer show 
    // display answer the code below 
      currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text; // display answer
        button.classList.add("btn");// add css class
        answerButtons.appendChild(button);// add button 


        // step9
      /* 
      it will add the true or false in this
      data set correct from here
      */
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        // end step9

    // step 8
      //click on the answer button it will call this function select answer
      button.addEventListener("click", selectAnswer ); 
    });

}

  // step 7 define the function
    // we have to  hide in html all btn answers
    // it will be remove the all the html button answers
function  resetState(){
 nextButton.style.display = "none";
 while(answerButtons.firstChild)
answerButtons.removeChild(answerButtons.firstChild);
}
    // end of step 7





//step 10
/* now we will add the function which is Select answer so let's
define th
is function Above This start quiz so here we'll add function
so when we will click on that button it
will add the selected button element in
this variable selected btn*/
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct"); 
 // step 13
  score++;

    }else{
        selectedBtn.classList.add("incorrect"); 

    }

// step 11
    Array.from(answerButtons.children).forEach(button =>{
  if(button.dataset.correct === "true"){
    button.classList.add("correct"); // automatically highlight
  }
  button.disabled = true; // disabled after click any one button
});
nextButton.style.display = "block";

}


//step 16
function showScore(){
  resetState(); // already created
  questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "play Again";
  nextButton.style.display = "block";
  }


//step 15
function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex < questions.length){
    showquestion();
} else{
    showScore();    // it will display code so scored   
}
}



// step 14
//next we will add the function for the next button 
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
        
    }else{
          /* 
suppose if there is no question and will
click on that button so it will restart
the quiz*/
        startQuiz();
    }

});


startQuiz();


