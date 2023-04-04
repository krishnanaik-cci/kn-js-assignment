/*------------------------------------
Task-5: Sum of 2 Numbers
-------------------------------------
Created By: Krishna Naik 
Modified Date: 03-Apr-2023
-------------------------------------*/
const sumOf = (arr, targetVal) => {
  for (let index = 0; index < arr.length; index++) {
    const diff = targetVal - arr[index];
    const diffIndex = arr.indexOf(diff.toString());
    if (diffIndex !== -1 && diffIndex !== index) {
        return [index, diffIndex];
    }
}
};
