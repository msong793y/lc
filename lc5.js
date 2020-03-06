var longestPalindrome = function(s) {
  if (!s) return "";
  if (s.length === 1) return s;

  let arr = s.split("");
  let longest = -Infinity;
  let item = [0, 0];

  for (let i = 0; i < arr.length; i++) {
    let left = i - 1;
    let right = i + 1;
    let count = 1;

    while (left >= 0 && right < arr.length && arr[left] === arr[right]) {
      count += 2;
      if (count > longest) {
        longest = count;
        item = [left, right];
        
      }
      left--;
      right++;
    }

    left = i;
    right = i + 1;
    count = 0;

    while (left >= 0 && right < arr.length && arr[left] === arr[right]) {
                debugger;

      count += 2;
      if (count > longest) {
        console.log(i)
        console.log(count)
        console.log(left,right)
        longest = count;
        item = [left, right];
      }
       left--;
       right++;
    }

  }

  let result = arr.slice(item[0], item[1] + 1);
//   console.log(item[0],item[1])
  return result.join("");
};//

module.exports = { longestPalindrome}