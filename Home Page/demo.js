const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('First listener');
});myEmitter.on('event', () => {
    console.log('Second listener');
    myEmitter.emit('event');
});myEmitter.emit('event');