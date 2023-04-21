/*------------------------------------
Task-9: Analyze String
-------------------------------------
Created By: Krishna Naik 
Created Date: 30-03-2023
-------------------------------------*/
const analyzeString = (stringVal) => {
  let stringValue = stringVal.toLowerCase().replaceAll(" ", "");
  let charObj = {};
  let uniqCharacters = "",
    sortedDuplicateCharacters = "";

  // loop through all the characters and store them in a charObj along with the count based on thire appearance
  for (let i = 0; i < stringValue.length; i++) {
    charObj[stringValue[i]] = charObj.hasOwnProperty(stringValue[i])
      ? charObj[stringValue[i]] + 1
      : 1;
  }

  // sort the duplicate characters using Object.keys(charObj).sort((a, b) => charObj[b] - charObj[a]) filter method will get only the duplicate characters (characters whose count > 1)
  sortedDuplicateCharacters = Object.keys(charObj)
    .sort((a, b) => charObj[b] - charObj[a])
    .filter((key) => charObj[key] > 1)
    .join("");

  // this will give us only the uniq characters
  uniqCharacters = Object.keys(charObj)
    .filter((key) => charObj[key] == 1)
    .join("");

  result = {
    uniqueCharacters: uniqCharacters,
    uniqueCharacterCount: uniqCharacters.length,
    duplicateCharacters: sortedDuplicateCharacters,
    duplicateCharacterCount: sortedDuplicateCharacters.length,
  };

  return JSON.stringify(result, null, 3);
};
