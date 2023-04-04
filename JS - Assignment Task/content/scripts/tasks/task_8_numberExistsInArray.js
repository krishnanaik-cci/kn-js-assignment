/*------------------------------------
Task-6: Number exists in array
-------------------------------------
Created By: Krishna Naik 
Created Date: 03-Apr-2022
-------------------------------------*/
const isNumberPresent = (arr1, arr2, targetVal) => {
  if (arr1.includes(targetVal) && arr2.includes(targetVal)) {
    return BOTH_ARRAYS;
  } else if (arr1.includes(targetVal)) {
    return ARRAY_ONE;
  } else if (arr2.includes(targetVal)) {
    return ARRAY_TWO;
  } else {
    return false;
  }
};
