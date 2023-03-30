include("./content/scripts/output/output.js");

const init = () => {
  // Task 1 variables
  let calcAgeInDaysBtn = document.getElementById("calcAgeInDaysBtn");
  calcAgeInDaysBtn.addEventListener("click", () => calcAgeInDays());

  // Task 2 variables
  let calcAgeInSecondsBtn = document.getElementById("calcAgeInSecsBtn");
  calcAgeInSecondsBtn.addEventListener("click", () => calcAgeInSeconds());

  // Task 3 variables
  let buggyCodeBtn = document.getElementById("buggyCodeBtn");
  buggyCodeBtn.addEventListener("click", () => getCube());

  // Task 4 variables
  let revStrBtn = document.getElementById("reversStr");
  revStrBtn.addEventListener("click", () => revStr());

  // Task 5 variables
  let sumOf2Num = document.getElementById("sumOf2NumBtn");
  sumOf2Num.addEventListener("click", () => sumOf2Numbers());

  // Task 6 variables
  let calcSecsInHoursBtn = document.getElementById("calcSecsInHoursBtn");
  calcSecsInHoursBtn.addEventListener("click", () => calcSecsInHours());

  // Task 7 variables
  let generateRandomCardsBtn = document.getElementById("generateRandomCardsBtn");
  generateRandomCardsBtn.addEventListener("click", () => genertRanCards());

  // Task 8 variables
  let searchForNumInArraysBtn = document.getElementById(
    "searchForNumInArraysBtn"
  );
  searchForNumInArraysBtn.addEventListener("click", () => numExist());

  // Task 9 variables
  let analyzStringBtn = document.getElementById("analyzStringBtn");
  analyzStringBtn.addEventListener("click", () => analyzStr());

   // Task 10 variables
   let analyzJsonBtn = document.getElementById("analyzJsonBtn");
   analyzJsonBtn.addEventListener("click", () => analyzJson());

  // Close alert
  document.addEventListener("click", (event) => closeAlert(event));

  // global input variables
  let numberInput = document.getElementsByClassName("numberInput");
  let onlyStringInput = document.getElementsByClassName("onlyStringInput");
  let numArrayInput = document.getElementsByClassName("numArrayInput");
  
  // Global string input variables
  for (var i = 0; i < onlyStringInput.length; i++) {
    onlyStringInput[i].addEventListener("input", function () {
      globalStringInputs(this);
    });
  }

  // Global numeric array input variables
  for (let i = 0; i < numArrayInput.length; i++) {
    numArrayInput[i].addEventListener("input", function () {
      globalNumArrayInputs(this);
    });
    numArrayInput[i].addEventListener("paste", (e) => e.preventDefault());
  }

  //Global numeric input variables
  for (var i = 0; i < numberInput.length; i++) {
    numberInput[i].addEventListener("input", function () {
      globalNumInputs(this);
    });
  }
};

const globalNumInputs = (numInput) => {
  numInput.value = numInput.value.replace(/[^0-9]/g, "");
  enableBtn(document.getElementById(numInput.getAttribute("data-target")));
};

const globalStringInputs = (stringInput) => {
  stringInput.value = stringInput.value.replace(/[^a-zA-Z]/g, "");
  enableBtn(document.getElementById(stringInput.getAttribute("data-target")));
}

const globalNumArrayInputs = (numArrayInput) => {
  numArrayInput.value = numArrayInput.value.replace(/[^,\[\]0-9]/g, "");
  let numArrValRes = validtNumArray(
    numArrayInput.value
  );

  // if the array input doesnt have invalid class
  if (numArrValRes) {
    if (numArrValRes == "Invalid") {
      numArrayInput.classList.add("invalid");
      document.getElementById(
        numArrayInput.getAttribute("id") + "Error"
      ).textContent =
        "Please enter array correctly in square brackets e.g [1,2,3]";

    } else if (numArrValRes == "Short") {
      document.getElementById(
        numArrayInput.getAttribute("id") + "Error"
      ).textContent = "Please enter atleast 2 values in array";
      if(!numArrayInput.classList.contains("invalid")){
        numArrayInput.classList.add("invalid");
      }

    } else {
      numArrayInput.classList.remove("invalid");
      document.getElementById(
        numArrayInput.getAttribute("id") + "Error"
      ).textContent = "";
    }

  } else {

    numArrayInput.classList.remove("invalid");
    document.getElementById(
      numArrayInput.getAttribute("id") + "Error"
    ).textContent = "";

  }
  enableBtn(document.getElementById(numArrayInput.getAttribute("data-target")));
};

