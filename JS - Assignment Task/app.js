// Task 1 :Calculate Age in Days
let ageInDaysInput = document.getElementById("age-in-days-input");
let ageInDaysResult = document.getElementById("age-in-days-result");
// Task 2 - age in seconds field value
let ageInSecondsInput = document.getElementById("age-in-seconds-input");
let ageInSecondsResult = document.getElementById("age-in-seconds-result");
// Task 3 - cube field values
let cubeInput = document.getElementById("get-cube-input");
let cubeResult = document.getElementById("get-cube-result");
// Task 4 - reverse string input
let reverseStrInput = document.getElementById("reverse-string-input");
let reverseStrResult = document.getElementById("reverse-string-result");
// Task 6 - reverse string input
let secondsInHoursInput = document.getElementById("seconds-in-hours-input");
let secondsInHoursResult = document.getElementById("seconds-in-hours-result");
// Task 8 - Task 8 : Number exists in array
let numExistInArrInput = document.getElementById("num-exist-in-arr-input");
let numExistInArrResult = document.getElementById("num-exist-in-arr-input");
let arr1Input = document.getElementById("arr1-input");
let arr2Input = document.getElementById("arr2-input");
let findValueInput = document.getElementById("find-value-input");
let numExistInArraysRes = document.getElementById("num-exist-in-arr-input");
// Task 10 : Analyze JSON
let analyzeJsonResult = document.getElementById("analyze-json-result");
console.log("js loaded successfully!");

// Task 1
// get age in days
const calcAgeInDays = () => {
  if (ageInDaysInput.value > 0) {
    ageInDaysResult.textContent = ageInDaysInput.value * 365;
  } else {
    alert("Please enter positive value");
  }
};

// Task 2
// get age in seconds
const calcAgeInSeconds = () => {
  if (ageInSecondsInput.value > 0) {
    ageInSecondsResult.textContent = ageInSecondsInput.value * 31536000;//31536000 are the number of seconds per year
  } else {
    alert("Please enter positive value");
  }
};

// Task 3
// get the cube value
const cubes = () => {
  if (cubeInput.value > 0) {
    cubeResult.textContent = cubeInput.value ** 3;
  } else {
    alert("Please enter positive value");
  }
}

// Task 4
const reversStr = () => {
  if (reverseStrInput.value.match(/^[a-zA-Z ]*$/) && reverseStrInput.value) {
    reverseStrResult.textContent = reverseStrInput.value.split("").reverse().join("");
  } else {
    alert("Please enter a string value");
  }
}

// Task 5 : Sum of 2 Numbers


// Task 6
const howManySeconds = () => {
  if (secondsInHoursInput.value > 0) {
    secondsInHoursResult.textContent = secondsInHoursInput.value * 60 * 60;
  } else {
    alert("Please enter a number");
  }
};

function checkNumAndComma(e) {
  if (window.event) // IE
  {
      if ((e.keyCode <48 || e.keyCode > 57) & e.keyCode != 8 && e.keyCode != 44) {
          e.returnValue = false;
          return false;
      }
  }
  else { // Fire Fox
      if ((e.which <48 || e.which > 57) & e.which != 8 && e.which != 44) {
          e.preventDefault();
          return false;
      }
  }
}     

function isNumberPresent(){
  if((arr1Input.value != "") && (arr2Input.value != "")){
    let valueInArr1;
    let valueInArr2;
    document.getElementById('array1-values').textContent = "["+arr1Input.value+"]";
    document.getElementById('array2-values').textContent = "["+arr2Input.value+"]";
    let arr1 = arr1Input.value.split(",");
    let arr2 = arr2Input.value.split(",");

    for(let i = 0; i < arr1.length; i++){
      if(findValueInput.value == arr1[i]){
        valueInArr1 = true;
        break;
      }
    }

    for(let i = 0; i < arr2.length; i++){
      console.log('findValueInput = '+ findValueInput);
      console.log('arr2 = '+ arr2[i]);
      if(findValueInput.value == arr2[i]){
        valueInArr2 = true;
        break;
      }
    }

    if(findValueInput.value == ""){
      alert("Please enter a value to search in the arrays");
    }

    if(valueInArr1 && valueInArr2){
      numExistInArraysRes.innerHTML = "<p>number <b>"+ findValueInput.value +"</b> found in both the arrays</p>";
    }else if(valueInArr1){
      numExistInArraysRes.innerHTML = "<p>number <b>"+ findValueInput.value +"</b> found in array_one</p>";
    }else if(valueInArr2){
      numExistInArraysRes.innerHTML = "<p>number <b>"+ findValueInput.value +"</b> found in array_two</p>";
    }else{
      numExistInArraysRes.innerHTML = "<p>number <b>"+ findValueInput.value +"</b> was not found in both the arrays</p>";
    }
  }else{
    alert("Please enter value for both the arrays");
  }
}

// Section - 2
// Task - 10
function analyzeJson() {
// (B) MANUAL PROCESS AND LOOP
var temp = analyzeJsonInput.value.split(","); 
console.log('Temp = '+temp);
theobj = {};
for (let i=0; i<temp.length; i+=2) {
  theobj[temp[i]] = temp[(i+1)];
}
console.log('theobj = '+theobj);
}
