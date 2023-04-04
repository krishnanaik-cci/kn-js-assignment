/*------------------------------------
Task-14: Analyze Student Names
-------------------------------------
Created By: Krishna Naik 
Created Date: 31-03-2023
-------------------------------------*/
const analyzeStudentNames = (studNames) => {

  let duplicateFullNameCount = 0;
  let duplicateFirstNameCount = 0;
  let duplicateMiddleNameCount = 0;
  let duplicateLastNameCount = 0;

  let fullNameDuplicates = {};
  let fNameDuplicates = {};
  let mNameDuplicates = {};
  let lNameDuplicates = {};

  for (let i = 0; i < studNames.length; i++) {
    let fullname = studNames[i].toLowerCase();
    let splitCompName = fullname.split(" ");
    let fname, mname, lname;

    fname = splitCompName[0].toLowerCase();
    // if the name is having only first name and last name
    if (splitCompName.length == 2) {
      lname = splitCompName[1].toLowerCase();
    }

    // if name is having first name middle name and last name
    if (splitCompName.length == 3) {
      mname = splitCompName[1].toLowerCase();
      lname = splitCompName[2].toLowerCase();
    }

    // inner for loop
    for (let k = i + 1; k < studNames.length; k++) {
      var fulName = studNames[k].toLowerCase();
      let splitName = studNames[k].split(" ");
      var middleName = "", lastName;

      var firstName = splitName[0].toLowerCase();

      if (splitName.length == 2) {
        lastName = splitName[1].toLowerCase();
      }

      if (splitName.length == 3) {
        middleName = middleName ? 0 : splitName[1].toLowerCase();
        lastName = splitName[2].toLowerCase();
      }

      if (fullname == fulName && !Object.values(fullNameDuplicates).includes(fullname)
      ) {
        duplicateFullNameCount++;
      }

      if (
        fname == firstName && !Object.values(fNameDuplicates).includes(firstName)
      ) {
        duplicateFirstNameCount++; //all above conditions are true
      }

      if (mname == middleName && !Object.values(mNameDuplicates).includes(middleName)
      ) {
        duplicateMiddleNameCount++;
      }

      if (lname == lastName && !Object.values(lNameDuplicates).includes(lastName)
      ) {
        duplicateLastNameCount++;
      }
    }

    if (duplicateFullNameCount > 0) {
      fullNameDuplicates.fullname = fullname;
    }

    if (duplicateFirstNameCount > 0) {
      fNameDuplicates.firstName = firstName;
    }

    if (duplicateMiddleNameCount > 0) {
      mNameDuplicates.middleName = middleName;
    }

    if (duplicateLastNameCount > 0) {
      lNameDuplicates.lastName = lastName;
    }
  }

  let duplicateCount = {
    sameNames: duplicateFullNameCount ? duplicateFullNameCount+1 : 0,
    sameFirstName: duplicateFirstNameCount ? duplicateFirstNameCount+1 : 0,
    sameMiddleName: duplicateMiddleNameCount ? duplicateMiddleNameCount+1 : 0,
    sameLastName: duplicateLastNameCount ? duplicateLastNameCount+1 : 0,
  };

  return duplicateCount;
};
