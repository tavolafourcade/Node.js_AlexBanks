/* BUILDING A SIMPLE QUESTION AND ANSWER APP */

// Using these to read and write data from the terminal.
// process.stdin
// process.stdout


/* process.stdout */
// process.stdout.write('Hello ');
// process.stdout.write('World \n');

const questions = [
  "What's your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?"
]

const ask = (i=0) => {
  process.stdout.write(`\n\n${questions[i]}`);
  process.stdout.write(` > `);
};

//Asking the first question
ask();


/* Using process.stdin to listen for answers */
// The on function is used for listen to events.

const answers = [];
process.stdin.on('data', data =>{
  //Pushing the answer into the answer array
  answers.push(`\n\n${data.toString().trim()}\n\n`);
  
  if (answers.length < questions.length){
    ask(answers.length);
  }else{
    process.exit();
  }
});

process.on('exit', ()=>{
  const [name, activity, language] = answers;
  console.log(`
  
  Thanks for answer!
  
  Go ${activity} ${name}, you can code ${language} later`);
});


