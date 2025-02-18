// EventEmitter is a core module in Node. js used to create and handle custom events.
// It is a part of event module and is often used for building event-driven systems in Node.js
const EventEmitter=require('events');
// Create an instance of EventEmiiter
const emitter=new EventEmitter();
//1. Define an event listener(addListener)
emitter.on("greet",()=>{
    console.log("hello Kuber");
})
//2.trigger (emit)the "greet" event
emitter.emit("greet");