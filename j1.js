// print fizz buzz

for (let i = 1; i < 30; i++) {
    // const element = array[i];
    if (i % 15 == 0) {
    // if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizz buzz");
    }else if(i % 3 == 0) {
        console.log("fizz");
    }else if (i % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }

    
}