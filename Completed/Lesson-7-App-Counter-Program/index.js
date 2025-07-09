//  Counter Program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

/*    My Long Version - ok attempt

document.getElementById("decreaseBtn").onclick = function() {
  count -= 1;
    
  //    long version
  document.getElementById("countLabel").textContent = count;
  // console.log(count);
  
}
document.getElementById("resetBtn").onclick = function() {
  count = 0;

  //    long version
  document.getElementById("countLabel").textContent = count;
  // console.log(count);
}
document.getElementById("increaseBtn").onclick = function() {
  count ++;
    
  //    long version
  document.getElementById("countLabel").textContent = count;
  // console.log(count);
}

console.log(count);
*/


//    Clean version

decreaseBtn.onclick = function(){
  count --;
  countLabel.textContent = count;
}

resetBtn.onclick = function(){
  count = 0;
  countLabel.textContent = count;
}

increaseBtn.onclick = function(){
  count ++;
  countLabel.textContent = count;
}
