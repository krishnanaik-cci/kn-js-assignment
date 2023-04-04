// Global num validation array
const validtNumArray = (value) => {
  // Perform validation only when you enter numbers & when input is not empty
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
      return INVALID;
    } else if (value.split(",").length < 2) {
      return SHORT;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

const validtJsonObject = (value) => {
  // Perform validation only when you enter numbers & when input is not empty
  if (value.match(/[a-zA-Z]/g) == null && value) {
    if (
      value.charAt(0) != "{" ||
      value.charAt(value.length - 1) != "}" ||
      value.match(/,}/g) ||
      value.indexOf("{") != value.lastIndexOf("{") ||
      value.indexOf("}") != value.lastIndexOf("}") ||
      value == "{}"
    ) {
      return INVALID;
    } else if (value.split(",").length < 2) {
      return SHORT;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

// Global string validation array
const validtStringArray = (value) => {

  let stringArray = value.split(",");
  let isNameWithoutSpace;

  for(let i=0; i<stringArray.length; i++){
    if(!stringArray[i].includes(" ")){
      isNameWithoutSpace = true;
    }
  }

  //if any of the strins in array doesnt include space
  // Perform validation only when you enter numbers & when input is not empty
  if (value.match(/[0-9]/g) == null && value) {
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
      value.match(/ ,/g) ||
      value.match(/:/)
    ) {
      return INVALID;
    } else if (value.split(",").length < 2) {
      return SHORT;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

// Enable button if field is not empty
const enableBtn = (parentID) => {

  // parentID.querySelector("button").removeAttribute("disabled");
  const onlyInputs = parentID.querySelectorAll(".form-control");
  let isEmpty = false;

  onlyInputs.forEach((input) => {
    if (input.value == "" || input.classList.contains("invalid")) {
      isEmpty = true;
      if (!parentID.classList.contains("hasError")) {
        parentID.classList.add("hasError");
      }
    } else if (input.value != "" && input.classList.contains("invalid")) {
      isEmpty = true;
      if (!parentID.classList.contains("hasError")) {
        parentID.classList.add("hasError");
      }
    }
  });

  if (isEmpty) {
    parentID.querySelector("button").setAttribute("disabled", true);
  } else {
    parentID.querySelector("button").removeAttribute("disabled");
  }
};