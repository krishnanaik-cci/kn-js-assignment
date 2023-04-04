/*------------------------------------
Task-9: Analyze String
-------------------------------------
Created By: Krishna Naik 
Created Date: 30-03-2023
-------------------------------------*/
const analyzeString = (str) => {
  let strVal = str.toLowerCase().replaceAll(" ", "");
  console.log("strVal = "+strVal);

  let duplicateCharObj = {};
  let uniqCharacters = "";
  let uniqCharCount = 0;

  for (let i = 0; i < strVal.length; i++) {
    let duplicateCharCount = 0;
    for (let k = i + 1; k < strVal.length; k++) {
      if (
        strVal[i] == strVal[k] &&
        !duplicateCharObj.hasOwnProperty(strVal[i])
      ) {
        duplicateCharCount++;
      }
    }

    if (duplicateCharCount > 0) {
      duplicateCharObj[strVal[i]] = duplicateCharCount
        ? duplicateCharCount + 1
        : 0;
    } else if (!duplicateCharObj.hasOwnProperty(strVal[i])) {
      uniqCharacters += strVal[i];
      uniqCharCount++;
    }
  }

  let sortedCharacters = JSON.stringify(
    Object.keys(duplicateCharObj).sort(function (a, b) {
      return duplicateCharObj[b] - duplicateCharObj[a];
    })
  );

  result = {
    "uniqueCharacters":uniqCharacters,
    "uniqueCharacterCount":uniqCharCount,
    "duplicateCharacters":JSON.parse(sortedCharacters).join(""),
    "duplicateCharacterCount":JSON.parse(sortedCharacters).join("").length
  }

  return result;
};
