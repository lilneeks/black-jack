// maybe learn about objects
// const chips = [1,5,10,25,50,100,1000];

// populates user input field if user types over max value
function imposeMinMax(el){
  if(el.value != ""){
    if(parseInt(el.value) < parseInt(el.min)){
      el.value = el.min;
    }
    if(parseInt(el.value) > parseInt(el.max)){
      el.value = el.max;
    }
  }
}

// add bank value will later add chips 
function addBank(){
  var outputDisplay = document.getElementById('bankDisplay');
  var bankInput = document.getElementById('bankInput').value;
  var display = +bankInput;
  outputDisplay.innerHTML=display;
  }
   
// need to generate an error if user tries to add bank that is not divisible by 5  

// const bank = [];
// function bankError(num) {
//   for(var i = 0; i <= num; i++) {
//       if(i % 5 === 0)bank.push("Yes");
//       else bank.push(false);
//   }
//   return bank;
// }



function bankError(num) {
  let result;
  if (a % 5 === 0) {
    result = num;
  } else {
    result = 'Invalid amount';
  }
  return result;
}

console.log(testFunc(11));
// expected output: "NOT positive"


// $(document).ready(function() {
//   $("#form").submit(function(event) {
//     event.preventDefault();
//     var userNumber = $("input#bankInput").val();
//     var result = bankError(userNumber);
//     $("#bankDisplay").text(result);
//   });
// });












// // this was old way of showing error if not divisible by 5
// const inputs = document.querySelectorAll('input[data-id="user-deposit"]');
// inputs.forEach(input => {
//   input.addEventListener('change', () => {
//     if (input.value % 5 !== 0) {
//       alert('not valid');
//       input.value = 5;
//     }
//   });
// });



// 52 cards
// const deck = [];

// const clubs =  [];

// const diamonds =  [];

// const hearts =  [];

// const spades =  [];

// this will clear input if over max
