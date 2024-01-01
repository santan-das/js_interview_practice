// arrow functions
// it is a shorter syntax for using functions in js
// if arguments are one then no need of arrow and return statement.
// to return a object from arrow functions wrap in paranthesis
// this in arrow functions will always point to window object
// argument binding doesn't support in arrow functions
// const getUser = (x) => {
//     return x;
// }

function getName() {
    console.log(arguments);
   for (let index = 0; index < arguments.length; index++) {
    return arguments[index];
    
   }
}

console.log(getName(2,4));
const getUser = (x) => x;

// console.log(getUser(2));
