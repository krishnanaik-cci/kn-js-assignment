/*------------------------------------
Task-5: Sum of 2 Numbers
-------------------------------------
Created By: Krishna Naik Created Date: 16-Nov-2022
-------------------------------------*/
const sumOf = (arr) => {
  let target = document.getElementById("sumTarget").value;
  let sum = 0;
  if (validateForCompleteArr(arr)) {
    if (arr.length > 1) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
          sum = parseInt(arr[i]) + parseInt(arr[j]);
          console.log(`${i}(i) ${arr[i]} + ${j}(j) ${arr[j]} sum = ${sum}`);
          if (sum === parseInt(target)) {
            return (
              "Addition of values at [" +i +"," + j +"] index we get " + target
            );
          }
        }
      }
    } else {
      return -3;
    }
    if (sum != parseInt(target)) {
      return -2;
    }
  } else if (arr.le) {
    return -1;
  }
};
