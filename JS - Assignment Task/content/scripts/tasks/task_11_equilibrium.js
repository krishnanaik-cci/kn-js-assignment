/*------------------------------------
Task-11: Equilibrium
-------------------------------------
Created By: Krishna Naik 
Created Date: 30-03-2023
-------------------------------------*/
const solution = (A) => {
  var sum = 0;
  for (i=0; i < A.length; i++) {
    sum += parseInt(A[i]);   
  }

  var leftSum= 0;
  var rightSum = 0;

  for (j=0; j < A.length; j++) {
    rightSum = sum - (leftSum + parseInt(A[j]));
    if(leftSum == rightSum) {
        return j;
    }
    leftSum += parseInt(A[j]);
  }
  return -1;
}