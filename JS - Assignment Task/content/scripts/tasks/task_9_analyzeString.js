const analyzeString = (str) => {
  /*
x --> item in array
i --> index of item
a --> array reference, (in this case "list")
  */
  // return str.toLowerCase().split("").filter((x, i, a) => a.includes(x.toLowerCase()));
  let uniqChar = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    console.log()
    if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
      return char;
      //duplicates
    }else{
      // uniqChar += char;
    }
  }
  return uniqChar;
}