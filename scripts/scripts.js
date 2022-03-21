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
   


function bankError(num) {
  let result;
  if (num % 5 === 0) {
    result = +num;
  } else {
    result = 'Invalid amount try again';
  }
  return result;
}






// console.log(bankError(10));



// $(document).ready(function() {
//   $("#form").submit(function(event) {
//     event.preventDefault();
//     var userNumber = $("input#bankInput").val();
//     var result = bankError(userNumber);
//     $("#bankDisplay").number(result);
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
