/*------------------------------------
Task-13: Sentence Value
-------------------------------------
Created By: Krishna Naik 
Created Date: 31-03-2023
-------------------------------------*/
const sentenceValCount = (val) => {
  let sum = 0;
  let strValue = val.toLowerCase().replaceAll(" ", "");
  console.log(strValue);
  for(let i = 0; i<strValue.length; i++){
    sum += (strValue[i]).charCodeAt(0) - 86;
  }  
  return sum;
}