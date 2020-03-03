// var ladderLength = function (beginWord, endWord, wordList) {
//     console.log(wordList)
//     if(beginWord===endWord){
//         return 1;
//     }
//     if(wordList.length===0){
//         console.log("end")
//         return null;
//     }
//     let min=Infinity;

//     for(let i=0; i<wordList.length; i++){
//         // console.log(beginWord,wordList)
//         if(checker(beginWord, wordList[i])){

//             let newBegin= wordList[i]

//             let newArr = wordList.slice()
            
//             newArr.splice(i, 1)

//             let result = ladderLength(newBegin,endWord, newArr)
//             // console.log(result)
//             if(result && result+1<min){
//                 min= 1+result;
//                 return min;
//             } else{
//                 return null;
//             }
//         }

//     }

//     return null;
   
// };

var ladderLength = function (beginWord, endWord, wordList) {

    let visited={}
    // let change = 1;
    let queue= [];
    let newArr=[];

    for(let i = 0; i<wordList.length; i++){
        if(checker(beginWord,wordList[i])){
            queue.push(wordList[i]);
            visited[wordList[i]]=2
        } else{
            newArr.push(wordList[i])
        }

    }

    while(queue.length>0){
        wordList=[];
        current = queue.shift();
        if(current===endWord){
            console.log(visited)
            return visited[current];
        }
        for(let i = 0; i<newArr.length; i++){
            if(checker(newArr[i], current)){
                visited[newArr[i]]=visited[current]+1
                queue.push(newArr[i])
            } else{
                wordList.push(newArr[i])
            }
        }
        newArr=wordList;

    }



    return 0


};

const checker = (w1,w2)=>{
    if (w1.length !== w2.length) return false;

    let a1=w1.split("");
    let a2=w2.split('');

    let dif = 0;

    for(let i=0; i<a1.length; i++){
        if(a1[i]!==a2[i]){
            dif+=1;
        }

    }
    
    if(dif!==1){
        return false;
    }
    return true;
}


let beginWord = "hit"
let endWord = "cog"
let wordList = ["hot", "dot", "dog", "lot", "log", "cog"]

console.log(ladderLength(beginWord,endWord,wordList))