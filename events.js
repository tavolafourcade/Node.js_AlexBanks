const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('customEvent', (message, user)=>{
  console.log(`${user}: ${message}`);
});

// emitter.emit('customEvent', 'Hello World', 'Computer');
// emitter.emit('customEvent', 'Thats pretty cool no?', 'Octavio');

//Example of event emitter that is asynchronous.
process.stdin.on('data', data =>{
  const input = data.toString().trim(); //What user types

  if (input === 'exit'){
    emitter.emit('customEvent', 'Goodbye!', 'process')
    process.exit()
  }else{
    emitter.emit('customEvent', input, 'terminal');
  }
})
