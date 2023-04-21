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
  let generateRandomCardsBtn = document.getElementById(
    "generateRandomCardsBtn"
  );
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

  // Task 11 variables
  let equilibBtn = document.getElementById("equilibBtn");
  equilibBtn.addEventListener("click", () => equilib());

  let numArrayWithNegInput = document.getElementById("task11Input");

  numArrayWithNegInput.addEventListener("input", function () {
    globalNumWithNegArrayInputs(this);
  });

  // Task 12 variables
  let dateFormatBtn = document.getElementById("dateFormatBtn");
  dateFormatBtn.addEventListener("click", () => dateFormat());

  let dateField = document.getElementById("task12Input");

  // Task 13 variables
  let sentenceValBtn = document.getElementById("sentenceValBtn");
  sentenceValBtn.addEventListener("click", () => sentenceVal());

  // Task 14 variables
  let duplicateNamesBtn = document.getElementById("duplicateNamesBtn");
  duplicateNamesBtn.addEventListener("click", () => duplicateNames());

  // Task 15 variables
  let getLargestPalindromeBtn = document.getElementById(
    "getLargestPalindromeBtn"
  );
  getLargestPalindromeBtn.addEventListener("click", () =>
    findLargestPalindrome()
  );

  //Task 16 variable
  let getIngBtn = document.getElementById("getIngBtn");
  getIngBtn.addEventListener("click", () => extrIngInflection());

  // Date field
  dateField.addEventListener("input", function () {
    enableBtn(document.getElementById(dateField.getAttribute("data-target")));
  });

  const disablePreviousDates = () => {
    var todaysDate = new Date();
    var month = todaysDate.getMonth() + 1;
    var day = todaysDate.getDate();
    var year = todaysDate.getFullYear();

    if (month < 10) month = "0" + month.toString();
    if (day < 10) day = "0" + day.toString();
    var maxDate = year + "-" + month + "-" + day;
    dateField.setAttribute("min", maxDate);
  };

  disablePreviousDates();

  // Close alert
  document.addEventListener("click", (event) => closeAlert(event));

  // global input variables
  let numberInput = document.getElementsByClassName("numberInput");
  let onlyStringInput = document.getElementsByClassName("onlyStringInput");
  let numArrayInput = document.getElementsByClassName("numArrayInput");
  let stringArrayInput = document.getElementById("task14Input");
  let jsonInput = document.getElementById("task10Input");

  // Global string input variables
  for (var i = 0; i < onlyStringInput.length; i++) {
    onlyStringInput[i].addEventListener("input", function () {
      globalStringInputs(this);
    });
  }

  stringArrayInput.addEventListener("input", function () {
    stringArrayInputs(this);
  });

  jsonInput.addEventListener("input", function () {
    jsonFormatInput(this);
  });

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

const jsonFormatInput = (jsonInpt) => {
  let jsonFormatValRes = validtJsonObject(
    jsonInpt.value.replace(/{^,\{\}a-zA-Z ]/g, "")
  );
  // if the array input doesnt have invalid class
  if (jsonFormatValRes) {
    jsonInpt.classList.add("invalid");
    document.getElementById(jsonInpt.getAttribute("id") + "Error").textContent =
      "Please enter object correctly e.g {key:value, key:value}";
  } else {
    jsonInpt.classList.remove("invalid");
    document.getElementById(jsonInpt.getAttribute("id") + "Error").textContent =
      "";
  }
  enableBtn(document.getElementById(jsonInpt.getAttribute("data-target")));
};

const globalNumInputs = (numInput) => {
  numInput.value = numInput.value.replace(/[^0-9]/g, "");
  enableBtn(document.getElementById(numInput.getAttribute("data-target")));
};

const globalStringInputs = (stringInput) => {
  stringInput.value = stringInput.value.replace(/[^a-zA-Z ]/g, "");
  enableBtn(document.getElementById(stringInput.getAttribute("data-target")));
};

// function to show the validation messages for array input fields
const globalNumArrayInputs = (numArrayInput) => {
  numArrayInput.value = numArrayInput.value.replace(/[^,\[\]0-9]/g, "");

  // validtNumArray validates array input values
  let numArrValRes = validtNumArray(numArrayInput.value);

  globalArrayValidationCheck("num", numArrayInput, numArrValRes);
};

// function to show the validation messages for array input fields
const globalNumWithNegArrayInputs = (numArrayInput) => {
  numArrayInput.value = numArrayInput.value.replace(/[^,[\-\]\[\]0-9]/g, "");

  // validtNumArray validates array input values
  let numArrValRes = validtNumArray(numArrayInput.value);

  globalArrayValidationCheck("num", numArrayInput, numArrValRes);
};

// function to show the validation messages for array input fields
const stringArrayInputs = (stringArrayInput) => {
  stringArrayInput.value = stringArrayInput.value.replace(
    /[^,\[\]a-zA-Z ]/g,
    ""
  );

  // validtNumArray validates array input values
  let stringArrValRes = validtStringArray(stringArrayInput.value);

  globalArrayValidationCheck("str", stringArrayInput, stringArrValRes);
};

