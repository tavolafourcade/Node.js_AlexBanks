const readline = require('readline');

//Readline interface for answering questions
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with Node.js? "
];

const collectAnswers = (questions, done) => {
  const answers = [];
  const [firstQuestion] = questions;
  
  const questionAnswered = answer => {
    answers.push(answer);
    if(answers.length < questions.length){
      //Any other question is asked here
      rl.question(questions[answers.length], questionAnswered);
    }else{
      //When we have all the answers we invoke the done callback
      done(answers);
    }
  }

  //Asking 1st question
  rl.question(firstQuestion, questionAnswered);
}
collectAnswers(questions, answers =>{
  console.log("Thank you for the answers. ");
  console.log(answers);
  process.exit();
});