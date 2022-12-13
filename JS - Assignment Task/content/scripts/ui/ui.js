include("./content/scripts/output/output.js");

const init = () => {
  let calcAgeInDaysBtn = document.getElementById("calcAgeInDaysBtn");
  calcAgeInDaysBtn.addEventListener("click", () => calcAgeInDays());

  let calcAgeInSecondsBtn = document.getElementById("calcAgeInSecsBtn");
  calcAgeInSecondsBtn.addEventListener("click", () => calcAgeInSeconds());

  let buggyCodeBtn = document.getElementById("buggyCodeBtn");
  buggyCodeBtn.addEventListener("click", () => getCube());

  document.addEventListener("click", (event) => closeAlert(event));

  let numberInput = document.getElementsByClassName("numberInput");
  let onlyStringInput = document.getElementsByClassName("onlyStringInput");
  let numArrayInput = document.getElementsByClassName("numArrayInput");

  let revStrBtn = document.getElementById("reversStr");
  revStrBtn.addEventListener("click", () => revStr());

  let sumOf2Num = document.getElementById("sumOf2NumBtn");
  sumOf2Num.addEventListener("click", () => sumOf2Numbers());

  let calcSecsInHoursBtn = document.getElementById("calcSecsInHoursBtn");
  calcSecsInHoursBtn.addEventListener("click", () => calcSecsInHours());

  let searchForNumInArraysBtn = document.getElementById("searchForNumInArraysBtn");
  searchForNumInArraysBtn.addEventListener("click", () => numExist());

  globalValidation(numberInput, onlyStringInput, numArrayInput);
};

// Task 1 :Calculate Age in Days
const calcAgeInDays = () => {
  
  let ageValue = document.getElementById("calcAgeInDaysInput").value;
  let ageInDaysResultVal = getAgeInDays(ageValue);
  
  if (ageInDaysResultVal === 0 || ageInDaysResultVal > 0) {
    output(
      "task1AlertWrapper",
      "alert-info",
      "You are <u>" + ageInDaysResultVal + "</u> days old"
    );
  }

};

// Task 2 :Calculate Age in Seconds
const calcAgeInSeconds = () => {
  
  let ageValue = document.getElementById("calcAgeInSecsInput").value;
  let ageInSecsResultVal = getAgeInSecs(ageValue);

  if (ageInSecsResultVal === 0 || ageInSecsResultVal > 0) {
    output(
      "task2AlertWrapper",
      "alert-info",
      "You are <u>" + ageInSecsResultVal + "</u> seconds old"
    );
  }

};

// Task 3 : Buggy Code
const getCube = () => {
  
  let val = document.getElementById("getCube").value;
  let cubeResValue = cubes(val);

  if (cubeResValue === 0 || cubeResValue > 0) {
    output(
      "task3AlertWrapper",
      "alert-info",
      `Cube of ${val} is <u>${cubeResValue}</u>`
    );
  }

};

// Task 4 : Reversing a String
const revStr = () => {
  
  let str = document.getElementById("revStringInput").value;
  let revdStr = reverseStr(str);

  if (revdStr) {
    output("task4AlertWrapper", "alert-info", `<u>${revdStr}</u>`);
  }

};

// Task 5 : Sum of 2 Numbers
const sumOf2Numbers = () => {
  let arrVal = document.getElementById("sumOf2NumInput").value.replace(/\[/g, "").replace(/\]/g, "").split(",");
  let targetVal = document.getElementById("sumTarget").value;

  let indexVal = sumOf(arrVal, targetVal);

  console.log(indexVal);

  if (indexVal && isNaN(indexVal)) {
    output("task5AlertWrapper", "alert-info", `${indexVal}`);
  } else {
    // error message should be based on the type of error
    if (indexVal == -1) {
      output(
        "task5AlertWrapper",
        "alert-danger",
        "Incomplete Array. Number Required after ,"
      );
    } else if(indexVal == -2) {
      output(
        "task5AlertWrapper",
        "alert-danger",
        "Target value not found"
      );
    } else if(indexVal == -3){
      output(
        "task5AlertWrapper",
        "alert-danger",
        "Enter atleast 2 numbers in the array"
      );
    }
  }
};

// Section 2
// Task 6 : How many Seconds in hours
const calcSecsInHours = () => {
  let hourVal = document.getElementById("calcSecsInHoursInput").value;
  let calcSecsInHoursVal = howManySeconds(hourVal);
  
  if (calcSecsInHoursVal === 0 || calcSecsInHoursVal > 0) {
    output(
      "task6AlertWrapper",
      "alert-info",
      "There are <u>" + calcSecsInHoursVal + "</u> seconds in "+hourVal+" hours"
    );
  } else {
    output("task6AlertWrapper", "alert-danger", "Please Enter Age");
  }
};

// Task 8 : Number exists in array
const numExist = () => {
  let arrVal1 = document.getElementById("task8ArrInput1").value.replace(/\[/g, "").replace(/\]/g, "").split(",");
  let arrVal2 = document.getElementById("task8ArrInput2").value.replace(/\[/g, "").replace(/\]/g, "").split(",");
  console.log(arrVal1, arrVal2);
  let target = document.getElementById("findValue").value;

  let numInArray = isNumberPresent(arrVal1, arrVal2, target);
  
  if (numInArray && isNaN(numInArray)) {
    if(numInArray === "array_one"){
      output("task8AlertWrapper", "alert-info", `number ${target} found in array_one`);
    }else if(numInArray === "array_two"){
      output("task8AlertWrapper", "alert-info", `number ${target} found in array_two`);
    }else{
      output("task8AlertWrapper", "alert-info", `number ${target} found in both arrays`);
    }
  } else {
    // error message should be based on the type of error
    if (numInArray == -1) {
      output(
        "task8AlertWrapper",
        "alert-danger",
        "Incomplete Array. Number Required after ,"
      );
    } else if(numInArray == -2){
      output(
        "task8AlertWrapper",
        "alert-danger",
        "Target value not found"
      );
    }
  }
};


// onload execute init function
window.onload = () => {
  init();
};

// close alert modal
const closeAlert = (e) => {
  if (e.target.classList == "close") {
    document.querySelector("." + e.target.id).classList.remove("show");
  }
};
