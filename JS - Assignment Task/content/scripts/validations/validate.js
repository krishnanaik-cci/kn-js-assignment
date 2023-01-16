// Gloabl validation start
// const globalValidation = (numberInput, onlyStringInput, numArrayInput) => {
  //Accept only string input
  // for (var i = 0; i < onlyStringInput.length; i++) {
  //   onlyStringInput[i].addEventListener("input", function () {
  //     this.value = this.value.replace(/[^a-zA-Z]/g, "");
  //     enableBtn(document.getElementById(this.getAttribute("data-target")));
  //   });
  // }
// };

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

// Enable button if field is not empty
const enableBtn = (parentID) => {

  parentID.querySelector("button").removeAttribute("disabled");
  const onlyInputs = parentID.querySelectorAll(".form-control");
  let isEmpty;
  let isArrayEmpty;

  onlyInputs.forEach((input) => {
    if (input.classList.contains("numArrayInput")) {
      if (input.classList.contains("invalid") || input.value.length == 0) {
        isArrayEmpty = true;
      } else {
        isArrayEmpty = false;
      }
    } else {
      if (input.value == "") {
        isEmpty = true;
      } else {
        isEmpty = false;
      }
    }
  });

  if (isEmpty && isArrayEmpty) {
    console.log("isEmpty && isArrayEmpty");
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