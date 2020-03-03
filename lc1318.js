var largestRectangleArea = function (heights) {
    if(heights.length===1) return heights[0]
    let max=0;

    for (let i = 0; i<heights.length; i++){
        let current = large(heights, i)
        if(current> max){
            max= current;
        }
    }

    return max;
};


function large(arr, idx){

    let i=1;
    let j=1;
    let rightArea=0;
    let leftArea=0;
    while(i+idx<arr.length){
    
        if(arr[idx]-arr[i+idx]>0){
            break
        } else{
            rightArea = arr[idx] * i
            i++;
        }
    }
    console.log(rightArea)
    while(idx-j>=0){
        if (arr[idx] - arr[idx-j] > 0) {
            break
        } else {
            leftArea = arr[idx] * j
            j++;
        }
    }
    return rightArea+leftArea+arr[idx]
}

console.log(large(
    [1,1],0))