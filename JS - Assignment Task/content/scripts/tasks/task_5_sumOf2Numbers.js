/*------------------------------------
Task-5: Sum of 2 Numbers
-------------------------------------
Created By: Krishna Naik 
Modified Date: 13-Dec-2022
-------------------------------------*/
const sumOf = (arr, targetVal) => {
  const map = [];
  const indexnum = [];
  for (let x = 0; x < arr.length; x++) {
    console.log("map["+[arr[x]]+"] = "+ map[arr[x]]);
    if (map[arr[x]] != null) {//[10,20] [10,20,30,40,50] target = 80 map[10] (false), map[20] (false), map[30] (false), map[40] (false), map[50] (true)
      var index = map[arr[x]];
      indexnum[0] = index;
      indexnum[1] = x;
    } else {
      map[targetVal - arr[x]] = x;//i=0 map[70] = 0, i=1 map[60] = 1, i=2 map[50] = 2, i=3 map[40] = 3
      console.log("map["+[targetVal - arr[x]]+"] = "+ x, map[targetVal - arr[x]]);
    }
  }

  if (indexnum.length > 1) {
    return indexnum;
  } else {
    return false;
  }
};
