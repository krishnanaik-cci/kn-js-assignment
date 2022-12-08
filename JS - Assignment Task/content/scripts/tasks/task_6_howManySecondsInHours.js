/*------------------------------------
Task-6: Sum of 2 Numbers
-------------------------------------
Created By: Krishna Naik 
Created Date: 6-Dec-2022
-------------------------------------*/
const howManySeconds = (hoursVal) => {
  if (isNotEmpty(hoursVal)) {
    return hoursVal * 60 * 60;
  } else {
    return false;
  }
};