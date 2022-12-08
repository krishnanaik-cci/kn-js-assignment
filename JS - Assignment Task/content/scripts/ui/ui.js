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

  // Gloabl validation start
  //Accept only numeric input
  for (var i = 0; i < numberInput.length; i++) {
    numberInput[i].addEventListener(
      "input",
      function () {
        this.value = this.value.replace(/&\/\\#+()$~%.'":*?<>{}=;\-\ ]/g, "");
        enableBtn(document.getElementById(this.getAttribute("data-target")));
      },
      false
    );
  }

  //Accept only string input
  for (var i = 0; i < onlyStringInput.length; i++) {
    onlyStringInput[i].addEventListener(
      "input",
      function () {
        this.value = this.value.replace(/[^a-zA-Z]/g, "");
        enableBtn(document.getElementById(this.getAttribute("data-target")));
      },
      false
    );
  }

  //Accept only numeric array
  for (let i = 0; i < numArrayInput.length; i++) {
    numArrayInput[i].addEventListener(
      "input",
      function () {
        if (this.value.length === 1 && this.value === ",") {
          this.value = "";
        } else if(this.value.match(/(,{2,})/g)){
          this.value = this.value.replace(/(,{2,})/g, ",")
        }
        this.value = this.value.replace(
          /(,{2,}|[^,0-9])/g,
          ""
        );
        enableBtn(document.getElementById(this.getAttribute("data-target")));
      },
      false
    );
  }
  // Gloabl validation end

};

// Enable button if field is not empty
const enableBtn = (parentID) => {

  parentID.querySelector("button").removeAttribute('disabled');
  const onlyInputs = parentID.querySelectorAll(".form-control");
  let isEmpty;
  
  onlyInputs.forEach((input) => {
    if(!input.value){
      isEmpty = true;
    }
  });

  if(isEmpty){
    parentID.querySelector("button").setAttribute('disabled', true);
  }else{
    parentID.querySelector("button").removeAttribute('disabled');
  }

}

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
  let arrVal = document.getElementById("sumOf2NumInput").value.split(",");
  
  let sumVal = sumOf(arrVal);

  if (sumVal && isNaN(sumVal)) {
    output("task5AlertWrapper", "alert-info", `${sumVal}`);
  } else {
    // error message should be based on the type of error
    if (sumVal == -1) {
      output(
        "task5AlertWrapper",
        "alert-danger",
        "Incomplete Array. Number Required after ,"
      );
    } else if(sumVal == -2) {
      output(
        "task5AlertWrapper",
        "alert-danger",
        "Target value not found"
      );
    } else if(sumVal == -3){
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
  let arrVal1 = document.getElementById("task8ArrInput1").value.split(",");
  let arrVal2 = document.getElementById("task8ArrInput2").value.split(",");
  
  let targetVal = isNumberPresent(arrVal1, arrVal2);
  
  if (targetVal && isNaN(targetVal)) {
    output("task8AlertWrapper", "alert-info", `<u>${targetVal}</u>`);
  } else {
    // error message should be based on the type of error
    if (targetVal == -1) {
      output(
        "task8AlertWrapper",
        "alert-danger",
        "Incomplete Array. Number Required after ,"
      );
    } else if(targetVal == -2){
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
