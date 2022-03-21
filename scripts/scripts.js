// 1, 5 , 10, 25 , 50 , 100 , 1000
const chips = [1,5,10,25,50,100,1000];

// populates user field if over max
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


function addBank(){
  var outputDisplay = document.getElementById('bankDisplay');
  var bankInput = document.getElementById('bankInput').value;
  var a = +bankInput;
  outputDisplay.innerHTML=a;
  }
   
// need to generate an error if user tries to add bank that is not divisible by 5  
function errorBank() {
  
}













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
