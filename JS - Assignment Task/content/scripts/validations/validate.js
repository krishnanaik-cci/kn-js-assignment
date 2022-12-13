// Gloabl validation start
const globalValidation = (numberInput, onlyStringInput, numArrayInput) => {
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
        } else if (this.value.length === 1 && !this.value.match(/(\[)/g)) {
          this.value = "[" + this.value;
        } else if (this.value.match(/(,{2,})/g)) {
          this.value = this.value.replace(/(,{2,})/g, ",");
        } else if (this.value.match(/(]{2,})/g)) {
          this.value = this.value.replace(/(]{2,})/g, "]");
        } else if (this.value.match(/,]/g)) {
          this.value = this.value.replace(/,]/g, "]");
        } else if (this.value.match(/],/g)) {
          this.value = this.value.replace(/],/g, "");
        } else if (this.value.match(/\[,/g)) {
          this.value = this.value.replace(/\[,/g, "");
        }

        this.value = this.value.replace(/[^,\[\]0-9]/g, "");
        enableBtn(document.getElementById(this.getAttribute("data-target")));
      },
      false
    );

    numArrayInput[i].addEventListener("paste", (e) => e.preventDefault());
  }

  // Enable button if field is not empty
  const enableBtn = (parentID) => {
    parentID.querySelector("button").removeAttribute("disabled");
    const onlyInputs = parentID.querySelectorAll(".form-control");
    let isEmpty;

    onlyInputs.forEach((input) => {
      if (!input.value) {
        isEmpty = true;
      }
    });

    if (isEmpty) {
      parentID.querySelector("button").setAttribute("disabled", true);
    } else {
      parentID.querySelector("button").removeAttribute("disabled");
    }
  };
};
// Gloabl validation end

const isNotEmpty = (val) => {
  if (val === "") {
    return false;
  } else {
    return true;
  }
};

// check if numeric array is complete
const validateForCompleteArr = (arrItems, sumVal) => {
  if (arrItems[arrItems.length - 1] == "") {
    return false;
  } else if (sumVal == "") {
    return false;
  } else {
    return true;
  }
};

// check if numeric array is complete
const validateForCompleteDualArr = (arrItems1, arrItems2, tarVal) => {
  if (
    arrItems1[arrItems1.length - 1] == "" &&
    arrItems2[arrItems2.length - 1]
  ) {
  } else if (tarVal == "") {
    return false;
  } else {
    return true;
  }
};
