/*------------------------------------
Task-2: Calculate Age In Days
-------------------------------------
Created By: Krishna Naik 
Created Date: 16-Nov-2022
-------------------------------------*/
const getAgeInSecs = (age) => {
  if(isNotEmpty(age)){
    return age * 31536000; //31536000 are the number of seconds per year
  }
};