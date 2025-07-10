//  IF STATEMENTS = if a condition is true, execute some code
//                  if not, do something else

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let age = 45;

if(age >= 18){
  console.log(`yay, you are old enough to enter this site.`);
}
  else {
    console.log(`You must be 18+ to enter this site`);
  }
    */

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  let time = 9;

  if(time <12){
    console.log(`good morning.`);
  } else{
    console.log(`good afternoon`);
  }
*/

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let isStudent = false;

if(isStudent){
  console.log(`You are a student`);
} else {
  console.log(`You are not a student`);
}
  */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let age = 5;
let hasLicense = false;

if(age >= 16){
  console.log(`You are old enough to drive.`);
  if(hasLicense) {
    console.log(`You have your license.`);
  }
    else{
      console.log(`You dont have your license yet.`);
    }
}
  else{
    console.log(`You must be 16+ to have a license.`);
  }
*/

let age;
  
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

mySubmit.onclick = function(){
	
	age = myText.value;
	age = Number(age);
	
	if (age >= 100){
	console.log(`You are Too Old to enter this site!`);
	resultElement.textContent = `You are TOO OLD to enter this site.`;
	}
	else if(age == 0){
		console.log(`You cant enter, you were just born.`);
		resultElement.textContent = `You can't enter, you were just born`;
	}
	else if (age >= 18) {
		console.log(`You may enter this site.`);
		resultElement.textContent = `You may enter this site`;
	}
	else if(age < 0){
		console.log(`Your age cannot be below 0.`);
		resultElement.textContent = `Your age cannot be below 0`;
	}
	else {
		console.log(`You must be 18+ to enter this site.`);
		resultElement.textContent = `You must be 18+ to enter this site`;
	}

	// resultElement.textContent = document.getElementById("myText");
}