function globalArrayValidationCheck(arrayType, arrayInput, numValrs) {
  // if the array input doesnt have invalid class
  if (numValrs) {
    if (numValrs == INVALID) {
      arrayInput.classList.add("invalid");
      document.getElementById(
        arrayInput.getAttribute("id") + "Error"
      ).textContent =
        arrayType == "num"
          ? "Please enter array correctly in square brackets e.g [1,2,3]"
          : "Please enter names correctly in square brackets e.g [First Last,First Middle Last] (do not add spacing before or after comma)";
    } else if (numValrs == SHORT) {
      document.getElementById(
        arrayInput.getAttribute("id") + "Error"
      ).textContent = "Please enter atleast 2 values in array";
      if (!arrayInput.classList.contains("invalid")) {
        arrayInput.classList.add("invalid");
      }
    } else {
      arrayInput.classList.remove("invalid");
      document.getElementById(
        arrayInput.getAttribute("id") + "Error"
      ).textContent = "";
    }
  } else {
    arrayInput.classList.remove("invalid");
    document.getElementById(
      arrayInput.getAttribute("id") + "Error"
    ).textContent = "";
  }
  enableBtn(document.getElementById(arrayInput.getAttribute("data-target")));
}

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
  let arrVal = document
    .getElementById("sumOf2NumInput")
    .value.toString()
    .replace("[", "")
    .replace("]", "")
    .split(",");
  let targetVal = parseInt(document.getElementById("sumTarget").value);

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
  console.log(`generateCards = ${generatedCards}`);
  if (generatedCards && generatedCards != "Less Cards") {
    output("task7AlertWrapper", "alert-info", `[${generatedCards}]`);
  } else if (generatedCards == "Less Cards") {
    output("task7AlertWrapper", "alert-danger", "Deck has less than 5 cards");
  } else {
    output("task7AlertWrapper", "alert-danger", "Error while generating cards");
  }
};

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
  let analyzStrInpt = document.getElementById("task9Input").value;
  let charCount = analyzeString(analyzStrInpt);
  if (charCount) {
    output("task9AlertWrapper", "alert-info", charCount);
  } else {
    output(
      "task9AlertWrapper",
      "alert-danger",
      "Error while generating result"
    );
  }
};

// Task 10 : Analyze JSON
let analyzJson = () => {
  let analyzJsonInpt = document
    .getElementById("task10Input")
    .value.replace("{", "")
    .replace("}", "")
    .split(",");
  let keyRes = analyzeJson(analyzJsonInpt);
  if (keyRes) {
    output("task10AlertWrapper", "alert-info", keyRes);
  } else {
    output(
      "task10AlertWrapper",
      "alert-danger",
      "Error while generating result"
    );
  }
};

// Task 11 : Equilibrium
const equilib = () => {
  let arrVal = document
    .getElementById("task11Input")
    .value.replace(/\[/g, "")
    .replace(/\]/g, "")
    .split(",");

  let equilibRes = solution(arrVal);

  if (equilibRes > 0) {
    output("task11AlertWrapper", "alert-info", equilibRes);
  } else {
    output("task11AlertWrapper", "alert-danger", equilibRes);
  }
};

// Task 12 : Format Date
const dateFormat = () => {
  let newDateFormat = formatDate(document.getElementById("task12Input").value);
  if (newDateFormat) {
    output("task12AlertWrapper", "alert-info", newDateFormat);
  } else {
    output("task12AlertWrapper", "alert-danger", "Connot format date");
  }
};

//Task 13 : Sentence Value
const sentenceVal = () => {
  let sentence = document.getElementById("task13Input").value;
  let sentenceValCnt = sentenceValCount(sentence);
  if (sentenceValCnt) {
    output(
      "task13AlertWrapper",
      "alert-info",
      `Value of '${sentence}' is ${sentenceValCnt}`
    );
  } else {
    output("task13AlertWrapper", "alert-danger", "No value found");
  }
};

//Task 14 : Analyze Student Names
const duplicateNames = () => {
  let namesArray = document
    .getElementById("task14Input")
    .value.replace(/\[/g, "")
    .replace(/\]/g, "")
    .split(",");

  let duplicateSubNams = analyzeName(namesArray);

  if (duplicateSubNams) {
    output("task14AlertWrapper", "alert-info", duplicateSubNams);
  } else {
    output(
      "task14AlertWrapper",
      "alert-danger",
      "Error while fetching the result"
    );
  }
};

//Task 15 :Largest Palindrome Product
const findLargestPalindrome = () => {
  let largstPalindrome = largestPalindromProduct();
  if (largstPalindrome) {
    output("task15AlertWrapper", "alert-info", largstPalindrome);
  } else {
    output(
      "task15AlertWrapper",
      "alert-danger",
      "Error while fetching the result"
    );
  }
};

//Task 16: Extracting words with "ing" Inflection
const extrIngInflection = () => {
  let ingEnflectedWords = extractWordsWithIngInflection(
    document.getElementById("task16Input").value
  );

  if (ingEnflectedWords) {
    output("task16AlertWrapper", "alert-info", `[${ingEnflectedWords}]`);
  } else {
    output("task16AlertWrapper", "alert-danger", "No words found");
  }
};

// onload execute init function
window.onload = () => {
  init();
};

// output ui
const output = (alertID, alertType, outputMessage) => {
  document.getElementById(alertID).innerHTML = `
  <div class="alert ${alertType} show fade ${alertID.replace(
    "Wrapper",
    ""
  )} mt-4 mb-2" role="alert">
  <strong>${outputMessage}</strong>
  <button type="button" class="close" id="${alertID.replace(
    "Wrapper",
    ""
  )}" aria-label="Close">
    &times;
  </button>
  </div>`;
};

// close alert modal
const closeAlert = (e) => {
  if (e.target.classList == "close") {
    document.querySelector("." + e.target.id).classList.remove("show");
  }
};
