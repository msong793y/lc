var uniquePathsWithObstacles = function (obstacleGrid) {

    let count = 0;
    let paths= new Set();
    // path.add(obstacleGrid.toString())

    let queue=[package[obstacleGrid,[0,0]]]
    let dir= [[1,0],[0,1]]

    while(queue.length>0){
        let current=queue.shift();
        let curGrid=current[0];
        let curPosCol =current[1][0];
        let curPosRow = current[1][1];

        curGrid[curPosCol][curPosRow] = "X";
        path.add(curGrid.toString());

        
        for(let i )

        


        
    }

};

function package(grid, pos){
    return [grid, pos]
}


let arr = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]

// console.log(uniquePathsWithObstacles(arr))

console.log(arr.toString())