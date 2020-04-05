function longestPalindromicSubstring(string) {
    let max = 0;
    let pa = ""


    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j <= string.length; j++) {
            console.log(i + " " + j)
            let word = string.slice(i, j)
            if (palin(word)) {
                let len = word.length
                if (len > max) {
                    max = len

                    pa = word
                }
            }

        }

    }
    return pa
    // Write your code here.
}

function palin(word) {
    let arr = word.split("");

    let rev = arr.reverse().join("");
    // console.log(word)
    // console.log(rev)

   if(word === rev){
       return true
   }

   return false;

}

console.log(longestPalindromicSubstring("a"))


// function longestPeak(array) {

//     let maxPeak = 0;
//     let con = null;
//     let prev = array[0];
//     let peak = 1;
//     let i = 1;

//     while (i < array.length) {
      
//         let curr = array[i]

//         // console.log("i " + i)
//         console.log("cur "+curr )
//         console.log("peak "+ peak)
//         // console.log("max " + maxPeak)
//         // console.log(con)

//         if (!con) {
//             if (curr > prev) con = "asc"
//         }


//         if (con === "asc") {
//             if (curr > prev) {
//                 peak++;
//             }
//             if (curr < prev) {
//                 con = "desc"
//             }
//             if (curr === prev) {
//                 peak = 1;
//                 con = null;
//             }
//         }

//         if (con === "desc") {
        

//             if (curr > prev) {
//                 peak = 2;
//                 con= "asc";
//             } else if( curr == prev ){

//             } else{
//                 peak++;
//             }
//             if (peak > maxPeak) {
//                 maxPeak = peak;
//             }
           
//         }

//         prev = curr;
//         i++;
//     }

//     return maxPeak
//     // Write your code here.
// }
// let arr = [1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3, 4, 5, 0, -1, -1]
// console.log(longestPeak(arr))




function groupAnagrams(words) {

    let hash = {}

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        let key = keyer(word);

        if (key in hash) {
            hash[key].push(word)
        } else {
            hash[key] = [word]
        }
    }

    console.log(hash)

    return Object.values(hash)



    function keyer(word) {
        let hash = {}

        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (char in hash) { hash[char]++ }
            else { hash[char] = 1 }
        }

        let key = ""
        // console.log(hash.keys())

        let hKeys = Object.keys(hash);
        hKeys=hKeys.sort();
        for (let i = 0; i < hKeys.length; i++) {
            key += hKeys[i].toString() + hash[hKeys[i]].toString()
        }

        return key;

    }

}

// const words = ['abc', 'dabd', 'bca', 'cab', 'ddba']


// console.log(groupAnagrams(words))