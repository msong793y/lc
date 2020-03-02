var breakPalindrome = function(palindrome) {
  let word = palindrome.split("");
  if (word.length === 1) return "";

  let index = null;
  if (word.length % 2) {
    index = Math.floor(word.length / 2);
  } else {
    index = word.length / 2 - 2;
  }
  if(word[index]==="a"){
      word[index]="b"
  }else{
      word[index]="a"
  }
  console.log( word.join(""))
  return word.join("")
};



let stri="abba";

breakPalindrome(stri)