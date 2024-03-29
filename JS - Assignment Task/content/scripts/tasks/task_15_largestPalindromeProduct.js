/*------------------------------------
Task-15: Largest Palindrome Product
-------------------------------------
Created By: Krishna Naik 
Created Date: 31-03-2023
-------------------------------------*/
const largestPalindromProduct = () => {
  let ans = 0;
  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      let num = i * j;
      let s = String(num);
      let rs = s.split("").reverse().join("");
      if (s === rs) {
        ans = Math.max(ans, num);
      }
    }
  }

  return ans;
};
