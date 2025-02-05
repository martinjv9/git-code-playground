"use strict";

// const variable = "Dave";
// console.log(variable);

const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("Odd number!");
      }
      console.log("Even number!");
      // throw new customError("This is a custom error!")
      // const name = "Martin";
      // name = "Joe";
    } catch (err) {
      //   console.error(err.name);
      //   console.error(err.message);
      console.error(err.stack);
    } finally {
      console.log("...finally");
      i++;
    }
  }
};

makeError();
// console.log("TACO!");

function customError(message) {
  this.message = message;
  this.name = "customError";
  this.stack = `${this.name}: ${this.message}`;
}
