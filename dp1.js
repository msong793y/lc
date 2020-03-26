function maxSubsetSumNoAdjacent(array) {

    let result = []
    result[0]= array[0]
    result[1]= Math.max(array[0],array[1])

    let i =2;

    while(i<array.length){
        result[i]= Math.max(result[i-1], result[i-2]+array[i])
        i++;

    }

    return result[result.length-1]
    // Write your code here.
}



let arr = [75,105,120,75,90,135]

console.log(maxSubsetSumNoAdjacent(arr))
