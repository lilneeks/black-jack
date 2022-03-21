// 1, 5 , 10, 25 , 50 , 100 , 1000
const chips = [1,5,10,25,50,100,1000];





// let bank = [];


// function bankValue()
// {
//     var str = document.getElementById("deposit").value;
//     alert(str);
// }


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
const deck = [];

const clubs =  [];

const diamonds =  [];

const hearts =  [];

const spades =  [];

// code from stackoverflow this will clear input if over max
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
