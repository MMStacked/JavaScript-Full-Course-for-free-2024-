//	SWITCH = can be an efficient replacement to many else if statements 

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let day = 3;


switch(day) {
	case 1:
		console.log(`Today is Monday`);
		break;
	case 2:
		console.log(`Today is Tuesday`);
		break;
	case 3:
		console.log(`Today is Wednesday`);
		break;
	case 4:
		console.log(`Today is Thursday`);
		break;
	case 5:
		console.log(`Today is Friday`);
		break;
	case 6:
		console.log(`Today is Saturday`);
		break;
	case 7:
		console.log(`Today is Sunday`);
		break;
	case "chicken":
		console.log(`What in the name of chicken...`);
		break
	default:
		console.log(`${day} is not a day`);
}
		*/

let testScore = 62;
let letterGrade;

switch(true) {
	case testScore >= 90:
		letterGrade = "A";
		break;
	case testScore >= 80:
		letterGrade = "B";
		break;
	case testScore >= 70:
		letterGrade = "C";
		break;
	default:
		letterGrade = "Failed";
}
console.log(`Your grade for the test is: ${letterGrade}`);