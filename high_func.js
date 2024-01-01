// map - transfrom each individual array elements, like transforming to names to uppercase - creates new array without affecting original array
// fitler - filter some data like age > 2 - creates new array without affecting original array
// reduce -  when we need to bring some single value like sum, avg 
// reduce takes a accumulator


// diff in map and foreach
// ---------------------------
// foreach doesn't return any value it transaforms original array.

companies = [
    {name : "Google", category:"PB", start:1981, end: 2004},
    {name : "Amazon", category:"PB", start:1971, end: 2009},
    {name : "Cognizant", category:"SB", start:1971, end: 2009}, 
];

const ages = [12,20,56,34,34,67,77];

// for (let index = 0; index < companies.length; index++) {
//     const element = companies[index];
//     console.log(element);
// }

// companies.forEach(element => {
//     console.log(element);
// });

// with arrow functions
// companies.forEach((element) => {
//     console.log(element);
// });

// newages = ages.filter((age) => {
//     if (age > 20) return true
// });
// console.log(newages);

// const sb = companies.filter((company) => {
//     if (company.category === 'SB') {
//         return `company name is {$company.name}`;
//     }      
// })
const sb = companies.filter((company) => {
    if (company.category === 'SB'){
        // return `company name is ${company.name}`;  
        return true;  
    }
      
})
// console.log(sb);

const sumage = ages.reduce((total, age)=>{
   return total += age
},0)
// console.log(sumage);

const users = ["santan", "raja", "rani"];
const newarr = users.map((user) => {
    return user.toUpperCase();
}
 )
 console.log(newarr);