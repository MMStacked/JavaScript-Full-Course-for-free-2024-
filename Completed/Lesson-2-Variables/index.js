// variable = A container that stores a value.
//            Behaves as if it were the value it contains

// 1. declaration   let x;
// 2. assignment    x = 100;
// 3. All in one    let x = 100;

/*
let x = 123;

console.log(x);

*/


/*  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let age = 25;
let price = 10.99;
let gpa = 2.1;


  console.log(age);
  console.log(price);
  console.log(gpa);

console.log(`-----------------------------------`);

  console.log(typeof age);
  console.log(typeof price);
  console.log(typeof gpa);

console.log(`-----------------------------------`);


  console.log(`you are ${age} years old`)
  console.log(`The price is ${price}`);
  console.log(`Your gpa is ${gpa}`);

  */

/*  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let firstName = "Awais";
let favouriteFood = "pizza";
let email = "awais123@gmail.com";

//    Show the data type of a variable
//console.log(typeof firstName);

//    output the content of a variable
  console.log(firstName);
//    use firstName variable within a sentence
  console.log(`Your name is ${firstName}`);
//    use favouriteFood variable within a sentence
  console.log(`You like ${favouriteFood}`);
//    use email variable within a sentence
  console.log(`Your email is ${email}`);

  */

/*  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  let online = true;
  let forSale = true;
  let isStudent = true;


  console.log(typeof online);
  console.log(`${name} is online: ${online}`)

  console.log(`Is this car for sale: ${forSale}`);

  console.log(`Enrolled: ${isStudent}`);

  */

let fullName = "Awais Iqbal";
let age = 27;
let isStudent = false;

//    Uses JavaScript to output into a html element id tag e.g. <p id="name_of_id"></p>
document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Your student status is: ${isStudent}`;

