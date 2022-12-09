const isNotEmpty = (val) => {
  if((val === "")){
    return false;
  }else{
    return true;
  }
};

// check if numeric array is complete
const validateForCompleteArr = (arrItems) => {
  if(arrItems[arrItems.length - 1] == ""){
    return false;
  }else{
    return true;
  }
}

// check if numeric array is complete
const validateForCompleteDualArr = (arrItems1, arrItems2) => {
  if(arrItems[arrItems.length - 1] == ""){
    return false;
  }else{
    return true;
  }
}

