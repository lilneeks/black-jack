// 1, 5 , 10, 25 , 50 , 100 , 1000
const chips = [1,5,10,25,50,100,1000];
console.log(chips);

function giveChips(chips){

}

giveChips();






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
