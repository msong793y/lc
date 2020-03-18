function findThreeLargestNumbers(array) {


    let result = [null, null, null];

    for (let i = 0; i < array.length; i++) {
        process(array[i]);
    }

    function process(ele) {

        if (ele > result[2]) {
            result.shift();
            result.push(ele);
        } else if (ele > result[1]) {
            result.shift();
            result.splice(1, 0, ele);
        } else if (ele > result[0]) {
            result[0] = ele;
        }

    }


    return result
    // Write your code here.
}





function sneakySentence(sentence, o) {

    let arr = sentence.split(" ")

    for (let i in arr){
        if(arr[i] in o){
            arr[i]= o[arr[i]]
        }
    }

    return arr.join(" ")
    // your code here
}

console.log(sneakySentence('anything you can do I can do', { 'anything': 'nothing', 'do': 'drink', 'can': 'shall' })) // 'nothing you shall drink I shall drink'
console.log(sneakySentence('what a sad ad', { 'cat': 'dog', 'sad': 'happy', 'what': 'make' })) // 'make a happy ad'
console.log(sneakySentence('keep coding okay', { 'coding': 'running', 'kay': 'pen' })) //