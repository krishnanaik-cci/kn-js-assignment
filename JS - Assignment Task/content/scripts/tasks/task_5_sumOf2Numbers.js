/*------------------------------------
Task-5: Sum of 2 Numbers
-------------------------------------
Created By: Krishna Naik 
Modified Date: 13-Dec-2022
-------------------------------------*/
const sumOf = (arr, targetVal) => {

  if (validateForCompleteArr(arr, targetVal)) {
    const map = [];
    const indexnum = [];

    for (let x = 0; x < arr.length; x++) {
      if (map[arr[x]] != null) {
        var index = map[arr[x]];
        indexnum[0] = index;
        indexnum[1] = x;
        break;
      } else {
        map[targetVal - arr[x]] = x;
      }
    }

    if (indexnum.length > 1) {
      return indexnum;
    } else {
      return -2;
    }

  } else {
    return -1;
  }
};
