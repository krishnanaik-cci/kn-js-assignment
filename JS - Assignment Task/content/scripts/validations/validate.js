// Global num validation array
const validtNumArray = (value) => {
  // Perform validation only when you enter numbers & when input is not empty
  // console.log("value = "+ typeof(value)+" value.length = "+ value.length+" ==> "+ value.split(",")+"--> "+ typeof(JSON.parse(value).length));
  if (value.match(/[a-zA-Z]/g) == null && value) {
    if (
      value.charAt(0) != "[" ||
      value.charAt(0).match(/(\[)/g) == null ||
      value.charAt(value.length - 1) != "]" ||
      value.match(/,]/g) ||
      value.indexOf("[") != value.lastIndexOf("[") ||
      value.indexOf("]") != value.lastIndexOf("]") ||
      value == "[]"
    ) {
      return "Invalid";
    } else if (value.split(",").length < 2) {
      return "Short";
    } else {
      return true;
    }
  } else {
    return false;
  }
};

// Global string validation array
const validtStringArray = (value) => {
  // console.log(/\s/g.test(value));

  let stringArray = value.split(",");

  console.log(stringArray);

  let isNameWithoutSpace;

  for(let i=0; i<stringArray.length; i++){
    if(!stringArray[i].includes(" ")){
      isNameWithoutSpace = true;
    }
  }

  // console.log(stringArray.filter(value => value.includes(" ")).length);

  // let count = value.filter(value => value.includes(" ")).length;
  console.log(typeof(value));
  //if any of the strins in array doesnt include space
  // Perform validation only when you enter numbers & when input is not empty
  if (value.match(/[0-9]/g) == null && value) {
    // ||
    // !(/\s/g.test(value))
    console.log(value);
    if (
      value.charAt(0) != "[" ||
      value.charAt(0).match(/(\[)/g) == null ||
      value.charAt(value.length - 1) != "]" ||
      value.match(/,]/g) ||
      value.indexOf("[") != value.lastIndexOf("[") ||
      value.indexOf("]") != value.lastIndexOf("]") ||
      value == "[]" ||
      isNameWithoutSpace ||
      value.match(/, /g) ||
      value.match(/ ,/g)
    ) {
      return "Invalid";
    } else if (value.split(",").length < 2) {
      return "Short";
    } else {
      return true;
    }
  } else {
    return false;
  }
};

// Enable button if field is not empty
const enableBtn = (parentID) => {

  parentID.querySelector("button").removeAttribute("disabled");
  const onlyInputs = parentID.querySelectorAll(".form-control");
  let isEmpty;
  let isArrayEmpty;

  //loop through all the input fields of a specifci parent id card
  onlyInputs.forEach((input) => {
    // check if it contains input with numeric arrays eg:- [1,2,3];
    if (input.classList.contains("numArrayInput") || input.classList.contains("stringArrayInput")) {
      // if array input field is having invalid class or if its value is empty
      if (input.classList.contains("invalid") || input.value.length == 0) {
        isArrayEmpty = true;
      } else {
        isArrayEmpty = false;
      }
    //if input field is not an array 
    } else {
      // if non array num input field is empty
      if (input.value == "") {
        isEmpty = true;
      } else {
        isEmpty = false;
      }
    }
  });

  if (isEmpty && isArrayEmpty) {
    parentID.querySelector("button").setAttribute("disabled", true);
  } else if (!isEmpty && isArrayEmpty) {
    console.log("!isEmpty && isArrayEmpty");
    parentID.querySelector("button").setAttribute("disabled", true);
  } else if (isEmpty) {
    console.log("isEmpty");
    parentID.querySelector("button").setAttribute("disabled", true);
  } else {
    parentID.querySelector("button").removeAttribute("disabled");
  }
};