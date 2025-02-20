const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// Create a new instance of the MyEmitter class
const myEmitter = new MyEmitter();

// Add a listener for the "log" event
myEmitter.on("log", (message) => {
  logEvents(message);
});

setTimeout(() => {
  myEmitter.emit("log", "Event 1");
}, 2000);
