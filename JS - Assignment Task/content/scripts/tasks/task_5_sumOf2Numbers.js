/*------------------------------------
Task-5: Sum of 2 Numbers
-------------------------------------
Created By: Krishna Naik 
Created Date: 16-Nov-2022
-------------------------------------*/
const sumOf = (arr) => {
  let sum = 0;
  if (validateForCompleteArr(arr)) {
    if (arr.length > 1) {
      let obj = {};
      let diff;

      for (let i = 0; i < arr.length; i++) {
        diff = num - arr[i];
        if (obj[diff]) {
          return num+" "+arr[i];
        } else {
          obj[arr[i]] = true;
        }
      }
      return false;
      // for (let i = 0; i < arr.length; i++) {
      //   for (let j = i + 1; j <= arr.length; j++) {
      //     sum = parseInt(arr[i]) + parseInt(arr[j]);
      //     console.log(`${i}(i) ${arr[i]} + ${j}(j) ${arr[j]} sum = ${sum}`);
      //     if (sum === parseInt(target)) {
      //       return (
      //         "Addition of values at [" +i +"," + j +"] index we get " + target
      //       );
      //     }
      //   }
      // }
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
