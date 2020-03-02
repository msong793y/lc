var findAndReplacePattern = function(words, pattern) {
    
    let patternMap= mapper(pattern);
    let resultArr=[];

    for(let i = 0; i<words.length; i++){

        let word=words[i]
        // console.log(word)
        let wordMap = mapper(word)
        // console.log(patternMap, wordMap)
        if(comparator(patternMap, wordMap)){
            resultArr.push(word)
        }
        // console.log(resultArr)

    }

    return resultArr
    
};

const comparator=(word1,word2) => {
    if (word1.length !== word2.length) {
      return false;
    }

    for(let i = 0; i<word1.length; i++){
        if (word1[i].length !== word2[i].length) {
          return false;
        }
        
        
        for(let j = 0; j<word1[i].length;j++){
            
        

            if (word1[i][j] !== word2[i][j]) {
              return false;
            }

        }

    }
    return true;

}


const mapper=(word)=>{

    
    let array=word.split("");

    
    let patternMap= {};

    for(let i =0; i<array.length; i++){
        
        let chara =array[i];
        if(chara in patternMap){
            patternMap[chara].push(i)
        } else {
            patternMap[chara]=[i]
        }
        
    }
    return Object.values(patternMap)
    
    
}


let words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"];
let pattern = "abb";

console.log(findAndReplacePattern(words, pattern));
