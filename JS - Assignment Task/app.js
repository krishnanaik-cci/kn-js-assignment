// Task 1 variables
let ageInDaysInput = document.getElementById("age-in-days-input");
let ageInDaysResult = document.getElementById("age-in-days-result");
// Task 2 variables
let ageInSecondsInput = document.getElementById("age-in-seconds-input");
let ageInSecondsResult = document.getElementById("age-in-seconds-result");
// Task 3 variables
let cubeInput = document.getElementById("get-cube-input");
let cubeResult = document.getElementById("get-cube-result");
// Task 4 variables
let reverseStrInput = document.getElementById("reverse-string-input");
let reverseStrResult = document.getElementById("reverse-string-result");
// Task 5
let sumOfTwoNoInput = document.getElementById("sum-of-two-no-input");
let targetInput = document.getElementById("sum-target-input");
let sumOfTwoNoRes = document.getElementById("sum-of-two-no-res");
// Task 6 variables
let secondsInHoursInput = document.getElementById("seconds-in-hours-input");
let secondsInHoursResult = document.getElementById("seconds-in-hours-result");
// Task 8 variables
let numExistInArrInput = document.getElementById("num-exist-in-arr-input");
let numExistInArrResult = document.getElementById("num-exist-in-arr-input");
let arr1Input = document.getElementById("arr1-input");
let arr2Input = document.getElementById("arr2-input");
let findValueInput = document.getElementById("find-value-input");
let numExistInArraysRes = document.getElementById("num-exist-in-arr-input");
// Task 10 variables
let analyzeJsonResult = document.getElementById("analyze-json-result");

// Task 16 variables
let ingExtractionInput = document.getElementById("ing-extraction-input");
let ingExtractionRes = document.getElementById("ing-extraction-res");


// Task 1 :Calculate Age in Days
const calcAgeInDays = () => {
  if (ageInDaysInput.value > 0) {
    ageInDaysResult.textContent = ageInDaysInput.value * 365;
  } else {
    alert("Please enter positive value");
  }
};

// Task 2 :Calculate Age in Seconds
const calcAgeInSeconds = () => {
  if (ageInSecondsInput.value > 0) {
    ageInSecondsResult.textContent = ageInSecondsInput.value * 31536000; //31536000 are the number of seconds per year
  } else {
    alert("Please enter positive value");
  }
};

// Task 3 : Buggy Code
const cubes = () => {
  if (cubeInput.value > 0) {
    cubeResult.textContent = cubeInput.value ** 3;
  } else {
    alert("Please enter positive value");
  }
};

// Task 4 :Reversing a String
const reversStr = () => {
  if (reverseStrInput.value.match(/^[a-zA-Z ]*$/) && reverseStrInput.value) {
    reverseStrResult.textContent = reverseStrInput.value
      .split("")
      .reverse()
      .join("");
  } else {
    alert("Please enter a string value");
  }
};

// Task 6 : How many Seconds in hours
const howManySeconds = () => {
  if (secondsInHoursInput.value > 0) {
    secondsInHoursResult.textContent = secondsInHoursInput.value * 60 * 60;
  } else {
    alert("Please enter a number");
  }
};

// program to shuffle the deck of cards
// Task 7 declare card elements
let suits = ["Spades", "Diamonds", "Club", "Heart"];
let values = [
  "Ace",
  "One",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Jack",
  "Queen",
  "King",
];
// empty array to contain cards
let deck = [];
// create a deck of cards
for (let i = 0; i < suits.length; i++) {
  for (let x = 0; x < values.length; x++) {
    let card = { Value: values[x], Suit: suits[i] };
    deck.push(card);
  }
}
// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
}
console.log("The first five cards are:");
// display 5 results
for (let i = 0; i < 5; i++) {
  console.log(`${deck[i].Value} of ${deck[i].Suit}`);
}


// Task 8 : Number exists in array
const isNumberPresent = () => {
  if (arr1Input.value != "" && arr2Input.value != "") {
    let valueInArr1;
    let valueInArr2;
    document.getElementById("array1-values").textContent =
      "[" + arr1Input.value + "]";
    document.getElementById("array2-values").textContent =
      "[" + arr2Input.value + "]";
    let arr1 = arr1Input.value.split(",");
    let arr2 = arr2Input.value.split(",");

    for (let i = 0; i < arr1.length; i++) {
      if (findValueInput.value == arr1[i]) {
        valueInArr1 = true;
        break;
      }
    }

    for (let i = 0; i < arr2.length; i++) {
      console.log("findValueInput = " + findValueInput);
      console.log("arr2 = " + arr2[i]);
      if (findValueInput.value == arr2[i]) {
        valueInArr2 = true;
        break;
      }
    }

    if (findValueInput.value == "") {
      alert("Please enter a value to search in the arrays");
    }

    if (valueInArr1 && valueInArr2) {
      numExistInArraysRes.innerHTML =
        "<p>number <b>" +
        findValueInput.value +
        "</b> found in both the arrays</p>";
    } else if (valueInArr1) {
      numExistInArraysRes.innerHTML =
        "<p>number <b>" + findValueInput.value + "</b> found in array_one</p>";
    } else if (valueInArr2) {
      numExistInArraysRes.innerHTML =
        "<p>number <b>" + findValueInput.value + "</b> found in array_two</p>";
    } else {
      numExistInArraysRes.innerHTML =
        "<p>number <b>" +
        findValueInput.value +
        "</b> was not found in both the arrays</p>";
    }
  } else {
    alert("Please enter value for both the arrays");
  }
};

