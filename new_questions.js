const collectAnswers = require('./lib/collectAnswers')
const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with Node.js? "
];


const answerEvents = collectAnswers(questions);

answerEvents.on('answer', answer => {
  console.log(`question answered: ${answer}`)
})

answerEvents.on('complete', answers =>{
  console.log("Thank you for the answers. ");
  console.log(answers);
})

answerEvents.on('complete', ()=> process.exit());