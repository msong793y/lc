var minStickers = function (stickers, target) {

    let targetMap=mapper(target)

    let stickMapArr= [];

    for(let i=0; i<stickers.length; i++){
        stickMapArr.push(mapper(stickers[i]));
    }
    
    return pros(stickMapArr, targetMap)

};


function mapper(target){
    let obj={};

    for(let i = 0; i<target.length; i++){
        if(target[i] in obj){
            obj[target[i]]++;
        } else{
            obj[target[i]]=1;
        }

    }
    return obj;
}


function pros(arr, target){
    
    let targetKeys= Object.keys(target)
    if(targetKeys.length===0){
        return 0;
    }




}
console.log(mapper("hello"))
