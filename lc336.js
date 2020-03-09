
var palindromePairs = function (words) {
    
    let result=[];

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if(i!==j){
                if(isPalin(words[i]+words[j])){
                    result.push([i,j])
                }
            }
            
        }
        
    }
    return result

};


function isPalin(word) {

    for (let i = 0; i < word.length / 2; i++) {
        if (word[i]!==word[word.length-1-i]) return false
    }

    return true;
}

// console.log(isPalin("acbbca"))