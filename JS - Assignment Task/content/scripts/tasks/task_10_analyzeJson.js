/*------------------------------------
Task-10: Analyze JSON
-------------------------------------
Created By: Krishna Naik 
Created Date: 30-03-2023
-------------------------------------*/
const analyzeJson = (obj) =>{
  if (obj) {
    return Object.keys(JSON.parse(obj)).join("<br>");
  }
}