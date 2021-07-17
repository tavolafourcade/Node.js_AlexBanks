const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('customEvent', (message, user)=>{
  console.log(`${user}: ${message}`);
});

emitter.emit('customEvent', 'Hello World', 'Computer');
emitter.emit('customEvent', 'Thats pretty cool no?', 'Octavio');
