/*------------------------------------
Task-10: Analyze JSON
-------------------------------------
Created By: Krishna Naik 
Created Date: 30-03-2023
-------------------------------------*/
const analyzeJson = (obj) => {
  return obj
    .map((values) =>
      values.substring(1, values.indexOf(":")).replace('"', "").replace('"', "")
    )
    .join("<br>");
};
