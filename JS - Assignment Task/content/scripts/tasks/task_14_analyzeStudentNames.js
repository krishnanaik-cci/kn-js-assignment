/*------------------------------------
Task-14: Analyze Student Names
-------------------------------------
Created By: Krishna Naik 
Created Date: 31-03-2023
-------------------------------------*/
const analyzeName = (studNames) => {
  let sameNamesObj = {},
    sameFirstNamesObj = {},
    sameMiddleNamesObj = {},
    sameLastNamesObj = {};

  let sameNameCount = 0,
    sameFirstNameCount = 0,
    sameMiddleNameCount = 0,
    sameLastNameCount = 0;

  for (let i = 0; i < studNames.length; i++) {
    let firstName, middleName, lastName;
    // gets the count of same names
    sameNamesObj[studNames[i].toLowerCase()] = sameNamesObj.hasOwnProperty(
      studNames[i].toLowerCase()
    )
      ? sameNamesObj[studNames[i].toLowerCase()] + 1
      : 1;

    let splitedName = studNames[i].split(" ");
    firstName = splitedName[0]; //first name

    // make sure you dont allow the user to enter 4 words for one name
    if (splitedName.length < 3) {
      lastName = splitedName[1];
    } else {
      middleName = splitedName[1];
      lastName = splitedName[2];
    }

    // gets the count of same first names
    sameFirstNamesObj[firstName.toLowerCase()] =
      sameFirstNamesObj.hasOwnProperty(firstName.toLowerCase())
        ? sameFirstNamesObj[firstName.toLowerCase()] + 1
        : 1;

    // gets the count of same middle names
    if (middleName) {
      sameMiddleNamesObj[middleName.toLowerCase()] =
        sameMiddleNamesObj.hasOwnProperty(middleName.toLowerCase())
          ? sameMiddleNamesObj[middleName.toLowerCase()] + 1
          : 1;
    }

    // gets the count of same middle names
    sameLastNamesObj[lastName.toLowerCase()] = sameLastNamesObj.hasOwnProperty(
      lastName.toLowerCase()
    )
      ? sameLastNamesObj[lastName.toLowerCase()] + 1
      : 1;
  }

  sameNameCount = Object.values(sameNamesObj)
    .filter((sameNameValCount) => sameNameValCount > 1)
    .map((preVal, currenCountVal) => preVal + currenCountVal, 0);

  sameFirstNameCount = Object.values(sameFirstNamesObj)
    .filter((sameFirstNamesValCount) => sameFirstNamesValCount > 1)
    .map((preVal, currenCountVal) => preVal + currenCountVal, 0);

  sameMiddleNameCount = Object.values(sameMiddleNamesObj)
    .filter((sameMiddleNamesValCount) => sameMiddleNamesValCount > 1)
    .map((preVal, currenCountVal) => preVal + currenCountVal, 0);

  sameLastNameCount = Object.values(sameLastNamesObj)
    .filter((sameLastNamesValCount) => sameLastNamesValCount > 1)
    .map((preVal, currenCountVal) => preVal + currenCountVal, 0);

  duplicateCount = {
    sameNamesCount: parseInt(sameNameCount) ? parseInt(sameNameCount) : 0,
    sameFirstNameCount: parseInt(sameFirstNameCount)
      ? parseInt(sameFirstNameCount)
      : 0,
    sameMiddleNameCount: parseInt(sameMiddleNameCount)
      ? parseInt(sameMiddleNameCount)
      : 0,
    sameLastNameCount: parseInt(sameLastNameCount)
      ? parseInt(sameLastNameCount)
      : 0,
  };

  return JSON.stringify(duplicateCount, null, 3);
};
