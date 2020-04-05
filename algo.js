function minHours(map){

    let count = 0;

    let allOne = false;

    let dirs = [[-1,0],[1,0],[0,-1],[0,1]]

    while(!allOne){
        let newMap = []
        for (var i = 0; i < map.length; i++)
            newMap[i] = map[i].slice();

        console.log(count)
        console.log(map)
        allOne = true;

        for(let i =0; i<map.length; i++){
            let row = map[i];
            for(let j =0; j<row.length; j++){
                if(map[i][j]===0){
                    allOne = false;
                    if(process(i,j, row)){
                        newMap[i][j]=1;
                    }

                }

            }
        }

        if (allOne){
            return count;
        }
        map=newMap
        count++
    }
     return process(3,3,map[0])
    function process(i,j,row){
        for (let idx in dirs){
            let newI = i+dirs[idx][0]
            let newJ = j+ dirs[idx][1]
            if (newI>=0 && newJ>=0 && newI<map.length && newJ<row.length){
                // console.log(`nope ${newI + `newJ` + newJ}`)
                
                if(map[newI][newJ]===1){
                    return true;
                }
            } 

        }
        return false;

    }

}




let map = [[0, 1, 1, 0, 1],
[0, 1, 0, 1, 0],
[0, 0, 0, 0, 1],
[0, 1, 0, 0, 0]]

let mapb = [[1, 1, 1, 1, 1],
[1, 1, 1, 1, 1],
[0, 1, 0, 1, 1],
[1, 1, 1, 0, 1]]

console.log(minHours(map))