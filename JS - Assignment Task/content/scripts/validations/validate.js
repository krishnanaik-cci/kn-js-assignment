// Gloabl validation start
const globalValidation = (numberInput, onlyStringInput, numArrayInput) => {
  
  //Accept only numeric input
  for (var i = 0; i < numberInput.length; i++) {
    numberInput[i].addEventListener(
      "input",
      function () {
        this.value = this.value.replace(/&\/\\#+()$~%.'":*?<>{}=;\-\ ]/g, "");
        //enable button only if both the arrays are complete and target value is added
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
        // var oldVal = this.value.replace(/\[/g,'');
        // oldVal = oldVal.replace(/\]/g,'').replace(/(,{2,})/g, ",");
        // if(this.value != "[]"){
        // this.value = '[' + oldVal ;
        // }else{
        //   console.log
        //   this.value = oldVal;
        // }
       
        // if (this.value.length === 1 && this.value === ",") {
        //   this.value = "";
        // } else if (this.value.length === 1 && !this.value.match(/(\[)/g)) {
        //   this.value = "[" + this.value;
        // } else if (this.value.match(/(,{2,})/g)) {
        //   this.value = this.value.replace(/(,{2,})/g, ",");
        // } else if (this.value.match(/(]{2,})/g)) {
        //   this.value = this.value.replace(/(]{2,})/g, "]");
        // } else if (this.value.match(/,]/g)) {
        //   this.value = this.value.replace(/,]/g, "]");
        // } else if (this.value.match(/],/g)) {
        //   this.value = this.value.replace(/],/g, "");
        // } else if (this.value.match(/\[,/g)) {
        //   this.value = this.value.replace(/\[,/g, "");
        // }

        this.value = this.value.replace(/[^,\[\]0-9]/g, "");
        enableBtn(document.getElementById(this.getAttribute("data-target")));
      },
      false
    );
    numArrayInput[i].addEventListener("paste", (e) => e.preventDefault());
  }

  //onblur check for empty numeric array
  for (let i = 0; i < numArrayInput.length; i++) {
    numArrayInput[i].addEventListener(
      "blur",
      function () {
        console.log("this.value.length = "+ this.value == "[]");
        if (this.value.match(/,]/g) || this.value == "[]") {
          this.classList.add("invalid");
          document.getElementById(this.getAttribute("id")+"Error").classList.add("d-block");
        }else{
          this.classList.remove("invalid");
          this.classList.remove("d-block");
          document.getElementById(this.getAttribute("id")+"Error").classList.remove("d-block");
        }
      });
  }

  // Enable button if field is not empty
  const enableBtn = (parentID) => {
    parentID.querySelector("button").removeAttribute("disabled");
    console.log("parentID = "+ parentID);
    const onlyInputs = parentID.querySelectorAll(".form-control");
    let isEmpty;
    let isArrayEmpty;

    onlyInputs.forEach((input) => {
      //console.log(input.value);
      //if the input value is empty - true
      //false if no value is enterd - first condition
      //first value is not empty and its equal to [] so true
      if(!input.value){
        isEmpty = true;
        console.log("True = "+ isEmpty);
      }else if(input.value == "[]"){
        isArrayEmpty = true;
        console.log("isArrayEmpty = "+ true);
      }else{
        isEmpty = false;
      }
      console.log("isArrayEmpty = "+ isArrayEmpty +" isEmpty = "+ isEmpty);
      // if (input.value == "[]") {
      //   isEmpty = true;
      //   console.log("isEmpty true");
      // }else if(input.value != "" && input.value == "[]"){
      //   isEmpty = true;
      //   console.log("isEmpty true");
      // }else{
      //   isEmpty = false;
      //   console.log("isEmpty false");
      // }
    });

    if (isEmpty && isArrayEmpty) {
      parentID.querySelector("button").setAttribute("disabled", true);
    } else if(!isEmpty && isArrayEmpty){
      parentID.querySelector("button").setAttribute("disabled", true);
      console.log("parentID = "+ parentID);
      // parentID.querySelector("#span")
    }else if(isEmpty){
      parentID.querySelector("button").setAttribute("disabled", true);
    }else{
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

// check if numeric array is complete (checks the last value)
const validateForCompleteArr = (arrItems, sumVal) => {
  if (arrItems[arrItems.length - 1] == "") {
    return false;
  } else {
    return true;
  }
};

// check if numeric array is complete
const validateForCompleteDualArr = (arrItems1, arrItems2, tarVal) => {
  if (
    arrItems1[arrItems1.length - 1] == "" &&
    arrItems2[arrItems2.length - 1] == ""
  ) {
    
  }else {
    return true;
  }
};
