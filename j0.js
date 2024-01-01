const arr = [1,2,1,4,3,2];
const newarr = [];

for (let i = 0; i < arr.length; i++) {
    // const element = arr[i];
    if (!newarr[i]) {
        newarr.push(arr[i]);
    }
    
}

console.log(newarr);