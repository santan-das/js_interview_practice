// mutable and immutable object 

// immutable objects are variable strings null boolean
let a = 20;
let b = a;
//  b = b+1;
console.log(a);
console.log(b);

let obj = {
    name: "test",
    age : 23
}

// let obj1 = obj;
let obj1 = Object.assign({}, obj);
obj1.age = 34;

console.log(obj);
console.log(obj1);