// Task 1 :Calculate Age in Days
const calcAgeInDays = () => {
  let ageValue = document.getElementById("calcAgeInDaysInput").value;
  let ageInDaysResultVal = getAgeInDays(ageValue);

  output(
    "task1AlertWrapper",
    "alert-info",
    "You are <u>" + ageInDaysResultVal + "</u> days old"
  );
};

// Task 2 : Calculate Age in Seconds
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

    output(
      "task3AlertWrapper",
      "alert-info",
      `Cube of ${val} is <u>${cubeResValue}</u>`
    );
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
  let arrVal = document.getElementById("sumOf2NumInput").value.toString().replace("[", "").replace("]", "").split(",");
  let targetVal = document.getElementById("sumTarget").value;

  let indexVal = sumOf(arrVal, targetVal);
  if (indexVal) {
    output("task5AlertWrapper", "alert-info", `[${indexVal}]`);
  } else {
    // error message should be based on the type of error
    output("task5AlertWrapper", "alert-danger", "Target value not found");
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
      "There are <u>" +
        calcSecsInHoursVal +
        "</u> seconds in " +
        hourVal +
        " hours"
    );
  }
};

// Task 7 : Create a deck of Cards
const genertRanCards = () => {
  let generatedCards = Deal();
  if (generatedCards) {
    output("task7AlertWrapper", "alert-info", `[${generatedCards}]`);
  } else {
    output("task7AlertWrapper", "alert-danger", "Error while generating cards");
  }
}

// Task 8 : Number exists in array
const numExist = () => {
  let arrVal1 = document
    .getElementById("task8ArrInput1")
    .value.replace(/\[/g, "")
    .replace(/\]/g, "")
    .split(",");

  let arrVal2 = document
    .getElementById("task8ArrInput2")
    .value.replace(/\[/g, "")
    .replace(/\]/g, "")
    .split(",");

  let target = document.getElementById("findValue").value;

  let numInArray = isNumberPresent(arrVal1, arrVal2, target);

  if (numInArray) {
    if (numInArray === "array_one") {
      output(
        "task8AlertWrapper",
        "alert-info",
        `number ${target} found in array_one`
      );
    } else if (numInArray === "array_two") {
      output(
        "task8AlertWrapper",
        "alert-info",
        `number ${target} found in array_two`
      );
    } else {
      output(
        "task8AlertWrapper",
        "alert-info",
        `number ${target} found in both arrays`
      );
    }
  } else {
    output("task8AlertWrapper", "alert-danger", "Target value not found");
  }
};

// Task 9: Analyze String
let analyzStr = () => {
  let analyzStrInpt = document.getElementById("task9Input");
  let charCount = analyzeString(analyzStrInpt.value);
  if (charCount) {
    output("task9AlertWrapper", "alert-info", JSON.stringify(charCount));
  } else {
    output("task9AlertWrapper", "alert-danger", "Error while generating result");
  }
}

// Task 10 : Analyze JSON
let analyzJson = () => {
  let analyzJsonInpt = document.getElementById("task10Input");
  let keyRes = analyzeJson(analyzJsonInpt.value);
  if (keyRes) {
    output("task10AlertWrapper", "alert-info", JSON.stringify(keyRes));
  } else {
    output("task10AlertWrapper", "alert-danger", "Error while generating result");
  }
}

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
