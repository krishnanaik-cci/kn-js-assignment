/*------------------------------------
Task-6: Number exists in array
-------------------------------------
Created By: Krishna Naik Created Date: 6-Dec-2022
-------------------------------------*/
const isNumberPresent = (arr1, arr2) => {
  if (validateForCompleteArr(arr1, arr2)) {
    // let arrInput1 = arr1;
    // let arrInput2 = document.getElementById("task8ArrInput2").value;
    let findValue = document.getElementById("findValue").value;
    let valueInArr1;
    let valueInArr2;
    // document.getElementById("array1-values").textContent =
    //   "[" + arr1Input.value + "]";
    // document.getElementById("array2-values").textContent =
    //   "[" + arr2Input.value + "]";
    // let arr1 = arr1Input.value.split(",");
    // let arr2 = arr2Input.value.split(",");

    for (let i = 0; i < arr1.length; i++) {
      if (findValue == arr1[i]) {
        valueInArr1 = true;
        break;
      }
    }

    for (let i = 0; i < arr2.length; i++) {
      // console.log("findValueInput = " + findValueInput);
      // console.log("arr2 = " + arr2[i]);
      if (findValue == arr2[i]) {
        valueInArr2 = true;
        break;
      }
    }

    // if (findValueInput.value == "") {
    //   alert("Please enter a value to search in the arrays");
    // }

    // if (valueInArr1 && valueInArr2) {
    //   return "<p>number <b>" + findValue + "</b> found in both the arrays</p>";
    // }

    if (valueInArr1 && valueInArr2) {
      return "number <b>" + findValue + "</b> found in both the arrays";
    } else if (valueInArr1) {
      return "number <b>" + findValue + "</b> found in array_one";
    } else if (valueInArr2) {
      return "number <b>" + findValue + "</b> found in array_two";
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};
