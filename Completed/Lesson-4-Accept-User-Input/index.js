//  How to accept USER INPUT

//  1. EASY WAY = window prompt
//  2. PROFESSIONAL WAY = HTML textbox

/*  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//    Easy Way
let username;

username = window.prompt("What's your username?");

console.log(username);
*/

/*  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let username;

document.getElementById("mySubmit").onclick = function(){
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myH1").textContent = `Hello, ${username}`;
}
*/
