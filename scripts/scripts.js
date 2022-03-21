
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



function bankError(num) {
  let result;
  if (num % 5 === 0) {
    // the + forces num to be treated as number
    result = +num;
  } else {
    result = alert("Error");
  }
  return result;
}

function addBank(){
  var outputDisplay = document.getElementById('bankDisplay');
  var bankInput = document.getElementById('bankInput').value;
  var display = +bankInput;
  outputDisplay.innerHTML=display;
  }
   

function onClick() {
  bankError();
  addBank();

}

