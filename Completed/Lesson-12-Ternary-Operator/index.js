//	ternary operator = a shortcut to if{} and else{} statements
// 				  	   helps to assign a variable based on a condition
//					   conditions ? codeIfTrue : codeIfFalse

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/*
let age = 21;
// Ternary operator version of the below if/else statement
let message = age >= 18 ? "You're an adult" : "You're a minor";
// longer version, normal if/else statement
// if(age >= 18) {
// 	message = `You're an adult`;
// } else {
// 	message = `You're a minor`;
// }

console.log(message);
		*/

/*
let time = 16;
let greeting = time < 12 ? `Good morning` : `Good afternoon`;
console.log(greeting);
		*/

		/*
let isStudent = true;
let message = isStudent ? `You are a student` : `You are not a student`;
console.log(message);
		*/

let purchaseTotal = 110;
let discount = purchaseTotal >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseTotal - purchaseTotal * (discount/100)}`)
