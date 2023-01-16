/*------------------------------------
Task-6: Number exists in array
-------------------------------------
Created By: Krishna Naik 
Created Date: 22-Dec-2022
-------------------------------------*/
const isNumberPresent = (arr1, arr2, targetVal) => {
  if (arr1.includes(targetVal) && arr2.includes(targetVal)) {
    return "both";
  } else if (arr1.includes(targetVal)) {
    return "array_one";
  } else if (arr2.includes(targetVal)) {
    return "array_two";
  } else {
    return false;
  }
};
