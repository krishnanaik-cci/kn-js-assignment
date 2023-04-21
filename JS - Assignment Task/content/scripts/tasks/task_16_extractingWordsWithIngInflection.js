/*------------------------------------
Task-16: Extracting words with "ing" Inflection
-------------------------------------
Created By: Krishna Naik 
Created Date: 31-03-2023
-------------------------------------*/
const extractWordsWithIngInflection = (str) => {
  let strVal = JSON.stringify(str);
  return strVal
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .filter((word) => {
      let temp = word.toLowerCase().replace("ing", "");
      if (temp.length === temp.replace(/[aeiou]/g, "").length) {
        return false;
      }
      if (word.toLowerCase().includes("ing")) {
        return true;
      }
    });
};
