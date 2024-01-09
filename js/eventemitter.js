const events  = require('events')

const emitter = new events();

emitter.on('greet',(name)=>{
  console.log(`hello ${name}`);
})
emitter.emit('greet','john')

