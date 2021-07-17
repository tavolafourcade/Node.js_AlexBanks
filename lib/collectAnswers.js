const readline = require('readline');

//Readline interface for answering questions
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//done = f => f: in case the user don't call the done callback will not show an error. It makes the second argument optional.
module.exports = (questions, done = f => f) => {
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