//Task 9: Analyze Json
function analyzeJson() {
  let newStr = document.getElementById("analyze-json-input").value.replaceAll(" ", "").toLowerCase().trim();
  try {
    JSON.parse(newStr);
  } catch (e) {
    return alert("Please enter proper json format");
  }
  alert(Object.keys(JSON.parse(newStr)));
}

/*
function analyzeString(str) {
  let uniqChar = "",
    uniqCharCount = 0;
  // console.log(str.replaceAll(" ", "").toLowerCase());
  let newStr = str.replaceAll(" ", "").toLowerCase();
  // It is not enough for code to work
  for (let i = 0; i < newStr.length; i++) {
    // if the indexOf === lastIndexOf then the character is uniqe
    if (newStr.indexOf(newStr[i]) === newStr.lastIndexOf(newStr[i])) {
      console.log("[" + i + "] = " + newStr[i]);
      uniqChar += newStr[i];
      console.log("uniqChar in a loop = " + uniqChar);
      uniqCharCount += 1;
    }
    //if the indexOf != lastIndexOf then the character is not uniqe
  }
  console.log("uniqChar = " + uniqChar);
  console.log("uniqCharCount = " + uniqCharCount);
}
*/

const analyzeString_secondApproach = (str) => {
  let arr = str.replaceAll(" ", "").toLowerCase();
  let uniqStr = "";
  // console.log("arr = " + arr + " Target = " + targetInput.value);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // let sum = parseInt(arr[i]) + parseInt(arr[j]);
      if (arr[i] === arr[j]) {
        console.log("arr["+i+"]("+arr[i]+") === arr["+j+"]("+arr[j]+")");
        // console.log()
        // sumOfTwoNoRes.textContent =
        //   "[" + arr.indexOf(arr[i]) + "," + arr.indexOf(arr[j]) + "]";
        // return;
      } else {
        console.log("character is unique = "+ arr[i]);
        // uniqStr += arr[i];
        // console.log("uniqStr = "+ uniqStr);
        // sumOfTwoNoRes.textContent = "No result found";
      }
    }
  }
  // return uniqStr;
}

const sumOfTwoNos = () => {
  let arr = sumOfTwoNoInput.value.split(",");
  console.log("arr = " + arr + " Target = " + targetInput.value);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = parseInt(arr[i]) + parseInt(arr[j]);
      if (sum === parseInt(targetInput.value)) {
        sumOfTwoNoRes.textContent =
          "[" + arr.indexOf(arr[i]) + "," + arr.indexOf(arr[j]) + "]";
        return;
      } else {
        sumOfTwoNoRes.textContent = "No result found";
      }
    }
  }
};

// General for array inputs
const checkNumAndComma = (e) => {
  if (window.event) {
    // IE
    if (
      (e.keyCode < 48 || e.keyCode > 57) & (e.keyCode != 8) &&
      e.keyCode != 44
    ) {
      e.returnValue = false;
      return false;
    }
  } else {
    // Fire Fox
    if ((e.which < 48 || e.which > 57) & (e.which != 8) && e.which != 44) {
      e.preventDefault();
      return false;
    }
  }
};

function ingExtractor() {
  // return str.replace(/[^a-zA-Z ]/g, "").split(" ");//replace any characters to "" that is from a-z and A-Z and space 
  // finds all the characters that are not part of the a-zA-Z pattern and replaces with empty ""
  let result = ingExtractionInput.value.replace(/[^a-zA-Z ]/g, "").split(" ").filter((word) => {
    // ingExtractor("coming bringing Letting sing") ➞ ["coming", "bringing", "Letting"]
    // ingExtractor("going Ping, king sHrink dOing") ➞ ["going",, "dOing"]
    // ingExtractor("zing went ring, ding wing SINk") ➞ []
      let temp = word.toLowerCase().replace("ing", "");//com, bring, lett, s
      console.log(temp+' replaces =  '+'/[aeiou]/g = '+ temp.replace(/[aeiou]/g, ""));
      if (temp.length === temp.replace(/[aeiou]/g, "").length) {
        return false;
      }
      // returns the word that have ing even after removing one ing from a string
      // which means it returns the word with multiple syllabel
      if (word.toLowerCase().includes("ing")) {
        return true;
      }
    });
    ingExtractionRes.textContent = "["+result+"]";
}
// alert(ingExtractor("zing went ring, ding wing SINk"));
