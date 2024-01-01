
let obj = {}
let str = "acgbba";
let count = 1;
for (var i = 0; i < str.length; i++) {
	
	if (obj[str[i]]){
		obj[str[i]] = count + 1;
	}
	else{
		count = 1;
		obj[str[i]] = count;	
	}
	
}

// console.log(obj);
for (let val in obj) {
	// console.log(obj[val]);
	if(obj[val]>1) {
		console.log(val+' ------'+obj[val]);

	}
}


// console.log(false == 0);
// console.log(false == '0');
// console.log(false === '0');
// console.log(true === '1');
// console.log(true === 1);
// console.log(true+true);
// console.log(false+false);
// console.log(2+2-2); //2
// console.log("2"+"2"-"2"); //20

// var name = "test";
// let price = 20;
// console.log(name,price);
// // console.log(price);

// console.log(true + +"1");

